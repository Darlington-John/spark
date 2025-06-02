"use client";
import React, { useRef } from "react";
import { floats } from "./floats";
import Image from "next/image";
import { Accordion } from "./accordion";

const Faqs = () => {
  const divRef = useRef(null);

  return (
    <div
      className="py-20   flex max-lg:px-10 md:px-4 rounded-b-[40px]   ease-in duration-300    relative justify-center flex-col items-center gap-8   max-md:px-4  max-2xs:py-10"
      id="faqs"
      ref={divRef}
    >
      <h1 className="text-[48px] leading-[48px]  max-lg:text-[40px]  max-lg:leading-none max-md:text-4xl  max-xs:text-2xl      max-lg:w-full  text-[#f5f5f5]  font-semibold text-center">
        Frequently Asked Questions
      </h1>
      {floats.map((float, index) => (
        <Image
          src={float.src}
          className="absolute   z-10 w-5 object-cover max-lg:hidden  animate-pulse"
          alt=""
          key={index}
          style={{
            ...(float.top !== undefined
              ? { top: `${float.top}px` }
              : { bottom: `${float.bottom}px` }),
            ...(float.left !== undefined
              ? { left: `${float.left}px` }
              : { right: `${float.right}px` }),
          }}
        />
      ))}

      <Accordion />
    </div>
  );
};

export default Faqs;
