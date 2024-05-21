'use client'
import React from 'react'
import Card from './Card'
import Plank from './Plank'

export const ProductModule: React.FC = () => {
  return (
    <section 
      className="min-h-screen pb-10 md:px-16 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/bgimage.jpg')" }}
    >
      <div className="flex justify-center items-center mx-2 flex-col bg-opacity-70 bg-white">
        <Plank />
        <div className="pt-3 flex px-1 sm:px-2 container flex-row flex-wrap">
          <Card />
        </div>
      </div>
    </section>
  )
}

export default ProductModule;
