"use client";
import Image from "next/image";
import spaces from "~/public/images/hero-image.dfae4f20.png";
import vacation from "~/public/images/replace.svg";
import home_improvements from "~/public/images/home.svg";
import self_care from "~/public/images/self.svg";
import useInViewAnime from "~/utils/in-view-animations";
import useMouseOffset from "~/utils/mouse-follow";

const FinancialAssistant = () => {
  const { float, pop, popRef } = useInViewAnime();
  const { mouseMove, moveRef, offsetStyle } = useMouseOffset();

  return (
    <section
      className="min-h-screen w-full  flex  items-center justify-center px-[66px]  max-xl:px-10   max-lg:min-h-auto   max-lg:py-36  max-sm:px-5  max-md:py-28 max-2xs:py-20"
      ref={popRef}
      onMouseMove={mouseMove}
      style={float}
    >
      <div className="flex  items-center justify-between   gap-20  h-full w-[1400px] max-xl:gap-10  max-lg:flex-col  max-2xl:w-full">
        <div className="flex  flex-col gap-8  flex-1 items-start    max-2xl:gap-3  max-lg:w-[490px] max-lg:self-start  max-2xs:w-full ">
          <h1 className="text-[64px] leading-[64px]    text-light-grey   max-2xl:text-[50px]  max-2xl:leading-[50px]  max-xl:text-[40px]  max-xl:leading-[40px]  max-2xs:text-[34px]  max-2xs:leading-[34px]">
            Your Smart AI <br />
            <span className="text-yellow">Financial Companion</span> <br />—
            24/7
          </h1>
          <div className="flex flex-col max-xs:gap-2 ">
            <h1 className="text-lg   text-[#ffffffcc] text-pretty  max-2xl:text-base max-xl:text-sm">
              Make smarter money moves with Spark — your AI assistant on
              WhatsApp.
              <br className="max-2xl:hidden" /> From budgets to transactions,
              Spark keeps your finances simple, clear, and always within reach.
            </h1>
          </div>
          <button
            className=" bg-yellow h-[50px]  rounded-2xl text-black  px-8 max-2xl:px-5 max-2xl:h-[40px] max-2xl:text-sm "
            style={pop}
          >
            Get Started
          </button>
        </div>
        <div className="flex-1    rounded-2xl   h-[600px]   relative self-end  justify-end flex   relative  shrink-0     max-xl:h-[540px]  ">
          <Image
            src={spaces}
            alt="Follow"
            ref={moveRef}
            style={offsetStyle}
            className="w-auto h-auto  ease-out duration-300    mx-auto object-contain"
          />
          <Image
            src={vacation}
            alt=""
            className="absolute  top-20  left-0  bounce w-48   max-xl:w-36  "
            style={pop}
          />
          <Image
            src={home_improvements}
            alt=""
            className="absolute  bottom-40  -left-16  bounce w-52  max-xl:w-40  max-xl:-left-6"
            style={pop}
          />
          <Image
            src={self_care}
            style={pop}
            alt=""
            className="absolute  top-40  right-0  bounce w-72  max-2xl:w-60  max-xl:w-48 "
          />
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistant;
