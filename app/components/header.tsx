"use client";
import { useCallback, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "~/public/images/logo_white.png";
import { useUtilsContext } from "../context/utils-context";
import { RxCaretDown } from "react-icons/rx";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { toggleOverlay } from "~/utils/toggle-overlay";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const elementStyle = {
    transition: "all 0.5s",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-50px)",
  };

  const { overlayOpen, setOverlayOpen } = useUtilsContext();

  const handleToggleOverlay = () => {
    toggleOverlay();
    setOverlayOpen(!overlayOpen);
  };
  return (
    <nav className="flex items-center justify-between  fixed top-8 left-0 z-[50] w-full    py-2  max-2xl:px-5 max-md:top-4  max-xs:top-0   px-[200px]  max-w-[1600px]  4xl:left-1/2     4xl:transform  4xl:-translate-x-1/2   ">
      <button
        className="hidden max-md:flex items-center justify-center text-white  text-2xl  h-8 w-8  rounded-md backdrop-blur-lg  bg-[#a29f9417]"
        onClick={handleToggleOverlay}
        style={elementStyle}
      >
        {overlayOpen ? (
          <IoMdClose className="w-10 " />
        ) : (
          <IoMdMenu className="w-10" />
        )}
      </button>
      <Link href="/" style={elementStyle}>
        <Image src={logo} alt="logo" className="w-[100px] max-xs:w-20  " />
      </Link>
      <div className="max-md:hidden">
        <Features style={elementStyle} />
      </div>
      <div className="flex gap-4  items-center">
        <button className="flex items-center justify-center  text-base   h-[45px]  px-4 rounded-xl  neue hover:bg-white     outline-offset-2 text-white  hover:text-black duration-150 max-md:hidden  backdrop-blur-lg bg-[#a29f9417]">
          Login
        </button>
        <button className="flex items-center justify-center  text-base bg-yellow  h-[45px]  px-4 rounded-xl  neue hover:outline hover:outline-offset-2  outline-yellow    hover:outline-2 ">
          Get Started
        </button>
      </div>
    </nav>
  );
};
interface styleProps {
  transition: string;
  opacity: number;
  transform: string;
}
export const Features = ({ style }: { style: styleProps }) => {
  const {
    headerFeatures,
    headerFeaturesVisible,
    headerFeaturesRef,
    toggleHeaderFeatures,
  } = useUtilsContext();
  const features = [
    {
      id: 1,
      link: "/#transfer",
      feature: "Transfer",
      content: "Quick, secure transfers — to anyone, anywhere.",
    },
    {
      id: 2,
      link: "/#analysis",
      feature: "Analysis",
      content: "Spark tracks spending, so you're effortlessly in control",
    },
    {
      id: 3,
      link: "/#support",
      feature: "Support",
      content: "Instant, in-app support. No calls, no waiting, no stress.",
    },
  ];
  return (
    <div className="   z-40   flex flex-col gap-2 items-center " style={style}>
      <div className="font-medium text-[#f5f5f5] gap-6  px-8   backdrop-blur-lg  flex items-center justify-between rounded-xl  relative z-40   bg-[#a29f9417] py-4">
        <div
          className="flex gap-2 items-center  cursor-pointer hover:text-yellow duration-150 "
          onClick={toggleHeaderFeatures}
        >
          <span className="text-base  ">Features</span>

          <RxCaretDown
            className={`duration-150 ${
              headerFeaturesVisible ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <Link
          href="/#use-cases"
          className="text-base hover:text-yellow duration-150"
        >
          Use cases
        </Link>
        <Link
          href="/#faqs"
          className="text-base hover:text-yellow duration-150"
        >
          FAQs
        </Link>
      </div>

      {headerFeatures && (
        <div
          className={`rounded-xl py-2  px-2   backdrop-blur-lg bg-[#a29f9417] absolute  pop z-30 flex top-[calc(120%)]   ${
            headerFeaturesVisible ? "" : "pop-hidden"
          }`}
          ref={headerFeaturesRef}
        >
          {features.map((benefit) => (
            <Link
              href={benefit.link}
              className="flex  items-center  justify-center "
              key={benefit.feature}
            >
              <div className="flex flex-col gap-1  px-4 py-3  text-[#f5f5f5] w-[190px] hover:bg-[#00000050] rounded-lg leading-none  ease-out duration-300">
                <h1 className="text-[15px]">{benefit.feature}</h1>
                <p className="leading-4  text-[13px]">{benefit.content}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
