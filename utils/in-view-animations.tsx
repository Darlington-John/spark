"use client";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useInViewAnime = () => {
  const slideRef = useRef(null);
  const isInView = useInView(slideRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start center", "end center"],
  });

  const slideRange = isInView ? [-500, 500] : [0, 0];

  const slide = useTransform(scrollYProgress, [0, 1], slideRange);
  const popRef = useRef(null);

  const allInView = useInView(popRef, { once: false, amount: 0.4 });
  const float = {
    opacity: allInView ? "1" : "0",
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
  };

  const pop = {
    opacity: allInView ? "1" : "0",
    transform: allInView ? "scale(1)" : "scale(0)",
    transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
  };

  return {
    float,
    pop,
    popRef,
    slide,
    slideRef,
  };
};

export default useInViewAnime;
