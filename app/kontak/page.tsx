import React from 'react';
const Page = () => {
    return (
        <div className="relative z-10">
      <header className="min-h-screen xl:min-h-[110vh] 2xl:min-h-[150vh] bg-gradient-to-b from-[#67B6F3] via-[#3252C3] to-[#1966CE] relative">
        <div className="w-full h-screen flex justify-center items-center relative">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-[#ffffff] font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl flex items-center">
                <span>About</span>
                <span className="text-[#6BCAFF] font-extrabold text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] text-center">
                  BETIS
                </span>
              </h1>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#ffffff] font-semibold text-center">
                Bimbingan Belajar Gratis
              </span>
            </div>
            <a href="#whatisbetis">
              <button className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold px-10 py-3 md:px-8 lg:py-5 bg-gradient-to-r from-[#6BCAFF] via-[#59A0EA] to-[#68C0FB] text-white rounded-2xl">
                Explore
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
    );
};

export default Page;
