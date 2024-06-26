import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { DrawerProps } from './interface'
import { useRouter } from 'next/navigation'

export const Drawer: React.FC<DrawerProps> = ({ isClicked, closeNavbar }) => {

    return (
        <Transition
            as="div"
            className=""
            show={isClicked}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="flex flex-col z-50">
                <div className="flex flex-col border-t-2">
                    <button
                        onClick={closeNavbar}
                        className="z-40 w-full text-black capitalize font-bold"
                    >
                        <Link
                            href="/"
                            className={`bg-white text-start block w-full h-full px-4 py-5 text-black`}
                        >
                            Beranda
                        </Link>
                    </button>
                    <button
                        onClick={closeNavbar}
                        className="z-40 w-full text-black capitalize font-bold"
                    >
                        <Link
                            href="/about"
                            className={`bg-white text-start block w-full h-full px-4 py-5 text-black`}
                        >
                            Tentang Kami
                        </Link>
                    </button>
                    <button
                        onClick={closeNavbar}
                        className="z-40 w-full text-black capitalize font-bold"
                    >
    
                    </button>
                    <button
                        onClick={closeNavbar}
                        className="z-40 w-full text-black capitalize font-bold"
                    >
                        <Link
                            href="/produk"
                            className={`bg-white text-start block w-full h-full px-4 py-5 text-black`}
                        >
                            Produk Kami
                        </Link>
                    </button>
                    <button
                        onClick={closeNavbar}
                        className="z-40 w-full text-black capitalize font-bold"
                    >
                        <Link
                            href="/kontak"
                            className={`bg-white text-start block w-full h-full px-4 py-5 text-black`}
                        >
                            Kontak
                        </Link>
                    </button>
                    <Link
                        href="http://karamatmulya.desa.id/"
                        className={`bg-[#6F4E37] text-white px-4 py-5 rounded-b-md`}
                    >
                        <div className="z-40 text-white capitalize font-bold">Lihat Profil Desa</div>
                    </Link>
                </div>
            </div>
        </Transition>
    )
}