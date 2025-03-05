"use client"

import { useEffect, useState, useRef } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
// import LoginImage from "@/public/app-images/login.png"
// import CategoriesImage from "@/public/app-images/Categories.png"
// import EnglishNews from "@/public/app-images/English-Feed.png"
// import HindiNews from "@/public/app-images/Hindi-Feed.png"
import Image from "next/image"

export default function HomePhone() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [showVerticalSlide, setShowVerticalSlide] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [manualControl, setManualControl] = useState(false)

  // Function to handle the transition sequence
  const handleTransition = () => {
    if (!api) return;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set up a new interval
    intervalRef.current = setInterval(() => {
      // If we're at the third slide, show vertical transition
      if (current === 2 && !showVerticalSlide && !manualControl) {
        setManualControl(true);
        setShowVerticalSlide(true);
        
        // After vertical transition, move to next slide
        setTimeout(() => {
          setShowVerticalSlide(false);
          api.scrollNext();
          setManualControl(false);
        }, 2500);
      } else if (!manualControl) {
        // Normal horizontal transition
        api.scrollNext();
      }
    }, 2500);
  };

  // Initialize and clean up the interval
  useEffect(() => {
    if (api) {
      handleTransition();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  // Update current slide index and restart transition when needed
  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
      
      return () => {
        api.off("select");
      };
    }
  }, [api]);

  // Restart transition when current slide changes
  useEffect(() => {
    if (api && !manualControl) {
      handleTransition();
    }
  }, [current, manualControl, api]);

  return (
    <div className="flex items-center justify-center p-4">
      {/* Phone mockup container */}
      <div className="relative w-[250px] lg:w-[270px] h-[515px] lg:h-[563px] bg-[#1e1e1e] rounded-[40px] shadow-xl overflow-hidden border-[10px] border-[#1e1e1e]">
        {/* Notch */}
        <div className="absolute top-0 z-30 left-1/2 transform -translate-x-1/2 w-[140px] flex justify-center h-[25px] bg-[#1e1e1e] rounded-b-[20px] ">
          <div className="w-[70px] h-[4px] mt-2 bg-gray-500 rounded-full"></div>
        </div>

        {/* Phone screen */}
        <div className="relative w-full h-full overflow-hidden rounded-[30px]">
          {/* Vertical slide overlay */}

          {/* News app content */}
          {showVerticalSlide && (
            <div className="absolute inset-0 z-20 slide-up">
              <img
                src="/app-images/Hindi-Feed.png"
                alt="App Screenshot"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <Carousel 
            className="w-full h-[calc(100%-90px)]" 
            setApi={setApi} 
            opts={{
                align: "start",
                loop: true,
            }}
            >
            <CarouselContent className="-ml-0">
              <CarouselItem className="pl-0">
                <img
                  src="/app-images/login.png"
                  alt="App Screenshot"
                  className="w-full h-full object-contain"
                  
                />
              </CarouselItem>

              <CarouselItem className="pl-0">
                <img
                  src="/app-images/Categories.png"
                  alt="App Screenshot"
                  className="w-full h-full object-contain"
                  
                />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <img
                  src="/app-images/English-Feed.png"
                  alt="App Screenshot"
                  className="w-full h-full object-contain"
                  
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

