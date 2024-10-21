/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import "@splidejs/react-splide/css";
import Pattern1 from "@public/pattern1.png";
import Pattern3 from "@public/pattern4.png";
import Pattern4 from "@public/pattern3.png";
import CategorySlider from "./categorySlider";
import BrandSection from "./brandSection";
import AboutSection from "./aboutSection";
import ContactForm from "./contactForm";
import Banner from "./banner";
import GetInTouch from "./button";
import ModalContext from "../context/ModalContext";
import { useContext } from "react";
import ContactModal from "./contactModal";

export default function RugsAndCarpetsPage({
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
    aboutSection,
    helpSection,
    whyZodSection,
    brandSection,
    RugsBannerSlides,
  } = dictionary;
  const { isModalOpen, handleModal } = useContext(ModalContext);

  return (
    <main>
      {/* banner section  */}

      <section className="py-10">
        <Banner
          dataContent={{
            mainBanner,
            button,
            mainHeading: mainBanner.mainRugsPageHeading,
            mainBannerText: mainBanner.mainRugsPageText,
          }}
          slides={RugsBannerSlides}
          handleModalClick={handleModal}
        />

        <div className="text-center md:hidden mt-5">
          <GetInTouch text={button.getInTouch} onclick={handleModal} />
        </div>
      </section>

      {/* <!-- form section --> */}

      <section className=" relative pb-36 overflow-hidden " id="formSection">
        <Image
          src={Pattern4}
          alt=""
          className="w-[40%] absolute bottom-[150px] left-[-80px] z-[10] max-lg:hidden"
        />
        <Image
          src={Pattern3}
          alt=""
          className="w-[25%] absolute bottom-[80px] right-[-150px] z-[10] max-lg:hidden"
        />

        <div className="absolute bottom-4 right-[160px] z-[10] max-lg:hidden">
          <Image src={Pattern1} alt="" className="w-[100px]" />
        </div>
        <div className="w-[80%] mx-auto max-sm:w-[90%]">
          <h2
            data-section="formSection"
            data-key="fashionFormHeading"
            className="text-[50px] text-black leading-tight font-heading py-10 text-center max-lg:text-[35px] max-sm:text-[30px] max-[400px]:text-[25px] max-sm:py-0 max-sm:pb-10"
          >
            {formSection.RugsFormHeading}
          </h2>
          <ContactForm
            formContent={{
              ...formSection,
              ...placeholder,
              ...button,
              sliderSection,
            }}
            sourceName="rugs-and-carpets
            "
          />
        </div>
      </section>

      {/* <!-- category slider --> */}

      <section className="w-full my-24 relative max-lg:my-16 max-md:my-10">
        <div className="absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-sm:hidden">
          <div className="flex justify-center items-center">
            <h2
              data-section="sliderSection"
              data-key="fashionSliderHeading"
              className="text-[50px] font-heading text-white text-center max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px] font-semibold text-shadow-color"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: sliderSection.growingCatalogueHeading,
                }}
              ></span>
            </h2>
          </div>
        </div>

        <CategorySlider slides={slides} />

        <CategorySlider
          isMobile={true}
          slides={slides}
          heading={sliderSection.growingCatalogueHeading}
        />
      </section>

      {/* <!-- about section --> */}
      <AboutSection
        mainHeading={aboutSection.fashionAboutHeading}
        description={aboutSection.aboutSectionDescription}
        btnText={button.getInTouch}
        onClickHandleModal={handleModal}
      />

      {/* <!-- help section --> */}
      <section className="w-[80%] mx-auto py-24 max-lg:w-[90%] max-sm:py-10">
        <h2
          data-section="helpSection"
          data-key="fashionHelpSectionHeading"
          className="text-[60px] text-black leading-tight font-heading pb-10 text-center font-extralight max-lg:text-[40px] max-sm:text-[30px] max-[400px]:text-[25px]"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: helpSection.fashionHelpSectionHeading,
            }}
          ></span>
        </h2>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="bg-[#353444] bg-opacity-10 p-10 rounded-[10px] min-h-[300px] max-lg:p-5 max-lg:min-h-[250px] max-sm:min-h-fit max-sm:p-5">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[50px] max-lg:text-[40px] max-sm:text-[35px]">
              01
            </h2>
            <h3
              className="text-black font-heading font-semibold text-[25px] pb-3 max-lg:text-[20px] "
              data-section="helpSection"
              data-key="trendingDesignsTitle"
            >
              {helpSection.trendingDesignsTitle}
            </h3>
            <p className="text-black font-heading text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
              {helpSection.trendingDesignsText2}
            </p>
          </div>
          <div className="bg-[#353444] bg-opacity-10 p-10 rounded-[10px] min-h-[300px] max-lg:p-5 max-lg:min-h-[250px] max-sm:min-h-fit max-sm:p-5">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[50px] max-lg:text-[40px] max-sm:text-[35px]">
              02
            </h2>
            <h3 className="text-black font-heading font-semibold text-[25px] pb-3 max-lg:text-[20px] ">
              {helpSection.bestMaterialsTitle}
            </h3>
            <p className="text-black font-heading text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
              {helpSection.bestMaterialsText}
            </p>
          </div>
          <div className="bg-[#353444] bg-opacity-10 p-10 rounded-[10px] min-h-[300px] max-lg:p-5 max-lg:min-h-[250px] max-sm:min-h-fit max-sm:p-5">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[50px] max-lg:text-[40px] max-sm:text-[35px]">
              03
            </h2>
            <h3
              data-section="helpSection"
              data-key="brandLabelsTitle"
              className="text-black font-heading font-semibold text-[25px] pb-3 max-lg:text-[20px] "
            >
              {helpSection.brandLabelsTitle}
            </h3>
            <p
              className="text-black font-heading text-[18px] max-lg:text-[16px] max-sm:text-[14px]"
              data-section="helpSection"
              data-key="brandLabelsText"
            >
              {helpSection.brandLabelsText}
            </p>
          </div>
          <div className="bg-[#353444] bg-opacity-10 p-10 rounded-[10px] min-h-[300px] max-lg:p-5 max-lg:min-h-[250px] max-sm:min-h-fit max-sm:p-5">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[50px] max-lg:text-[40px] max-sm:text-[35px]">
              04
            </h2>
            <h3
              data-section="helpSection"
              data-key="lowMOQTitle"
              className="text-black font-heading font-semibold text-[25px] pb-3 max-lg:text-[20px] "
            >
              {helpSection.lowMOQTitle}
            </h3>
            <p
              className="text-black font-heading text-[18px] max-lg:text-[16px] max-sm:text-[14px]"
              data-section="helpSection"
              data-key="lowMOQText"
            >
              {helpSection.lowMOQText2}
            </p>
          </div>
          <div className="bg-[#353444] bg-opacity-10 p-10 rounded-[10px] min-h-[300px] max-lg:p-5 max-lg:min-h-[250px] max-sm:min-h-fit max-sm:p-5">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[50px] max-lg:text-[40px] max-sm:text-[35px]">
              05
            </h2>
            <h3
              data-section="helpSection"
              data-key="fastDeliveryTitle"
              className="text-black font-heading font-semibold text-[25px] pb-3 max-lg:text-[20px] "
            >
              {helpSection.fastDeliveryTitle}
            </h3>
            <p
              className="text-black font-heading text-[18px] max-lg:text-[16px] max-sm:text-[14px]"
              data-section="helpSection"
              data-key="fastDeliveryText"
            >
              {helpSection.fastDeliveryText}
            </p>
          </div>
          <div className="bg-[#353444] bg-opacity-10 p-10 rounded-[10px] min-h-[300px] max-lg:p-5 max-lg:min-h-[250px] max-sm:min-h-fit max-sm:p-5">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[50px] max-lg:text-[40px] max-sm:text-[35px]">
              06
            </h2>
            <h3
              data-section="helpSection"
              data-key="expertManufacturersTitle"
              className="text-black font-heading font-semibold text-[25px] pb-3 flex-nowrap max-lg:text-[20px] "
            >
              {helpSection.expertManufacturersTitle}
            </h3>
            <p
              className="text-black font-heading text-[18px] max-lg:text-[16px] max-sm:text-[14px]"
              data-section="helpSection"
              data-key="expertManufacturersText"
            >
              {helpSection.expertManufacturersText}
            </p>
          </div>
        </div>
      </section>

      {/* <!-- why zod section --> */}
      <section className="w-[70%] mx-auto py-24 max-xl:w-[80%] max-lg:w-[90%] max-sm:py-10">
        <h2 className="text-[60px] text-black leading-tight font-heading pb-5 text-center font-extralight max-xl:text-[40px]  max-sm:text-[35px]">
          <span
            dangerouslySetInnerHTML={{
              __html: whyZodSection.fashionWhyZodHeading,
            }}
          ></span>
        </h2>
        <p className="text-[40px] text-[#DB0718] leading-tight font-heading pb-10 text-center w-[70%] mx-auto max-xl:text-[30px] max-sm:text-[18px] max-sm:w-full">
          <span
            dangerouslySetInnerHTML={{
              __html: whyZodSection.rugsWhyZodSubHeading,
            }}
          ></span>
        </p>
        <div className="grid grid-cols-3 max-[400px]:grid-cols-1">
          <div className="p-10  text-center max-lg:p-5 max-sm:p-2 max-[400px]:w-[200px] max-[400px]:mx-auto">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[70px] max-xl:text-[50px] max-sm:text-[35px] max-[500px]:text-[25px]max-[400px]:text-[30px]">
              70%
            </h2>
            <h3 className="text-black font-heading font-semibold text-[25px] pb-3 flex-nowrap max-xl:text-[20px] max-sm:text-[16px] max-[500px]:text-[13px]  max-[400px]:text-[14px]">
              {whyZodSection.lowerMinimumOrderQuantityTitle}
            </h3>
            <p className="text-black font-heading text-[18px] max-xl:text-[15px] max-sm:text-[13px] max-[500px]:text-[10px] max-[400px]:text-[12px]">
              <span
                dangerouslySetInnerHTML={{
                  __html: whyZodSection.lowerMinimumOrderQuantityText,
                }}
              ></span>
            </p>
          </div>
          <div className="p-10 text-center min-[400px]:border-r-[1px] min-[400px]:border-l-[1px] min-[400px]:border-[#FF0000] max-lg:p-5 max-sm:p-2 max-[400px]:w-[200px] max-[400px]:mx-auto">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[70px] max-xl:text-[50px] max-sm:text-[35px] max-[500px]:text-[25px]max-[400px]:text-[30px]">
              25%
            </h2>
            <h3 className="text-black font-heading font-semibold text-[25px] pb-3 flex-nowrap max-xl:text-[20px] max-sm:text-[16px] max-[500px]:text-[13px]  max-[400px]:text-[14px]">
              {whyZodSection.moreAffordablePricingTitle}
            </h3>
            <p className="text-black font-heading text-[18px] max-xl:text-[15px] max-sm:text-[13px] max-[500px]:text-[10px] max-[400px]:text-[12px]">
              <span
                dangerouslySetInnerHTML={{
                  __html: whyZodSection.moreAffordablePricingText,
                }}
              ></span>
            </p>
          </div>
          <div className="p-10 text-center max-lg:p-5 max-sm:p-2 max-[400px]:w-[200px] max-[400px]:mx-auto">
            <h2 className="text-[#DB0718] font-heading font-semibold text-[70px] max-xl:text-[50px] max-sm:text-[35px] max-[500px]:text-[25px]max-[400px]:text-[30px]">
              50%
            </h2>
            <h3
              data-section="whyZodSection"
              data-key="fasterDeliveryTimeTitle"
              className="text-black font-heading font-semibold text-[25px] pb-3 flex-nowrap max-xl:text-[20px] max-sm:text-[16px] max-[500px]:text-[13px] max-[400px]:text-[14px]"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: whyZodSection.fasterDeliveryTimeTitle,
                }}
              ></span>
            </h3>
            <p
              data-section="whyZodSection"
              data-key="fasterDeliveryTimeText"
              className="text-black font-heading text-[18px] max-xl:text-[15px] max-sm:text-[13px] max-[500px]:text-[10px] max-[400px]:text-[12px]"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: whyZodSection.fasterDeliveryTimeText,
                }}
              ></span>
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <GetInTouch text={button.connectNow} onclick={handleModal} />
        </div>
      </section>

      {/* <!-- brand section --> */}
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
          mainHeading={"<b>Zod Fashion</b>"}
          // secondHeading={superZodHeadingAndText.atEmployeeCost}
        />
      )}
    </main>
  );
}
