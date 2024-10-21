/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";
import aboutImg from "@public/about.png";
import Pattern2 from "@public/pattern2.png";
import Pattern3 from "@public/pattern4.png";
import GetInTouch from "./button";

export default function AboutSection({
  mainHeading,
  description,
  btnText,
  onClickHandleModal,
}: {
  mainHeading: string;
  description: string;
  btnText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickHandleModal: any;
}) {
  return (
    <section className="relative">
      <Image
         
        src={Pattern2}
        alt=""
        className="absolute -top-[50px] left-0 z-[0] w-[14%] max-lg:w-[150px] max-md:w-[100px] max-lg:-top-[40px] max-sm:hidden"
      />

      <Image
         
        src={Pattern3}
        alt=""
        className="w-[35%] absolute top-[-95px] lg:left-[32%] z-0 max-lg:right-0 max-sm:hidden"
      />
      <div className="w-[90%] flex py-24 mx-auto gap-x-10 max-[962px]:flex-col max-sm:w-[90%] max-lg:py-10 max-sm:py-10 ">
        <h2
          data-section="aboutSection"
          data-key="fashionAboutHeading"
          className="text-[40px] text-black leading-tight font-heading pb-3 font-normal min-[962px]:hidden text-center"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: mainHeading,
            }}
          ></span>
        </h2>
        <div className="w-[55%] relative max-[962px]:w-full">
          <Image   src={aboutImg} alt="" className="w-full" />
          <div className="absolute bottom-0 w-full text-center max-[962px]:hidden ">
            <GetInTouch text={btnText} onclick={onClickHandleModal} />
          </div>
        </div>
        <div className="w-[45%] max-[962px]:w-full">
          <h2
            data-section="aboutSection"
            data-key="fashionAboutHeading"
            className="text-[60px] text-black leading-tight font-heading pb-3 font-normal max-xl:text-[40px] max-[962px]:hidden "
          >
            <span
              dangerouslySetInnerHTML={{
                __html: mainHeading,
              }}
            ></span>
          </h2>
          <p
            className="text-[18px] text-black font-heading pb-5 max-xl:text-[16px] max-lg:text-[14px]"
            data-section="aboutSection"
            data-key="text"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></span>
          </p>

          <div className="text-center min-[962px]:hidden">
            <GetInTouch text={btnText} onclick={onClickHandleModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
