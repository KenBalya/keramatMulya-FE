import React from 'react'
import { FeatureCard } from './FeatureCard'

export const Featured: React.FC = () => {
  return (
    <section className="py-20 max-w-screen-xl container gap-3 sm:gap-7 md:gap-10 flex flex-col items-center relative z-20 text-white">
      <h2 className="text-center font-Poppins text-4xl sm:text-5xl md:text-6xl font-bold">
        Prestasi Kami
      </h2>
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-4 sm:px-8 md:px-12 py-3 sm:py-6 md:py-9 border-2 border-white/20 text-justify">
        <span className="text-center text-base sm:text-xl lg:text-2xl font-semibold text-white">
          “Desa Karamat Mulya adalah desa dengan penghasil tekstil lokal terbesar di daerah Bandung Selatan. Kami menawarkan beberapa produk tekstil yang berkualitas dan bermutu.”
        </span>
      </div>
      <div className="flex gap-4 sm:gap-6 lg:gap-10 w-full flex-col md:flex-row">
        <FeatureCard description="Total Prestasi" total="115" />
        <FeatureCard description="Total Pendapatan" total="21" />
        <FeatureCard description="Jumlah Kreasi" total="7" />
      </div>
    </section>
  )
}
