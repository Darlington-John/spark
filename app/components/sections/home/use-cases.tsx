"use client";
import Image, { StaticImageData } from "next/image";
import family from "~/public/images/cute-little-africanamerican-boy-his-600nw-2371053547.webp";
import airtime from "~/public/images/depositphotos_37034811-stock-photo-black-man-typing-on-the.jpg";
import beauty from "~/public/images/e7e72ed6db93e021af8232a1f3340a57.jpg";
interface CaseProps {
  id: number;
  main: string;
  header: string;
  img: StaticImageData;
  rotate: string;
}
const UseCases = () => {
  const cards = [
    {
      id: 1,
      main: `Send money to your younger siblings or parents in seconds, right from your phone, wherever they are.`,
      header: "Sending Pocket Money to Family",
      img: family,
      rotate: "2",
    },
    {
      id: 2,
      main: `Never run out of airtime. Recharge your phone instantly with a few taps.`,
      header: "Topping Up Your Prepaid Airtime/Data",
      img: airtime,
      rotate: "-2",
    },
    {
      id: 3,
      main: `Whether it’s a fresh cut, a glow-up, or a quick trim — Spark makes paying effortless. `,
      header: "Cut. Glow. Pay.",
      img: beauty,
      rotate: "5",
    },
  ];

  return (
    <section
      className="flex items-start  px-20    relative     justify-center   min-h-screen py-40  max-xl:min-h-auto max-lg:px-6  max-md:py-20 "
      id="use-cases"
    >
      <div className="w-[1100px] flex gap-20  justify-between max-xl:gap-5  max-md:flex-col ">
        <div className="gap-16 items-start  flex  flex-col  h-[1500px]   w-[60%] shrink-0 max-xl:h-[1400px]  max-xl:w-[50%]  max-md:h-auto  max-md:self-end max-md:w-full ">
          <div className="flex flex-col  leading-10 gap-10  sticky   self-center  top-1/2 transform -translate-y-1/2  items-start max-md:gap-0  max-xl:gap-5  max-md:items-center   max-md:gap-4   max-md:translate-none max-2xs:items-start max-2xs:gap-2">
            <h1 className="text-[64px] leading-[64px]    text-light-grey   max-2xl:text-[50px]  max-2xl:leading-[50px]  max-xl:text-[40px]  max-xl:leading-[40px]  max-2xs:text-[34px]  max-2xs:leading-[34px] max-md:text-center   max-2xs:text-start">
              Spark — With You,
              <br />
              <span className="text-yellow font-semibold">
                {" "}
                Every Step of the Day
              </span>
            </h1>
            <h1 className="text-lg  max-md:text-base max-xs:leading-none  max-xs:font-normal max-xs:text-sm text-[#ffffffcc] text-pretty max-md:text-center max-2xs:text-start">
              With support for over 50 banks, Spark is with you every step of
              the way. Transfer funds quickly and securely — whether it’s to a
              friend, a vendor, or between your own accounts.
            </h1>
            <div className=" max-xs:pt-2">
              <button className=" bg-yellow h-[50px]  rounded-2xl text-black  px-8 max-2xl:px-5 max-2xl:h-[40px] max-2xl:text-sm ">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1500px]   flex justify-between  flex-col w-[40%] shrink-0 max-xl:h-[1400px] max-xl:w-[50%]  max-md:w-full  max-md:items-start">
          {cards.map((data) => (
            <Card use={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

interface CardProps {
  use: CaseProps;
}

const Card = ({ use }: CardProps) => {
  return (
    <div
      className=" flex flex-col items-center gap-2 max-w-[270px] h-[400px]  rounded-2xl  shadow-xl  justify-between  sticky   self-center top-1/2     transform -translate-y-1/2   bg-white      overflow-hidden   max-md:translate-none    max-md:top-20"
      style={{ transform: `rotate(${use.rotate}deg)` }}
      key={use.id}
    >
      <Image src={use.img} alt="" className="w-full h-full object-cover " />

      <div className="flex flex-col gap-2   absolute bottom-0  bg-[#000000e1] text-white p-3 w-full">
        <h1 className="text-[15px] text-yellow font-semibold">{use.header}</h1>
        <h1 className="text-[13px] ">{use.main}</h1>
      </div>
    </div>
  );
};
