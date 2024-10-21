/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Pattern1 from "@public/pattern1.png";
import Pattern2 from "@public/pattern2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import GetInTouch from "./button";

function Banner({
  dataContent,
  slides,
  handleModalClick,
  headingClass,
  subHeadingClass,
}: {
  dataContent: any;
  slides: any;
  handleModalClick: any;
  headingClass?: string;
  subHeadingClass?: string;
}) {
  const { mainBanner, button, mainHeading, mainBannerText } = dataContent;
  return (
    <div className="w-[90%] ml-auto max-lg:w-[95%]">
      <div className="flex w-full md:items-center max-lg:gap-x-5 max-md:flex-col max-md:gap-y-10">
        <div className="w-[40%] max-lg:w-[50%] max-md:w-[70%] max-sm:w-[90%]">
          <h1
            data-section="mainBanner"
            data-key="mainFashionPageHeading"
            className={
              "text-[50px] text-black leading-tight font-heading pb-5 max-xl:text-[35px] max-sm:text-[28px] " +
              headingClass
            }
          >
            <span
              dangerouslySetInnerHTML={{
                __html: mainHeading,
              }}
            ></span>
          </h1>
          <p
            data-section="mainBanner"
            data-key="mainFashionPageText"
            className={
              "text-[20px] text-black leading-tight font-heading w-[400px] max-xl:text-[18px] max-xl:w-full max-sm:text-[15px] " +
              subHeadingClass
            }
          >
            <span
              dangerouslySetInnerHTML={{
                __html: mainBannerText,
              }}
            ></span>
          </p>
          <GetInTouch text={button.getInTouch} onclick={handleModalClick} />
        </div>
        <div className="w-[60%] max-lg:w-[50%] max-md:w-full">
          <div className="flex gap-x-10 items-end">
            <div className="w-[15%] max-lg:hidden">
              <div className="flex flex-col items-end my-5">
                <p className="text-[20px] text-black font-heading max-xl:text-[18px]">
                  200+
                </p>
                <p
                  className="text-[#A6A6A6] text-[14px] font-heading max-xl:text-[12px]"
                  data-section="mainBanner"
                  data-key="customers"
                >
                  {mainBanner.customers}
                </p>
                <div className="border-b-[2px] border-b-[#FF0000] w-[10px] pt-5"></div>
              </div>
              <div className="flex flex-col items-end my-5">
                <p className="text-[20px] text-black font-heading max-xl:text-[18px]">
                  20+
                </p>
                <p
                  className="text-[#A6A6A6] text-[14px] font-heading max-xl:text-[12px]"
                  data-section="mainBanner"
                  data-key="manufacturers"
                >
                  {mainBanner.manufacturers}
                </p>
                <div className="border-b-[2px] border-b-[#FF0000] w-[10px] pt-5"></div>
              </div>
              <div className="flex flex-col items-end my-5">
                <p className="text-[20px] text-black font-heading max-xl:text-[18px]">
                  5000+
                </p>
                <p
                  className="text-[#A6A6A6] text-[14px] font-heading max-xl:text-[12px]"
                  data-section="mainBanner"
                  data-key="orders"
                >
                  {mainBanner.orders}
                </p>
              </div>
            </div>
            <div className="w-[85%] max-lg:w-full relative">
              <div className="absolute top-[100px] -left-[70px] z-[10] max-lg:-left-[40px]">
                <Image
                  src={Pattern1}
                  alt=""
                  className="w-[150px] max-xl:w-[130px]"
                />
              </div>
              <div className="absolute -top-[30px] right-0 z-[10]">
                <Image
                  src={Pattern2}
                  alt=""
                  className="w-[170px] max-xl:w-[150px]"
                />
              </div>
              <Splide
                options={{
                  type: "fade",
                  rewind: true,
                  perPage: 1,
                  arrows: false,
                  autoplay: true,
                  interval: 10000,
                }}
              >
                {slides?.map((data: any, index: number) => (
                  <SplideSlide key={index}>
                    <Image
                      // priority={
                      //   data.slide.src.includes === "11.webp" ? true : false
                      // }
                      priority={false}
                      loading="eager"
                      src={data?.slide}
                      alt={`${data?.altText} ${index}`}
                      className="w-full h-[600px] object-cover rounded-tl-[25%] object-top max-xl:h-[500px] max-sm:h-[350px]"
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
