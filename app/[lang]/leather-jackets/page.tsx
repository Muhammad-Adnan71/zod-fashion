import { Locale } from "../../../i18n.config";
import { getDictionary } from "@utils/dictionary";
import { getLocaleFromServer } from "@utils/funtions";
import { LeatherCategorySlider, LeatherBannerSlide } from "@utils/constant";
import LeatherPage from "@components/leatherPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genuine Wholesale Leather Jackets at Cheap Prices & Low MOQ",
  description:
    "We offer the widest range of premium, genuine and high quality leather jackets and coats at wholesale prices and low MOQ with unique customization.",
};

export default async function Leather({
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
    superZodHeadingAndText,
  } = await getDictionary(locale);
  const slides = await LeatherCategorySlider(locale);

  return (
    <LeatherPage
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
        LeatherBannerSlide,
        superZodHeadingAndText,
      }}
    />
  );
}
