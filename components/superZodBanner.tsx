/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import pattern1 from "@public/pattern1.png";
import pattern2 from "@public/pattern2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import GetInTouch from "./button";

function SuperZodBanner({
  dataContent,
  superZodBannerSlide,
  handleBannerModal,
}: {
  dataContent: any;
  superZodBannerSlide: any;
  handleBannerModal: any;
}) {
  const { mainBanner, button } = dataContent;
  console.log(superZodBannerSlide);
  return (
    <div className="w-[90%] ml-auto max-lg:w-[95%]">
      <div className="flex w-full justify-end md:items-center max-lg:gap-x-5 max-md:flex-col max-md:gap-y-10">
        <div className="w-[45%] max-lg:w-[50%] max-md:w-[70%] max-sm:w-[90%]">
          <h2 className="text-[70px] text-black leading-tight font-heading max-xl:text-[35px]  font-semibold">
            super
            <i className="bg-gradient-to-r from-[#db0617] to-[#6500ff] bg-clip-text text-transparent">
              Zod
            </i>
          </h2>
          <h1
            data-section="mainBanner"
            data-key="superZodMainHeading"
            className="text-[50px] text-black leading-tight font-heading pb-5 max-xl:text-[35px] max-sm:text-[25px] font-light"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: mainBanner.superZodMainHeading,
              }}
            ></span>
          </h1>
          <p
            data-section="mainBanner"
            data-key="superZodText"
            className="text-[22px] text-black leading-tight font-heading w-[450px] max-xl:text-[18px] max-xl:w-full max-sm:text-[15px] font-semibold"
          >
            {mainBanner.superZodText}
          </p>
          <GetInTouch text={button.getInTouch} onclick={handleBannerModal} />
        </div>
        <div className="w-[55%] max-md:w-full">
          <div className="relative">
            <div className="absolute top-[50px] lg:left-[50px] z-[11] w-[300px] max-lg:w-full max-lg:px-3">
              <h2
                data-section="mainBanner"
                data-key="superZodImgHeading"
                className="text-[40px] font-heading text-white text-left max-xl:text-[32px] max-lg:text-[27px] max-md:text-[20px] font-bold text-shadow-color drop-shadow-lg"
              >
                {mainBanner.superZodImgHeading}
              </h2>
            </div>
            <div className="absolute top-[150px] -left-[20px] z-[10] max-lg:-left-[40px]">
              <Image
                 
                src={pattern1}
                alt=""
                className="w-[120px] max-sm:w-[100px]"
              />
            </div>
            <div className="absolute -top-[30px] right-0 z-[10]">
              <Image
                 
                src={pattern2}
                alt=""
                className="w-[170px] max-xl:w-[150px] max-sm:w-[100px]"
              />
            </div>
            <Splide
              options={{
                type: "fadd",
                rewind: "true",
                perPage: 1,
                arrows: false,
                autoplay: true,
                interval: 2000,
              }}
            >
              {superZodBannerSlide?.map((slides: any, index: number) => (
                <SplideSlide key={index}>
                  <Image
                     
                    src={slides.image}
                    alt="superzod-design-expert"
                    className="w-full h-[600px] object-cover rounded-tl-[25%] object-top max-xl:h-[500px] max-sm:h-[350px]"
                  />
                  <div className="absolute bottom-[50px] right-[10px] z-[11]">
                    <button
                      data-section="button"
                      data-key="designExpert"
                      className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[16px] rounded-[50px] px-4 py-1 font-semibold mb-2 w-fit items-center mx-auto max-sm:text-[14px]"
                    >
                      {slides.firstButton}
                    </button>
                    <button
                      data-section="button"
                      data-key="employeeCost"
                      className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[20px] rounded-[50px] px-4 py-1 flex w-fit justify-center items-center mx-auto font-semibold max-sm:text-[16px]"
                    >
                      {slides.secondButton}
                    </button>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperZodBanner;
