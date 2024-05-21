'use client'

import React from 'react'
import { TestimonyCard } from './TestimonyCard'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Dummy data
const TESTIMONIES = [
  {
    name: "John Doe",
    asalSma: "Rengasdengklok",
    testimony: "Desa Kramat Mulya adalah tempat yang luar biasa dengan tekstil berkualitas tinggi.",
    imageUrl: "/gg.jpg",
    star: 5
  },
  {
    name: "Jane Smith",
    asalSma: "Cirebon",
    testimony: "Produk dari Desa Kramat Mulya sangat terkenal dan diminati hingga mancanegara.",
    imageUrl: "/gg2.jpeg",
    star: 4
  },
  // Add more dummy data as needed
]

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
}

export const Testimony: React.FC = () => {
  return (
    <div className="relative w-full pb-64">
      <div className="absolute w-full aspect-[0.7] bottom-0 left-0 z-10 pointer-events-none">
        <Image
          src="/images/DeepSea2.png"
          fill
          className="object-fill object-bottom"
          alt="Deep Sea"
        />
      </div>
      <div className="flex flex-col items-center gap-4 sm:gap-14 container relative z-30">
        <div className="relative flex flex-col items-center gap-3 sm:gap-7">
          <h2 className="text-[#3E362E] font-Milonga text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Apa Kata Mereka Tentang Desa Kami?
          </h2>
          
          <span className="font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center text-[#AC8968]">
            Testimoni dari para pelanggan tekstil Desa Karamat Mulya
          </span>
        </div>
        <div className="w-full relative">
          <Slider {...settings}>
            {TESTIMONIES.map((testimony, index) => (
              <div key={index} className="px-2">
                <TestimonyCard {...testimony} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
