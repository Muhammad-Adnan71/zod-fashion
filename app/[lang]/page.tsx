import { Locale } from "../../i18n.config";
import { getDictionary } from "../../utils/dictionary";
import { getLocaleFromServer } from "../../utils/funtions";
import HomePage from "../../components/homePage";
import { CategorySlider, BannerSlides } from "../../utils/constant";

export default async function Home({
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
  const slides = await CategorySlider(locale);

  return (
    <HomePage
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
        BannerSlides,
        superZodHeadingAndText,
      }}
    />
  );
}
