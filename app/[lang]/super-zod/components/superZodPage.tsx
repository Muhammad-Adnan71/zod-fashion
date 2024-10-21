/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useContext } from "react";
import pattern4 from "@public/pattern4.png";
import ContactForm from "@components/contactForm";
import BrandSection from "@components/brandSection";
import CategorySlider from "@components/categorySlider";
import SuperZodBanner from "@components/superZodBanner";
import PackageSection from "@components/packageSection";
import GetInTouch from "@components/button";
import ModalContext from "../../../../context/ModalContext";
import ContactModal from "@components/contactModal";

function SuperZodPage({
  dictionary,
  slides,
}: {
  dictionary: any;
  slides: any;
}) {
  const {
    mainBanner,
    button,
    formSection,
    placeholder,
    sliderSection,
    superZodHeadingAndText,
    brandSection,
    superZodBannerSlide,
  } = dictionary;

  const { isModalOpen, handleModal } = useContext(ModalContext);
  return (
    <>
      <div className="overflow-x-hidden">
        <section className="py-10">
          <SuperZodBanner
            dataContent={{ mainBanner, button }}
            superZodBannerSlide={superZodBannerSlide}
            handleBannerModal={handleModal}
          />

          <div className="text-center md:hidden mt-5">
            <GetInTouch text={button.getInTouch} onclick={handleModal} />
          </div>
        </section>

        <section className=" relative pb-20 overflow-hidden pt-12 max-sm:pb-10">
          <Image
             
            src={pattern4}
            alt=""
            className="w-[20%] absolute top-[50px] left-[-40px] z-[10] max-lg:hidden rotate-[-90deg]"
          />

          <Image
             
            src={pattern4}
            alt=""
            className="w-[25%] absolute bottom-[80px] right-[-150px] z-[10] max-lg:hidden"
          />
          <div className="w-[80%] mx-auto max-w-[1400px] max-sm:w-[90%]">
            <div className="text-center">
              <h2
                data-section="superZodHeadingAndText"
                data-key="yourActualEmployee"
                className="text-[50px] text-black leading-tight font-heading max-xl:text-[35px] max-sm:text-[25px] font-semibold"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: superZodHeadingAndText.yourActualEmployee,
                  }}
                ></span>
              </h2>
              <h3
                data-section="superZodHeadingAndText"
                data-key="yourActualEmployee"
                className="py-8 text-[50px] text-black leading-tight font-heading max-xl:text-[35px] max-sm:text-[20px] font-normal"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: superZodHeadingAndText.callOrWhatsapp,
                  }}
                ></span>
              </h3>
              <div className="grid grid-cols-2 gap-10 max-sm:gap-5 w-[80%] mx-auto max-xl:w-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <h2
                      data-text="1/10"
                      className="font-heading text-[120px] max-xl:text-[100px] outline-gradient max-md:text-[80px] max-sm:text-[50px]"
                    >
                      1/10
                    </h2>
                    <span
                      className="font-heading text-[60px] outline-gradient absolute top-0 right-[-60px] max-xl:text-[50px] max-xl:right-[-50px] max-sm:text-[20px] max-sm:right-[-20px] max-sm:top-[5px]"
                      data-text="th"
                    >
                      th
                    </span>
                  </div>

                  <p
                    data-section="superZodHeadingAndText"
                    data-key="employeeCost"
                    className="text-black font-heading text-[30px] font-bold text-center max-lg:text-[25px] max-md:text-[25px] max-sm:text-[18px]"
                  >
                    {superZodHeadingAndText.employeeCost}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div>
                    <h2
                      data-text="24/7"
                      className="font-heading text-[120px] max-xl:text-[100px] outline-gradient max-md:text-[80px] max-sm:text-[50px]"
                    >
                      24/7
                    </h2>
                  </div>

                  <p
                    data-section="superZodHeadingAndText"
                    data-key="dayAndNight"
                    className="text-black font-heading text-[30px] font-bold text-center max-lg:text-[25px] max-md:text-[25px] max-sm:text-[18px]"
                  >
                    {superZodHeadingAndText.dayAndNight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1400px] w-[90%] mx-auto" id="video-section">
          <div
            id="video-section"
            className="rounded-[50px] overflow-hidden max-lg:rounded-[25px] relative w-full"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/y0Z-jUlggS0?si=uNZH2sclUPuOnjsm&mute=1&controls=1&autoplay=1&enablejsapi=1"
              title="YouTube video player"
              frameBorder="0"
              className="absolute top-0 left-0 w-full h-full z-[11]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="w-full my-24 relative max-lg:my-16 max-md:my-10">
          <Image
             
            src={pattern4}
            alt=""
            className="w-[35%] absolute top-[-190px] left-[-220px] z-[10] max-lg:hidden rotate-[180deg]"
          />

          <div className="relative max-sm:hidden">
            <div className="absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-sm:hidden">
              <div className="flex justify-center items-center">
                <h2
                  data-section="sliderSection"
                  data-key="keyThingsHeading"
                  className="text-[50px] font-heading font-bold text-white text-center max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px] text-shadow-color"
                >
                  {sliderSection.keyThingsHeading}
                </h2>
              </div>
            </div>

            <CategorySlider slides={slides} />

            <CategorySlider
              isMobile={true}
              slides={slides}
              heading={sliderSection.fashionSliderHeading}
            />
          </div>

          <div className="bg-[#F0F0F0] py-20 rounded-br-[50px] rounded-bl-[50px] relative">
            <Image
               
              src={pattern4}
              alt=""
              className="w-[20%] absolute top-[-30px] left-[-40px] z-[10] max-lg:hidden rotate-[90deg]"
            />
            <Image
               
              src={pattern4}
              alt=""
              className="w-[12%] absolute top-[-30px] right-[-25px] z-[10] max-lg:hidden rotate-[90deg]"
            />
            <div className="text-center w-[80%] mx-auto max-w-[1400px] max-md:w-full">
              <h2
                data-section="superZodHeadingAndText"
                data-key="yourSuperEmployee"
                className="text-[50px] text-black leading-tight font-heading max-xl:text-[35px] max-sm:text-[28px] font-semibold"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: superZodHeadingAndText.yourSuperEmployee,
                  }}
                ></span>
              </h2>
              <p
                data-section="superZodHeadingAndText"
                data-key="fromFindingTrendingDesigns"
                className="font-heading text-black text-[25px] w-[70%] mx-auto py-10 font-normal max-md:w-[90%] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]"
              >
                {superZodHeadingAndText.fromFindingTrendingDesigns}
              </p>
              <h3
                data-section="superZodHeadingAndText"
                data-key="atEmployeeCost s"
                className="text-[50px] text-black leading-tight font-heading max-xl:text-[35px] max-sm:text-[25px] font-semibold"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: superZodHeadingAndText.atEmployeeCost,
                  }}
                ></span>
              </h3>
            </div>
          </div>
        </section>

        <PackageSection
          button={button}
          superZodHeadingAndText={superZodHeadingAndText}
          handleModalClick={handleModal}
        />

        <section className=" relative py-36 " id="formSection">
          <Image
             
            src={pattern4}
            alt=""
            className="w-[40%] absolute top-[-160px] right-[-100px] z-[-1] max-lg:hidden"
          />
          <Image
             
            src={pattern4}
            alt=""
            className="w-[20%] absolute bottom-[200px] right-[-60px] z-[10] max-lg:hidden"
          />

          <div className="w-[80%] mx-auto max-sm:w-[90%]">
            <div className="text-center">
              <h2
                data-section="formSection"
                data-key="superZodFormHeading"
                className="text-[50px] text-black leading-tight font-heading max-xl:text-[35px] max-sm:text-[25px] font-normal"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: formSection.superZodFormHeading,
                  }}
                ></span>
              </h2>
              <h3
                data-section="superZodHeadingAndText"
                data-key="atEmployeeCost"
                className="text-[30px] text-black leading-tight font-heading font-semibold py-5  max-xl:text-[25px] max-sm:text-[20px]"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: superZodHeadingAndText.atEmployeeCost,
                  }}
                ></span>
              </h3>
            </div>
            <ContactForm
              formContent={{
                ...formSection,
                ...placeholder,
                ...button,
                sliderSection,
              }}
              sourceName="super-zod"
            />
          </div>
        </section>

        <BrandSection brandSection={brandSection} />

        {isModalOpen && (
          <ContactModal
            isModal={true}
            formContent={{
              ...formSection,
              ...placeholder,
              ...button,
              sliderSection,
            }}
            sourceName="super zod"
            mainHeading={formSection.superZodFormHeading}
            secondHeading={superZodHeadingAndText.atEmployeeCost}
          />
        )}
      </div>
    </>
  );
}

export default SuperZodPage;
