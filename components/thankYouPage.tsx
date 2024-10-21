/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ThankYouPage({ dictionary }: { dictionary: any }) {
  const { thankYou } = dictionary;
  return (
    <div className="flex h-[80svh] justify-center items-center gap-5 flex-col">
      <div className="w-[50%] mx-auto text-center max-sm:w-[80%] max-[350px]:w-[90%]">
        <h1 className="text-[80px] text-black leading-tight font-heading max-xl:text-[50px] max-[350px]:text-[40px]">
          {thankYou?.thankyouHeading}
        </h1>
        <p className="text-[20px] text-black leading-tight font-heading max-xl:text-[18px] max-sm:text-[15px] max-[350px]:text-[13px] pb-4">
          {thankYou?.willTouch}
        </p>
        <a
          href="https://wa.me/+447930888192"
          id="whatsapp"
          className="text-black bg-[#F2F2F2] group px-5 py-2 font-heading border-[1px] rounded-[25px] text-[14px]  transition-all duration-200 flex justify-center items-center gap-2 w-[200px] mx-auto max-[350px]:text-[13px]"
        >
          <FontAwesomeIcon
            className="text-black text-lg group-hover:text-[#25D366] transition-all duration-300 ease-in-out"
            icon={faWhatsapp}
          />
          <span className="" id="whatsapp">
            +44 7930 888192
          </span>
        </a>
      </div>
    </div>
  );
}
