import Image from "next/image";
import Link from "next/link";
import spark from "~/public/images/logo_white.png";

const footerLink = [
  {
    id: 1,
    header: "Explore Spark",
    links: [
      { id: 1, t0: "/login", where: "Login" },
      { id: 2, t0: "/login", where: "Pricing" },
      { id: 3, t0: "/login", where: "Legal" },
    ],
  },
  {
    id: 3,
    header: "Follow us",
    links: [
      { id: 1, t0: "/login", where: "Instagram" },
      { id: 1, t0: "/login", where: "LinkedIn" },
      { id: 1, t0: "/login", where: "TikTok" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#121212]    flex flex-col   z-20  w-full  justify-center  items-center    py-28  border-t  border-t-[#fccb051c]  max-xs:py-10">
      <div className="flex  flex-col items-center  justify-between max-lg:justify-center  max-md:px-4   w-[1200px]  max-xl:w-full max-2xs:gap-3">
        <div className="flex items-center justify-between   w-full max-md:flex-wrap max-md:items-start ">
          <div className="flex flex-col gap-2   py-8 px-10  max-lg:px-5  max-2xs:px-0">
            <Image
              src={spark}
              alt="logo"
              className="w-80 max-xl:w-60  max-2xs:w-40"
            />
            <p className="text-[17px]  text-[#ffffffcc]  w-[400px]   max-xl:text-sm max-2xs:w-full ">
              Make smarter money moves with Spark — your WhatsApp AI for simple,
              clear, and effortless finances.
            </p>
          </div>
          {footerLink.map((data, index) => (
            <div
              className="flex flex-col gap-2  px-10 py-8 max-2xs:p-0"
              key={index}
            >
              <h1 className="text-base text-yellow   max-2xs:text-sm">
                {data.header}
              </h1>
              <div className=" flex flex-col gap-2">
                {data.links.map((data, index) => (
                  <Link
                    href={data.t0}
                    className="text-[#9F9F9F]  text-base max-md:text-xs"
                    key={index}
                  >
                    {data.where}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="self-start w-full  border-t-dashed border-t  border-t-[#fccb051c] p-4 flex items-center justify-end ">
          <h1 className="text-[#f5f5f5] text-xs">© 2025</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
