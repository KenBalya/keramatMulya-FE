import React from 'react'

interface FeatureCardProps{
    total: String,
    description: String
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    total,
    description,
  }) => {
    return (
      <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div
          className="justify-center text-white text-center text-4xl leading-[56px]  tracking-wide items-stretch backdrop-blur-[20px] grow w-full rounded-[40px] border-4 border-solid border-white border-opacity-50  bg-gradient-to-t from-[rgba(255,255,255,0.20)] via-[rgba(255,255,255,0.00)] to-[rgba(255,255,255,0.08)] px-2 py-5 flex-col flex gap-4 sm:gap-6 md:gap-4 lg:gap-6"
          role="textbox"
          aria-label="Total Peserta"
        >
          <span className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-Milonga">
            {total}
          </span>
          <span className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-white font-Milonga">
            {description}
          </span>
        </div>
      </div>
    )
  }
  