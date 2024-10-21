import { Locale } from "../../../i18n.config";
import { getDictionary } from "@utils/dictionary";
import { getLocaleFromServer } from "@utils/funtions";
import { ModestBannerSlides, modestWearCategorySlider } from "@utils/constant";
import ModestWear from "@components/modestWear";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Modest Fashion Suppliers | Request a Wholesale Quote",
  description:
    "Looking for bulk abayas, hijabs, or thobes? Connect with our team for wholesale Islamic clothing. Get tailored quotes & expert support now!",
};

export default async function Modest({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
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
  } = await getDictionary(locale);
  const slides = await modestWearCategorySlider(locale);

  return (
    <ModestWear
      slides={slides}
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
        ModestBannerSlides,
      }}
    />
  );
}
