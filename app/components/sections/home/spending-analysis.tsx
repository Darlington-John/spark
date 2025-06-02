"use client";
import * as motion from "motion/react-client";

import Image from "next/image";
import transfer from "~/public/images/transfer-image.48526c23.png";

import vacation from "~/public/images/replace.svg";
import home_improvements from "~/public/images/home.svg";
import useInViewAnime from "~/utils/in-view-animations";
import useMouseOffset from "~/utils/mouse-follow";
const SpendingAnalysis = () => {
  const { pop, slideRef, slide, popRef, float } = useInViewAnime();
  const { mouseMove, moveRef, offsetStyle } = useMouseOffset();
  return (
    <section
      className="flex  items-center  gap-2  w-full   relative  min-h-screen  overflow-hidden px-10 justify-center max-xl:px-4 max-md:min-h-auto  max-md:py-8  max-2xs:px-1"
      onMouseMove={mouseMove}
      ref={popRef}
      id="analysis"
      style={float}
    >
      <div
        className=" flex gap-16  text-[18vw] uppercase   absolute top-0 left-0   "
        ref={slideRef}
      >
        <motion.h1
          className="w-full  text-end inline duration-300  text-[#fccb051c] "
          style={{ translateX: slide }}
        >
          Analysis
        </motion.h1>
      </div>
      <div className="flex  items-center  gap-2     relative  min-h-screen  overflow-hidden px-10 justify-center w-[1100px]  max-xl:px-0  max-lg:min-h-auto  max-md:flex-col">
        <div className="w-[50%]    p-4 shrink-0 flex flex-col items-start  gap-4 h-full max-md:self-end  max-md:w-[400px]  max-2xs:w-full  ">
          <h1 className="text-[64px] leading-[64px]    text-light-grey   max-2xl:text-[50px]  max-2xl:leading-[50px]  max-xl:text-[40px]  max-xl:leading-[40px]  max-2xs:text-[34px]  max-2xs:leading-[34px]">
            Money In, Money Out
            <br />
            <span className="text-yellow font-semibold">— Fully Tracked</span>
          </h1>
          <h1 className="text-lg  max-md:text-base max-xs:leading-none  max-xs:font-normal max-xs:text-sm text-[#ffffffcc] text-pretty">
            Spark tracks your spending for you, so you&apos;re always in control
            — no stress, no effort.
          </h1>
          <button
            className=" bg-yellow h-[50px]  rounded-2xl text-black  px-8 max-2xl:px-5 max-2xl:h-[40px] max-2xl:text-sm "
            style={pop}
          >
            Get Started
          </button>
        </div>
        <div className="w-[50%]    shrink-0  flex items-end  justify-end h-[80vh] max-md:self-start  max-md:h-auto max-md:w-full max-md:justify-start max-2xs:self-center max-2xs:justify-center  ">
          <div className="relative  h-full">
            <Image
              src={transfer}
              alt="transfer"
              className="w-full h-full object-contain"
              style={offsetStyle}
              ref={moveRef}
            />
            <Image
              src={vacation}
              alt=""
              className="absolute  top-20  left-0  bounce w-48"
              style={pop}
            />
            <Image
              src={home_improvements}
              alt=""
              className="absolute  bottom-40  -left-16  bounce w-52"
              style={pop}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendingAnalysis;
