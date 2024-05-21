'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
    id: number;
    name: string;
    price: number;
    image_url_1: string;
    oleh: string,
    wa_link: string,
    ig_link: string
};

const Card = () => {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        // Dummy data
        const dummyData: Product[] = [
            {
                id: 1,
                name: 'Antangin',
                price: 100000,
                image_url_1: '/antangin.webp',
                oleh: "Rayhan",
                wa_link: "",
                ig_link: ""

            },
            {
                id: 2,
                name: 'Nasi Uduk',
                price: 200000,
                image_url_1: '/uduk.jpg',
                oleh: "Rayhan",
                wa_link: "",
                ig_link: ""
            },
            {
                id: 3,
                name: 'Gorengan',
                price: 150000,
                image_url_1: '/gorengan.jpg',
                oleh: "Rayhan",
                wa_link: "",
                ig_link: ""
            },
            // Add more products as needed
        ];

        setData(dummyData);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 sm:container z-10 w-full gap-2 sm:gap-5">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-3 justify-center w-full flex flex-col gap-2"
                >
                    <div className="w-full aspect-[130/57] rounded-lg overflow-hidden sm:rounded-3xl relative">
                        <Image
                            src={item.image_url_1}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            alt="logo produk"
                        />
                    </div>
                    <div className='flex justify-between'>
                        <h5 className="font-Balsamiq_Sans text-[#D73E45] font-bold text-xs md:text-lg mt-2">
                            {item.name}
                        </h5>
                        <div className="font-Balsamiq_Sans flex justify-end text-[#6F4E37] text-xs md:text-[14px] mt-2 font-bold">
                            <div className="flex items-center gap-x-1">
                                <span>
                                    Oleh: {item.oleh}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        
                        <button className="rounded-lg text-xs sm:text-sm h-8 md:h-10 py-1 w-full bg-[#6F4E37] basis-1/2 md:basis-3/4"> Detail</button>
                        
                        <div className='flex items-end justify-end gap-2 basis-1/2 md:basis-1/4'>
                            <Image
                                src='/ig.png'
                                alt={''}
                                width={30}
                                height={30}
                            />
                            <Image
                                src='/wa.png'
                                alt={''}
                                width={30}
                                height={30}
                            />
                        </div>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default Card
