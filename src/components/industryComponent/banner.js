"use client";

import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const Banner = ({ pageTitle, banner }) => {
  return (
    <>
      <div className="page-title-area relative w-full max-h-[540px] overflow-hidden flex justify-center items-center">
        <div className="relative w-full h-[540px]">
          <Image
            src={banner}
            alt="Banner background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="grid grid-cols-12 items-center md:gap-24">
            <div className="col-span-12 lg:col-span-7 text-center h-full flex flex-col justify-end lg:text-left">
              <h1 className="text-white text-[44px]">{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
