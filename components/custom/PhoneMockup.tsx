import Image from 'next/image'
import React from 'react'

const PhoneMockup = ({imageSrc}: {imageSrc: string}) => {
    return (
        <div className="flex items-center justify-center p-4" 
        style={{
            pointerEvents: 'none',
            userSelect: 'none',
            touchAction: 'none',
        }}>
          {/* Phone mockup container */}
          <div className="relative w-[250px] lg:w-[270px] h-[515px] lg:h-[563px] bg-[#1e1e1e] rounded-[40px] shadow-xl overflow-hidden border-[10px] border-[#1e1e1e]">
            {/* Notch */}
            <div className="absolute top-0 z-30 left-1/2 transform -translate-x-1/2 w-[140px] flex justify-center h-[25px] bg-[#1e1e1e] rounded-b-[20px] ">
              <div className="w-[70px] h-[4px] mt-2 bg-gray-500 rounded-full"></div>
            </div>
    
            {/* Phone screen */}
            <div className="relative w-full h-full overflow-hidden rounded-[30px]">
                <Image src={imageSrc} alt="Phone Mockup" fill />
            </div>
          </div>
        </div>
      )
}

export default PhoneMockup