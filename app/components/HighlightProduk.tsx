'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

export const HighlightProduk: React.FC = () => {
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

  // Sample product data
  const products = [
    {
      id: 1,
      imageUrl: '/bugatti-chiron-1500.jpg',
      name: 'Bugatti',
      price: 'Rp.20000',
      sold: 2000,
      stock: 100000,
    },
    {
      id: 2,
      imageUrl: '/ferrari.jpg',
      name: 'Ferrari',
      price: 'Rp.5000',
      sold: 1500,
      stock: 80000,
    },
   
  ]

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
            Produk Unggulan Desa Kami
          </h2>
          <span className="font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center text-[#fad6b3]">
            Berikut adalah produk dengan daya jual tertinggi di desa Karamat Mulya
          </span>
        </div>
        <div className="w-full relative">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div className="bg-white rounded-xl p-3 justify-center w-full">
                  <div className="w-full aspect-[130/57] rounded-lg overflow-hidden sm:rounded-3xl relative">
                    <Image
                      src={product.imageUrl}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt="logo produk"
                    />
                  </div>
                  <div className='flex justify-between'>
                  <p className="font-Balsamiq_Sans text-black font-bold text-xs md:text-lg max-w-sm mt-2">
                    {product.name}
                  </p>
                  <h5 className="font-Balsamiq_Sans text-[#D73E45] font-bold text-xs md:text-lg mt-2">
                    {product.price}
                  </h5>
                  </div>
                
                  <div className="flex justify-start md:flex-row w-full gap-y-1 md:gap-x-2 mt-3 bg-[#6F4E37] hover:bg-pink-600">
                    <button className="rounded-lg text-xs sm:text-sm h-8 sm:h-10 md:h-12 py-3 w-full"> Detail</button>
                  </div>
                  <div className="font-Balsamiq_Sans flex justify-end text-black text-xs md:text-sm mt-5 font-bold">
                    <div className="flex items-center gap-x-1">
                      <span>
                        {product.sold} Terjual | {product.stock}
                      </span>
                      <Image
                        src="/icons/love-red.svg"
                        width={13}
                        height={14}
                        alt="liked"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
