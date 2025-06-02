"use client";
import { useEffect } from "react";
import { useUtilsContext } from "../context/utils-context";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Overlay = () => {
  const { setOverlayOpen } = useUtilsContext();

  const linkname = usePathname();
  useEffect(() => {
    const overlayElement = document.getElementById("overlay");

    if (!overlayElement) {
      return;
    }
    overlayElement.style.transform = "translateX(100%)";

    setOverlayOpen(false);
  }, [linkname, setOverlayOpen]);

  const closeOverlay = () => {
    const overlayElement = document.getElementById("overlay");

    if (!overlayElement) {
      return;
    }
    overlayElement.style.transform = "translateX(100%)";

    setOverlayOpen(false);
  };
  const features = [
    {
      id: 1,
      link: "/#transfer",
      feature: "Transfer",
    },
    {
      id: 2,
      link: "/#analysis",
      feature: "Analysis",
    },
    {
      id: 3,
      link: "/#support",
      feature: "Support",
    },
    {
      id: 4,
      link: "/#use-cases",
      feature: "Use cases",
    },
    {
      id: 5,
      link: "/#faqs",
      feature: "FAQs",
    },
  ];
  return (
    <div
      className=" hidden w-full  fixed z-40 top-0 right-0 bg-[#121212]  max-md:flex      flex-col gap-16 justify-end   ease-out duration-[0.3s]  h-full text-[#fff] "
      id="overlay"
    >
      <div className="h-full overflow-scroll  flex     px-4 flex-col gap-16   px-4 pt-20 max-xs:gap-6">
        <div className={`flex gap-2 flex-col  `}>
          {features.map((feat) => (
            <Link
              href={feat.link}
              className="border-b-1  border-b-[#1e1e1e] overflow-hidden text-base border-b  w-full flex  flex-col py-3 text-[#f5f5f5]"
              key={feat.id}
              onClick={closeOverlay}
            >
              {feat.feature}
            </Link>
          ))}
        </div>
        <Link href="/login" className="w-full">
          <button
            className="rounded-md  bg-[#1e1e1e] text-white text-[22px]  py-4 text-center max-xs:text-base max-xs:py-2 w-full hover:bg-white  hover:text-black"
            onClick={closeOverlay}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Overlay;
