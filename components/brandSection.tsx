/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import testimonial1 from "@public/testimonial1.jpeg";
import testimonial2 from "@public/testimonial2.jpeg";
import testimonial3 from "@public/testimonial3.jpeg";

export default function BrandSection({ brandSection }: { brandSection: any }) {
  return (
    <section className="bg-[#353444] bg-opacity-10">
      <div className="w-[80%] mx-auto grid grid-cols-3 py-12 gap-x-10 items-center max-lg:w-[90%] max-lg:gap-x-10 max-md:gap-x-5 max-sm:grid-cols-1">
        <div className="min-sm:border-r-[1px] min-sm:border-[#FF0000] max-sm:text-center max-sm:pb-5">
          <h2
            data-section="brandSection"
            data-key="fashionBrandSectionHeading"
            className="text-[60px] text-black leading-8 font-heading font-thin max-xl:text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: brandSection.fashionBrandSectionHeading,
              }}
            ></span>
          </h2>
        </div>
        <div className="col-span-2 max-[500px]:col-span-1">
          <Splide
            options={{
              type: "loop",
              perMove: 1,
              perPage: 2,
              gap: 10,
              arrows: false,
              autoplay: true,
              interval: 2000,
              speed: 1000,
              pagination: false,
              breakpoints: {
                1224: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div>
                <div className="flex items-center gap-x-5">
                  <Image
                     
                    src={testimonial1}
                    alt=""
                    className="w-[80px] h-[80px] rounded-full object-cover object-top max-xl:w-[70px] max-xl:h-[70px] max-sm:w-[50px] max-sm:h-[50px]"
                  />
                  <div>
                    <h2 className="text-black font-heading text-[14px] font-semibold max-xl:text-[13px]">
                      Anaqa Inspired
                    </h2>
                    <p className="text-[#A6A6A6] font-heading text-[12px] max-xl:text-[11px]">
                      London-UK
                    </p>
                  </div>
                </div>
                <p
                  className="text-[#A6A6A6] font-heading text-[14px] pt-3 max-xl:text-[13px]"
                  data-section="brandSection"
                  data-key="text1"
                >
                  {brandSection.text1}
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <div className="flex items-center gap-x-5">
                  <Image
                     
                    src={testimonial3}
                    alt=""
                    className="w-[80px] h-[80px] rounded-full object-cover object-top max-xl:w-[70px] max-xl:h-[70px] max-sm:w-[50px] max-sm:h-[50px]"
                  />
                  <div>
                    <h2 className="text-black font-heading text-[14px] font-semibold max-xl:text-[13px]">
                      Arif
                    </h2>
                    <p className="text-[#A6A6A6] font-heading text-[12px] max-xl:text-[11px]">
                      London-UK
                    </p>
                  </div>
                </div>
                <p
                  data-section="brandSection"
                  data-key="text2"
                  className="text-[#A6A6A6] font-heading text-[14px] pt-3 max-xl:text-[13px]"
                >
                  {brandSection.text2}
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <div className="flex items-center gap-x-5">
                  <Image
                     
                    src={testimonial2}
                    alt=""
                    className="w-[80px] h-[80px] rounded-full object-cover object-top max-xl:w-[70px] max-xl:h-[70px] max-sm:w-[50px] max-sm:h-[50px]"
                  />
                  <div>
                    <h2 className="text-black font-heading text-[14px] font-semibold max-xl:text-[13px]">
                      Manmeet
                    </h2>
                    <p className="text-[#A6A6A6] font-heading text-[12px] max-xl:text-[11px]">
                      Birmingham - South Asian
                    </p>
                  </div>
                </div>
                <p
                  data-section="brandSection"
                  data-key="text3"
                  className="text-[#A6A6A6] font-heading text-[14px] pt-3 max-xl:text-[13px]"
                >
                  {brandSection.text3}
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}
