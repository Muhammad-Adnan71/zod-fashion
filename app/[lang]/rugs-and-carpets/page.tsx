import { Locale } from "../../../i18n.config";
import { getDictionary } from "@utils/dictionary";
import { getLocaleFromServer } from "@utils/funtions";
import { RugsBannerSlides, RugsCategorySlider } from "@utils/constant";
import RugsAndCarpetsPage from "@components/rugsAndCarpetsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Rugs & Carpets Supplier - Premium Floor & Area Rugs",
  description:
    "Buy rugs and carpets at wholesale prices for your business. As a top rugs wholesaler, we offer a vast selection of area rugs, floor rugs, and more. Ideal for retailers looking for bulk deals.",
};

export default async function RugsCarpets({
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
  const slides = await RugsCategorySlider(locale);

  return (
    <RugsAndCarpetsPage
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
        RugsBannerSlides,
      }}
    />
  );
}
