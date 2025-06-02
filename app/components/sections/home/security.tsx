"use client";
import Image from "next/image";
import password from "~/public/icons/lock-password-svgrepo-com.svg";
import pin from "~/public/icons/password-svgrepo-com.svg";
import biometric from "~/public/icons/face-lock-protect-svgrepo-com.svg";
import useInViewAnime from "~/utils/in-view-animations";
const Security = () => {
  const security_features = [
    {
      id: 1,
      icon: pin,
      feature: "Transaction Security",
      body: "Every transaction requires a passcode by default, set during account setup. You can also set a limit to skip the passcode for smaller amounts.",
      rotate: -5,
      translate: 6,
    },
    {
      id: 2,
      icon: password,
      feature: "Secure your Spark chat with a lock for added privacy",
      body: "  Locking a chat hides it from your inbox and stores it in a secure folder, only unlockable with your password or biometrics.",
      rotate: 0,
      translate: 0,
    },
    {
      id: 3,
      icon: biometric,
      feature: "Biometric Protection",
      body: "Your chats are secured by your device’s biometrics. For extra privacy, you can choose to lock individual conversations too.",
      rotate: 5,
      translate: 6,
    },
  ];
  const { pop, popRef, float } = useInViewAnime();

  return (
    <section
      className="flex items-center justify-center  py-20 flex-col  max-2xs:py-12"
      ref={popRef}
      style={float}
    >
      <div className="flex items-center justify-center   flex-col w-[1200px]  gap-20  max-xl:w-full max-xl:px-10  max-xl:gap-10  max-2xs:px-4 ">
        <h1 className="text-[64px] leading-[70px]    text-[#ffffffcc]   max-2xl:text-[50px]  max-2xl:leading-[50px]  max-xl:text-[40px]  max-xl:leading-[40px]  max-sm:text-[34px]  max-sm:leading-[34px] text-center  max-2xs:text-2xl  max-2xs:leading-[24px]">
          Spark relies on WhatsApp’s built-in security to keep your data safe
          and private.
        </h1>
        <div className="flex gap-5 max-lg:flex-wrap max-lg:justify-center  max-md:flex-col    ">
          {security_features.map((feat) => (
            <div
              className={`w-[360px]  h-[310px]   bg-[#1e1e1e]  rounded-2xl flex flex-col gap-5  p-4 items-center   border border-[#fccb051c]  rotate-[${feat.rotate}deg] translate-y-${feat.translate}  max-xl:w-[310px]  max-xl:h-[260px]  max-xl:p-2  max-xl:gap-3  max-md:w-[400px]  max-md:rotate-none  max-md:translate-y-none  max-md:translate-none  max-2xs:w-full max-2xs:h-auto max-2xs:py-3`}
              key={feat.id}
              style={pop}
            >
              <div className=" flex flex-col  items-center ">
                <Image src={feat.icon} alt="" className="w-18 max-xl:w-12 " />
                <h1 className="text-2xl text-[#f5f5f5]  text-center font-semibold  max-xl:text-xl ">
                  {feat.feature}
                </h1>
              </div>
              <p className="text-[15px] text-[#ffffffcc] text-center px-4   max-text-sm ">
                {feat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
