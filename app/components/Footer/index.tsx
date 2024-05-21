import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer: React.FC = () => (
  <footer className="relative w-full overflow-hidden text-white bottom-0 z-10">
    <div className="text-center">
      <div id="icon" className="flex bg-white justify-center p-3">
        <div className="flex gap-5 px-4">
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.instagram.com/betisfasilkomui/"
          >
            <Image
              src="/ig.png"
              alt="instagram"
              width={40}
              height={40}
            />
          </a>

          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.youtube.com/channel/UC69CPdeMOB4XorunV7GCg0A"
          >
            <Image
              src="/wa.png"
              alt="twitter"
              width={45}
              height={45}
            />
          </a>
        </div>
      </div>

      <div className="bg-[#6F4E37] px-0 md:px-12 pt-5">
        <div className="flex flex-col xl:flex-row justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 md:gap-10 md:ml-10 mt-8">
            <Image
              src="/logoDesa.png"
              alt="logo"
              width={200}
              height={200}
            />
            <div className="z-10 text-center md:text-start">
              <h1 className="font-extrabold text-3xl">Desa Karamat Mulya</h1>
              <h4 className="text-xl tracking-wide font-semibold">
                Kampung Gamis
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center xl:items-start justify-center gap-4 p-5">
            <div className="text-left w-fit">
              <h1 className="font-Open_Sans font-semibold text-xl xl:text-2xl">
                Sponsored by
              </h1>
            </div>

            <Image
              src="/telkom.png"
              alt="Telkom University"
              width={100}
              height={100}
              className="md:w-[95%] md:max-w-[500px] w-[30%]"
            />
          </div>
        </div>
        <div className="flex font-koblenz justify-center md:justify-between md:items-end px-10 py-4">
          <div className="z-10">
            <div className="md:w-[500px] w-full my-2 border-[0.5px] border-white"></div>
            <div className="flex gap-4 md:gap-10 text-xl md:text-[24px] font-bold font-open-sans md:mb-10">
              <Link href="/kontak"> Kontak </Link>
              <Link href="/produk"> Produk </Link>
            </div>
          </div>
          <div className="z-20 invisible lg:visible text-md xl:text-lg w-0 md:w-1/2">
            <div className="flex items-center text-end justify-end mt-2">
              <pre className="text-end  text-gray-300 font-open-sans font-normal text-2xl">
              Jl. Legokkole No. 54, Soreang, <br />  Karamatmulya, Kec. Soreang, 
              Kabupaten Bandung, <br />Jawa Barat 40914{' '}
                <br /> 40914
              </pre>
              <Image
                src="/location.svg"
                alt="location"
                width={60}
                height={60}
                className="w-5 md:w-16"
              />
            </div>
            <div className="flex gap-5 items-center justify-end mt-2 font-open-sans font-normal text-2xl">
              <pre className="tracking-wider">02285873004</pre>
              <Image
                src="/phone.png"
                alt="mail"
                width={60}
                height={60}
                className="w-5 md:w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)