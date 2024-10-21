import PrivacyPolicy from "@components/privacyPolicy";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@utils/dictionary";
import { getLocaleFromServer } from "@utils/funtions";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Latest Trendy Wholesale Abayas Customized For Your Brand | TikTok & Instagram Trendy Wholesale Abayas Made-To-Order | TikTok Trendy Wholesale Abayas Custom Designed For Your Brand | Instagram Trendy Wholesale Abayas Personalized For Your Brand",
  description:
    "Have a trendy design? Want a low MOQ at a reasonable price? Zod can custom design your abaya and deliver to your doorstep at wholesale price.",
};

export default async function Privacy({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const locale = getLocaleFromServer(lang);
  const { privacyPolicy } = await getDictionary(locale);
  return <PrivacyPolicy dictionary={{ privacyPolicy }} />;
}
