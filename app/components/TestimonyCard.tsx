import React from "react"
import Image from "next/image"
import { Star } from "./icons/Star"

export interface TestimonyCardProps {
    name: string
    asalSma: string
    testimony: string
    imageUrl: string
    star: number
  }
export const TestimonyCard: React.FC<TestimonyCardProps> = ({
    name,
    asalSma,
    testimony,
    imageUrl,
    star,
  }) => {
    return (
      <div className="bg-white h-96 text-black w-full flex flex-col items-center py-5 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 gap-4 sm:gap-5 rounded-3xl">
        <div className="flex gap-3 sm:gap-4 items-center w-full">
          <div className="relative min-w-[2.6rem] sm:min-w-[4rem] lg:min-w-[5rem] aspect-square rounded-full overflow-hidden bg-gray-400">
            <Image
              src={'/DefaultTestimonyPhoto.jpg'}
              alt="Default Photo"
              fill
              className="object-cover"
            />
            <Image src={imageUrl} alt={name} fill className="object-cover" />
          </div>
          <div className="flex flex-col w-fit">
            <span className="font-Milonga text-sm sm:text-lg md:text-2xl">
              {name}
            </span>
            <span className="text-black/60 text-xs sm:text-base md:text-lg">
              {asalSma}
            </span>
          </div>
        </div>
        <div className="flex gap-2 md:gap-3">
          {Array.from({ length: star }, (_, index) => (
            <Star
              key={index}
              size="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6"
              fill="fill-[#FFA622]"
            />
          ))}
        </div>
        <div className="overflow-y-scroll pr-4">
          <span className="font-medium text-sm sm:text-base md:text-lg text-[#3E362E]">
            {testimony}
          </span>
        </div>
      </div>
    )
  }