import { Locale } from "../../../i18n.config";
import { getDictionary } from "@utils/dictionary";
import { getLocaleFromServer } from "@utils/funtions";
import ThankYouPage from "@components/thankYouPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thank You - Zod Fashion",
  description:
    "Have a trendy design? Want a low MOQ at a reasonable price? Zod can custom design your abaya and deliver to your doorstep at wholesale price.",
};

export default async function Thankyou({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const locale = getLocaleFromServer(lang);
  const { thankYou } = await getDictionary(locale);
  return <ThankYouPage dictionary={{ thankYou }} />;
}
