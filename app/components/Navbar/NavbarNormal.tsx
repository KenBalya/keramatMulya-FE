import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { NavbarProps } from './interface'
import { useRouter } from 'next/navigation'

export const NavbarNormal: React.FC<NavbarProps> = ({
  isDevelopment,
  handleClicked,
}) => {

  return (
    <div className="flex justify-between h-20 items-center font-koblenz-bold px-6 gap-x-4 lg:gap-x-8 bg-white">
      <div className="flex w-1/5 relative items-center gap-4">
        <div className="relative cursor-pointer w-full">
          <Link href="/">
            <Image
              src={'/logoDesa.png'}
              alt="logodesa"
              width={80}
              height={80}
              className="object-fill fill-inherit md:w-[80px] md:h-[80px] w-[40px] h-[40px]"
              priority
            />
          </Link>
        </div>
        {isDevelopment && (
          <div className="py-1 px-2 border-2 absolute left-14 border-red-500 rounded-full">
            <span className="text-red-500 whitespace-nowrap">DEVELOPMENT</span>
          </div>
        )}
      </div>
      <div className="hidden lg:flex gap-x-4 lg:gap-x-4 xl:gap-x-8 justify-center w-3/5 text-black">
        <Link
          href="/"
          className="font-bold capitalize hover:text-pink-500 duration-200 "
        >
          Beranda
        </Link>
        <Link
          href="/about"
          className="font-bold capitalize hover:text-pink-500 duration-200 "
        >
          Tentang Kami
        </Link>
        <Link
          href="/produk"
          className="font-bold capitalize hover:text-pink-500 duration-200"
        >
          Produk
        </Link>
        <Link
          href="/kontak"
          className="font-bold capitalize hover:text-pink-500 duration-200"
        >
          Kontak
        </Link>
      </div>
      <div className="hidden lg:flex gap-x-4 lg:gap-x-4 xl:gap-x-8 w-1/5 justify-end">
        <Link href="http://karamatmulya.desa.id/">
        <button
            className="bg-[#6F4E37] hover:bg-[#3c2616] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Lihat Profil Desa
        </button>
        </Link>
      </div>
      <button
        onClick={handleClicked}
        className="lg:hidden text-[#070402] font-bold"
      >
        <Bars3Icon height={30} width={30} />
      </button>
    </div>
  )
}