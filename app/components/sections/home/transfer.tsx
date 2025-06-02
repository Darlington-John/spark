"use client";
import * as motion from "motion/react-client";

import Image from "next/image";
import transfer from "~/public/images/transfer-image.48526c23.png";
import vacation from "~/public/images/replace.svg";
import home_improvements from "~/public/images/home.svg";
import useInViewAnime from "~/utils/in-view-animations";
import useMouseOffset from "~/utils/mouse-follow";
const Transfer = () => {
  const { float, pop, slideRef, slide, popRef } = useInViewAnime();
  const { mouseMove, moveRef, offsetStyle } = useMouseOffset();
  return (
    <section
      className="flex  items-center  gap-2  w-full   relative    overflow-hidden px-10 justify-center  max-xl:px-4  max-2xs:px-1 "
      ref={slideRef}
      style={float}
      onMouseMove={mouseMove}
    >
      <div
        className=" flex gap-16  text-[18vw] uppercase   absolute top-0 left-0   "
        ref={popRef}
      >
        <motion.h1
          className="w-full  text-end inline duration-300  text-[#fccb051c] "
          style={{ translateX: slide }}
        >
          Transfer
        </motion.h1>
      </div>
      <div className="flex  items-center  gap-2     relative  min-h-screen  px-10 justify-center w-[1100px]  max-xl:px-0  max-lg:min-h-auto  max-md:flex-col ">
        <div className="w-[50%]    shrink-0  flex items-end  justify-end h-[80vh] max-md:self-start  max-md:h-auto max-md:w-full max-md:justify-start max-2xs:self-center max-2xs:justify-center  max-2xs:order-2 max-md:order-1">
          <div className="relative  h-full">
            <Image
              src={transfer}
              alt="transfer"
              className="w-full h-full object-contain"
              ref={moveRef}
              style={offsetStyle}
            />
            <Image
              src={vacation}
              style={pop}
              alt=""
              className="absolute  top-20  left-0  bounce w-48"
            />
            <Image
              src={home_improvements}
              style={pop}
              alt=""
              className="absolute  bottom-40  -left-16  bounce w-52"
            />
          </div>
        </div>
        <div className="w-[50%]    p-4 shrink-0 flex flex-col items-start gap-4 h-full max-md:self-end  max-md:w-[400px]  max-2xs:w-full ">
          <h1 className="text-[64px] leading-[64px]    text-light-grey   max-2xl:text-[50px]  max-2xl:leading-[50px]  max-xl:text-[40px]  max-xl:leading-[40px]  max-2xs:text-[34px]  max-2xs:leading-[34px]">
            Money Transfers,
            <br />
            <span className="text-yellow font-semibold">Made Easy</span>
          </h1>
          <h1 className="text-lg  max-md:text-base max-xs:leading-none  max-xs:font-normal max-xs:text-sm text-[#ffffffcc] text-pretty">
            Quick, secure transfers — to anyone, anywhere.
          </h1>
          <button
            className=" bg-yellow h-[50px]  rounded-2xl text-black  px-8 max-2xl:px-5 max-2xl:h-[40px] max-2xl:text-sm "
            style={pop}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
