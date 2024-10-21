/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SuperZodPage from "./components/superZodPage";
import { Locale } from "../../../i18n.config";
import { getLocaleFromServer } from "@utils/funtions";
import { getDictionary } from "@utils/dictionary";
import { SuperZodCategorySlider, SuperZodSlider } from "@utils/constant";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "superZod - 24/7 Dedicated Employee at 1/10th Employee Cost",
  description:
    "Running Fashion Business Alone? superZod handles everything from design to logistics. Join 200+ fashion brands like yours and hire your superEmployee today!",
};

async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const locale = getLocaleFromServer(lang);
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
    superZodHeadingAndText,
  } = await getDictionary(locale);
  const superZodBannerSlide = await SuperZodSlider(locale);
  const slides = await SuperZodCategorySlider(locale);

  return (
    <div>
      <SuperZodPage
        dictionary={{
          mainBanner,
          button,
          formSection,
          placeholder,
          sliderSection,
          aboutSection,
          helpSection,
          whyZodSection,
          brandSection,
          superZodBannerSlide,
          superZodHeadingAndText,
        }}
        slides={slides}
      />
    </div>
  );
}

export default Page;
