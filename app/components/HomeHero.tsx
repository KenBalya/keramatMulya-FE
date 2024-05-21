import React from 'react';
import Image from 'next/image';

const HomeHero = () => {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{ minHeight: "75vh" }}>
            <div className="absolute top-0 w-full h-full">
                <Image
                    src="/tekstil.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Background"
                />
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="md:pr-12">
                            <h1 className="text-white font-semibold md:text-5xl text-2xl">
                                Desa Kramat Mulya
                            </h1>
                            <p className="mt-4 md:text-lg text-sm text-gray-300">
                                Desa Kramat Mulya, memiliki kampung yang terkenal dengan sebutan &quot;kampung gamis&quot;. Desa ini terkenal karena menjadi pusat produksi gamis, tekstil, kain yang berkualitas tinggi dan terkenal sampai mancanegara.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: "70px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </div>
    );
}

export default HomeHero;
