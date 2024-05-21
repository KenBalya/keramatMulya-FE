import React from 'react'
import Image from 'next/image'

const Plank = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="relative w-auto p-3">
          <Image
            src="/Plank.png"
            width={180}
            height={75}
            alt="plank"
            className="md:w-80 "
          />
          <Image
            src="/Star.png"
            width={50}
            height={378}
            alt="Star"
            className="absolute top-0 right-0 md:w-24"
          />
          <Image
            src="/Treasure.png"
            width={50}
            height={378}
            alt="Seaweed"
            className="absolute bottom-1 left-0 md:w-16"
          />
        </div>
        <h1 className="text-white text-xl md:text-4xl font-bold font-['Poppins'] leading-normal absolute">
          Produk Kami
        </h1>
      </div>
    </div>
  )
}

export default Plank