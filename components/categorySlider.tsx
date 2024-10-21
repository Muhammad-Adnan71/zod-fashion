/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

function CategorySlider({
  slides,
  isMobile = false,
  heading,
}: {
  heading?: string;
  slides: [];
  isMobile?: boolean;
}) {
  const evenSlides = slides?.filter((_: any, index: number) => index % 2 === 0);
  const oddSlides = slides?.filter((_: any, index: number) => index % 2 !== 0);

  return (
    <div>
      {isMobile ? (
        <>
          <Splide
            className="sm:hidden"
            options={{
              type: "loop",
              direction: "ltr",
              perPage: 1,
              arrows: false,
              autoplay: true,
              interval: 2000,
              drag: false,
              pagination: false,
            }}
          >
            {evenSlides.map((slides: any, index: number) => (
              <SplideSlide key={index}>
                <div className="relative">
                  <Image
                    src={slides.image}
                    alt={
                      slides.altText
                        ? slides.altText
                        : "Zod Category Slider Image"
                    }
                    className="w-full h-[600px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-[300px] object-cover object-top rounded-tl-[15%]"
                  />

                  <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 h-[80px] flex justify-center items-center max-lg:h-[70px]">
                    <h3
                      data-section="sliderSection"
                      data-key="leatherCoat"
                      className="text-[40px] font-heading text-white text-center max-xl:text-[30px] max-lg:text-[20px] max-md:text-[16px]"
                    >
                      {slides.name}
                    </h3>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <div className="flex justify-center items-center sm:hidden">
            <h2
              className="text-[20px] font-heading text-black text-center w-[320px] py-5 max-[350px]:px-2"
              data-section="sliderSection"
              data-key="fashionSliderHeading"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: heading ? heading : "",
                }}
              ></span>
            </h2>
          </div>
          <Splide
            className="sm:hidden"
            options={{
              type: "loop",
              direction: "rtl",
              perPage: 1,
              arrows: false,
              autoplay: true,
              interval: 2000,
              drag: false,
              pagination: false,
            }}
          >
            {oddSlides.map((slides: any, index: number) => (
              <SplideSlide key={index}>
                <div className="relative">
                  <Image
                    src={slides.image}
                    alt={
                      slides.altText
                        ? slides.altText
                        : "Zod Category Slider Image"
                    }
                    className="w-full h-[600px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-[300px] object-cover object-top rounded-tl-[15%]"
                  />
                  <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 h-[80px] flex justify-center items-center max-lg:h-[70px]">
                    <h3
                      data-section="sliderSection"
                      data-key="leatherCoat"
                      className="text-[40px] font-heading text-white text-center max-xl:text-[30px] max-lg:text-[20px] max-md:text-[16px]"
                    >
                      {slides.name}
                    </h3>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </>
      ) : (
        <Splide
          className="rounded-tr-[50px] rounded-tl-[50px] overflow-hidden  max-sm:hidden"
          options={{
            type: "loop",
            perPage: 2,
            arrows: true,
            autoplay: true,
            interval: 2000,
            speed: 1000,
            drag: false,
            pagination: false,
          }}
        >
          {slides.map((slides: any, index: number) => (
            <SplideSlide key={index}>
              <div className="relative">
                <Image
                  src={slides.image}
                  className="w-full h-[600px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-[300px] object-cover object-top "
                  alt={
                    slides.altText
                      ? slides.altText
                      : "Zod Category Slider Image"
                  }
                />
                <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 h-[80px] flex justify-center items-center max-lg:h-[70px]">
                  <h3
                    data-section="sliderSection"
                    data-key="leatherCoat"
                    className="text-[36px] font-heading text-white text-center max-xl:text-[30px] max-lg:text-[20px] max-md:text-[16px]"
                  >
                    {slides.name}
                  </h3>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
}

export default CategorySlider;
