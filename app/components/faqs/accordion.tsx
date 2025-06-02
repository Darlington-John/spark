"use client";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { questions } from "./questions";

interface ItemProps {
  question: string;
  answers: {
    answer: string;
  }[];
}
interface AccordionProps {
  item: ItemProps;
  isOpen: boolean;
  onClick: () => void;
}
const AccordionItem = ({ item, isOpen, onClick }: AccordionProps) => {
  const contentHeight = useRef<HTMLDivElement | null>(null);
  const answers = item.answers || [];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const float = {
    transform: isInView ? "none" : "rotate(-10deg)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
  };
  return (
    <div
      className=" overflow-hidden text-[28px]  w-full flex flex-col bg-[#1e1e1e] rounded-[12px]  text-[#f5f5f5]"
      style={float}
      ref={ref}
    >
      <button
        className={`w-full text-left h-[72px]  flex items-center justify-between font-medium  pointer leading-none    px-12  hover:bg-[#fccb051c]  ease-out duration-300 rounded-[12px] outline-none max-sm:h-[50px] max-sm:px-4  ${
          isOpen ? "" : ""
        }`}
        onClick={onClick}
      >
        <p className="text-[18px]  max-sm:text-base">{item.question}</p>

        <RxCaretDown
          className={`w-5 ease-out duration-300  ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        ref={contentHeight}
        className="ease-out duration-300"
        style={
          isOpen && contentHeight.current
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="flex flex-col gap-4 pb-8  px-12 max-sm:px-4  sm:pb-2">
          {answers.map((data, index) => (
            <p className="text-[15px]  max-sm:text-sm " key={index}>
              {data.answer}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export const Accordion = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className=" flex flex-col gap-4 relative z-20  w-[750px]  max-4xl:mx-auto max-md:w-full">
      {questions.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          item={item}
          isOpen={activeIndices.includes(index)}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};
