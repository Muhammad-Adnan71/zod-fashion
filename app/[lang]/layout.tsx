import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getDictionary } from "../../utils/dictionary";
import { Locale } from "../../i18n.config";
import { getLocaleFromServer } from "../../utils/funtions";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@splidejs/react-splide/css";
import { ModalProvider } from "../../context/ModalContext";
import WebLayout from "@components/layout";
import { Suspense } from "react";
import { FacebookPixelEvents } from "@components/pixel-event";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

const popinSans = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["200", "500", "600", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Latest Trendy Wholesale Abayas Customized For Your Brand | TikTok & Instagram Trendy Wholesale Abayas Made-To-Order | TikTok Trendy Wholesale Abayas Custom Designed For Your Brand | Instagram Trendy Wholesale Abayas Personalized For Your Brand",
  description:
    "Have a trendy design? Want a low MOQ at a reasonable price? Zod can custom design your abaya and deliver to your doorstep at wholesale price.",
};

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [
  //       {
  //         params: {
  //           lang: "en",
  //         },
  //       },
  //       {
  //         params: {
  //           lang: "fr",
  //         },
  //       },
  //       {
  //         params: {
  //           lang: "de",
  //         },
  //       },
  //     ],
  //     fallback: false,
  //   };
  // }

  // return {
  //   paths: [
  //     {
  //       params: {
  //         lang: "en",
  //       },
  //     },
  //     {
  //       params: {
  //         lang: "de",
  //       },
  //     },
  //     {
  //       params: {
  //         lang: "fr",
  //       },
  //     },
  //   ],
  //   fallback: false,
  // };
}
export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const locale = getLocaleFromServer(lang);
  const { footer } = await getDictionary(locale);

  //   <!-- Google tag (gtag.js) -->
  // <script async src="https://www.googletagmanager.com/gtag/js?id=G-RHXJ36L4EB"></script>
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'G-RHXJ36L4EB');
  // </script>

  return (
    <html lang="en">
      <body className={`bg-white ${popinSans.variable} antialiased`}>
        <Suspense>
          <WebLayout>
            <ModalProvider>
              <Header lang={locale} />
              {children}
              <Footer dictionary={{ footer }} />
              <ToastContainer />
            </ModalProvider>
            <Suspense fallback={null}>
              <FacebookPixelEvents />
            </Suspense>
          </WebLayout>
        </Suspense>
      </body>
    </html>
  );
}
