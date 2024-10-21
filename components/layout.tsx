"use client";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import IPInfo from "ip-info-react";

// Dynamically import Google Analytics and Google Tag Manager
// const GoogleAnalytics = dynamic(
//   () => import("@next/third-parties/google").then((mod) => mod.GoogleAnalytics),
//   {
//     ssr: false, // Disable server-side rendering for this component
//     loading: () => null, // Optional loading component
//   }
// );

// const GoogleTagManager = dynamic(
//   () =>
//     import("@next/third-parties/google").then((mod) => mod.GoogleTagManager),
//   {
//     ssr: false, // Disable server-side rendering for this component
//     loading: () => null,
//   }
// );

function WebLayout({ children }: { children: any }) {
  // const [loadAnalytics, setLoadAnalytics] = useState(false);
  // const handleLoading = () => {
  //   setLoadAnalytics(true);
  // };
  // useEffect(() => {
  //   const handleLoad = () => handleLoading();
  //   // Check if the document is already fully loaded
  //   if (document.readyState === "complete") {
  //     handleLoading();
  //   } else {
  //     // If not, wait for the load event
  //     window.addEventListener("load", handleLoad);
  //   }
  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  return (
    <div className="h-screen">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY as string}
        scriptProps={{
          async: true, // optional, default to false,
          defer: true, // optional, default to false
          appendTo: "head", // optional, default to "head", can be "head" or "body",
          nonce: undefined,
        }}
      >
        <>
          <GoogleAnalytics gaId="G-RHXJ36L4EB" />
          <GoogleTagManager gtmId="GTM-KR9SVGW2" />

          {/* <Script
            async
            defer
            src="https://www.googletagmanager.com/gtag/js?id=G-RHXJ36L4EB"
          ></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-RHXJ36L4EB');`}
          </Script>

          <Script
            async
            defer
            id="google-tag-manager"
            strategy="afterInteractive"
          >
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KR9SVGW2');
              `}
          </Script>

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KR9SVGW2"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript> */}
        </>

        <IPInfo>{children}</IPInfo>
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default WebLayout;
