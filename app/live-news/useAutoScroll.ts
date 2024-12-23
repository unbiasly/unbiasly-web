// hooks/useAutoScroll.ts
import { useEffect, useRef } from 'react';

export function useAutoScroll(scrollSpeed = 1) {
    // Reference to track if scrolling should continue
    const scrollingEnabled = useRef(true);
    // Reference to store the animation frame ID
    const animationFrameId = useRef<number>();
    
    useEffect(() => {
        // Starting position
        let lastScrollTop = window.pageYOffset;
        
        // This function controls the smooth scrolling animation
        const smoothScroll = () => {
            // Only continue if scrolling is enabled
            if (!scrollingEnabled.current) {
                return;
            }
            
            // Get current scroll position
            const currentScrollTop = window.pageYOffset;
            // Calculate maximum possible scroll position
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            
            // Check if we haven't reached the bottom of the page
            if (currentScrollTop < maxScroll) {
                // Perform the scroll
                window.scrollTo({
                    top: currentScrollTop + scrollSpeed,
                    behavior: 'auto' // We manage smoothness through small increments
                });
                
                // Update last known position
                lastScrollTop = currentScrollTop;
                // Request next animation frame for continuous scrolling
                animationFrameId.current = requestAnimationFrame(smoothScroll);
            }
        };

        // Begin the scrolling animation
        animationFrameId.current = requestAnimationFrame(smoothScroll);

        // Cleanup function that runs when component unmounts
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            scrollingEnabled.current = false;
        };
    }, [scrollSpeed]); // Re-run effect if scroll speed changes

    // Return methods to control scrolling behavior
    return {
        pauseScroll: () => {
            scrollingEnabled.current = false;
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        },
        resumeScroll: () => {
            scrollingEnabled.current = true;
            // Define smoothScroll again within this scope
            const smoothScroll = () => {
                if (!scrollingEnabled.current) return;
                
                const currentScrollTop = window.pageYOffset;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                
                if (currentScrollTop < maxScroll) {
                    window.scrollTo({
                        top: currentScrollTop + scrollSpeed,
                        behavior: 'auto'
                    });
                    
                    animationFrameId.current = requestAnimationFrame(smoothScroll);
                }
            };
            
            // Start scrolling again
            animationFrameId.current = requestAnimationFrame(smoothScroll);
        }
    };
}