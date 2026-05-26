"use client";
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react";
import { ABOUT_US_CONSTANTS } from "@/lib/constants/aboutUs-constants";
import PhoneMockup from "./PhoneMockup";


export const KeyFeatures = ({ ...props }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const features = ABOUT_US_CONSTANTS?.FEATURES;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % features.length)
    }

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
    }

    return (
        <div {...props} className="text-white mt-5 lg:mt-6 relative flex items-center justify-center w-full">
            <button
                onClick={previousSlide}
                className="absolute top-1/2 -left-8 -translate-y-1/2 transform z-10"
                aria-label="Previous feature">
                <ChevronLeft className="w-12 h-12 text-white/60 hover:text-white transition-colors" />
            </button>

            <div className="mx-15 overflow-hidden">
                <div style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    className="transition-transform duration-500 ease-in-out flex">
                    {ABOUT_US_CONSTANTS?.FEATURES.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={cn(
                                "flex flex-col min-h-[524px] relative items-center lg:items-start w-full flex-shrink-0",
                                "lg:flex-row lg:justify-between lg:gap-8",)}>
                            
                            <div className="flex-1 mt-5 lg:my-auto lg:ml-8 max-lg:text-center">
                                <div className="text-zinc-500 mb-2 text-2xl lg:text-6xl">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <h3 className="text-base leading-tight lg:text-4xl lg:leading-tight font-medium mb-3">
                                    {feature.title}
                                </h3>
                                <p className="max-w-[800px] text-xs leading-relaxed lg:text-xl lg:leading-relaxed mt-1 lg:mt-3 text-gray-300">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="relative mt-8 lg:mt-0 mx-10">
                                <PhoneMockup imageSrc={feature.imageSrc} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-8 -translate-y-1/2 transform z-10"
                aria-label="Next feature">
                <ChevronRight className="w-12 h-12 text-white/60 hover:text-white transition-colors" />
            </button>
        </div>
    )
}

