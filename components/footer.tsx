/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";
import logo from "@public/logo.png";
import trustPilot from "@public/trustpilot.webp";
import { WEB_ROUTES } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

function Footer({ dictionary }: { dictionary: any }) {
  const { footer } = dictionary;
  return (
    <>
      <section className="w-[80%] mx-auto py-16 max-lg:w-[90%] relative">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-y-5">
          <Image src={logo} alt="" className="w-[120px] max-sm:w-[100px]" />

          <div className="flex gap-x-10 max-md:flex-col items-center max-md:gap-y-3">
            <div>
              <div className="flex gap-x-3 items-center justify-center ">
                <a
                  href="https://www.facebook.com/zod.connect"
                  target="_blank"
                  className="w-[35px] h-[35px] bg-[#4267B2] rounded-full flex justify-center items-center max-sm:w-[25px] max-sm:h-[25px]"
                >
                  <FontAwesomeIcon
                    className="text-white text-lg"
                    icon={faFacebookF}
                  />
                </a>
                <a
                  href="https://instagram.com/zod.connect"
                  target="_blank"
                  className="w-[35px] h-[35px] bg-[linear-gradient(45deg,_#f09433_0%,_#e6683c_25%,_#dc2743_50%,_#cc2366_75%,_#bc1888_100%)] rounded-full flex justify-center items-center max-sm:w-[25px] max-sm:h-[25px]"
                >
                  <FontAwesomeIcon
                    className="text-white text-lg"
                    icon={faInstagram}
                  />
                </a>
                <a
                  href="https://twitter.com/zod_media"
                  target="_blank"
                  className="w-[35px] h-[35px] bg-black rounded-full flex justify-center items-center max-sm:w-[25px] max-sm:h-[25px]"
                >
                  <i className="fa-brands fa-x-twitter text-white text-[17px] max-sm:text-[13px]"></i>
                  <FontAwesomeIcon
                    className="text-white text-lg"
                    icon={faXTwitter}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCjopeehTAeuhhftX8644HPg"
                  target="_blank"
                  className="w-[35px] h-[35px] bg-[#FF0000] rounded-full flex justify-center items-center max-sm:w-[25px] max-sm:h-[25px]"
                >
                  <i className="fa-brands fa-youtube text-white text-[17px] max-sm:text-[13px]"></i>
                  <FontAwesomeIcon
                    className="text-white text-lg"
                    icon={faYoutube}
                  />
                </a>
                <a
                  href=" https://www.linkedin.com/company/zod-media"
                  target="_blank"
                  className="w-[35px] h-[35px] bg-[#0a66c2] rounded-full flex justify-center items-center max-sm:w-[25px] max-sm:h-[25px]"
                >
                  <FontAwesomeIcon
                    className="text-white text-lg"
                    icon={faLinkedinIn}
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@connect.zod"
                  target="_blank"
                  className="w-[35px] h-[35px] bg-black rounded-full flex justify-center items-center max-sm:w-[25px] max-sm:h-[25px]"
                >
                  <FontAwesomeIcon
                    className="text-white text-lg"
                    icon={faTiktok}
                  />
                </a>
              </div>
              <div className="text-right w-full pt-2 max-sm:text-center">
                <a
                  href={WEB_ROUTES.PRIVACY_POLICY}
                  data-section="footer"
                  data-key="link"
                  className="underline text-black text-[14px] text-center hover:text-[#DB0718] transition-all duration-150"
                >
                  {footer.link}
                </a>
              </div>
            </div>
            <a
              href="https://www.trustpilot.com/review/zod.fashion"
              target="_blank"
              rel="noopener"
              className="w-[150px] max-md:w-[120px]"
            >
              <Image src={trustPilot} alt="" className="w-full" />
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <Script
        async
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-RHXJ36L4EB"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer  = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RHXJ36L4EB');
        `}
      </Script> */}
    </>
  );
}

export default Footer;
