/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@public/logo.png";
import trustPilotStar from "@public/trustpilot-star.svg";
import trustPilot from "@public/trustpilot.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { usePathname, useSearchParams } from "next/navigation";
import { Locale, i18n } from "../i18n.config";

function Header({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState<Locale>();
  useEffect(() => {
    setValue(lang);
  }, []);
  const handleSelectedLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLang = event.target.value as Locale;
    setValue(selectedLang);

    // Split current path into segments and remove language prefix if present
    const segments = pathName.split("/").filter(Boolean);
    const currentLang = segments[0]; // First segment is assumed to be the language

    // Check if the currentLang is one of the locales
    const newSegments = i18n.locales.includes(currentLang as Locale)
      ? segments.slice(1) // Remove current language segment if it's a locale
      : segments; // No language segment, keep entire path

    // Construct the new path
    const newPath =
      selectedLang === i18n.defaultLocale && !i18n.prefixDefault
        ? `/${newSegments.join("/")}` // No prefix for default locale if prefixDefault is false
        : `/${selectedLang}/${newSegments.join("/")}`;

    // Redirect to the new language path
    window.location.href = newPath || "/";
  };
  return (
    <div className="w-[80%] mx-auto max-lg:w-[90%]">
      <div className="flex justify-between py-5 ">
        <a href="/">
          <Image
            src={logo}
            alt=""
            className="w-[100px] h-auto max-sm:w-[90px]"
          />
        </a>
        <div className="flex gap-3 max-md:gap-2 items-center">
          <a
            href="mailto:connect@zod.media"
            className="text-[#DB0718] font-heading text-[14px] font-semibold flex items-center gap-2 max-md:p-2 max-md:rounded-full max-md:w-[35px] max-md:h-[35px] max-md:bg-[#DB0718] max-md:text-white max-md:justify-center"
          >
            {/* <i className="fa fa-envelope" aria-hidden="true"></i> */}
            <FontAwesomeIcon
              className="text-[#DB0718] max-md:text-white text-md"
              icon={faEnvelope}
            />
            <span className="max-md:hidden">connect@zod.media</span>
          </a>
          <a
            href="https://wa.me/+447930888192"
            id="whatsapp"
            className="text-black bg-[#F2F2F2] group md:px-5 md:py-2 font-heading border-[1px] rounded-[25px] text-[14px]  transition-all duration-200 flex justify-center items-center gap-2 max-md:p-2 max-md:rounded-full max-md:w-[35px] max-md:h-[35px] max-lg:text-[12px]"
          >
            {/* <i
              className="fa-brands fa-whatsapp text-[20px] group-hover:text-[#25D366] transition-all duration-150 max-lg:text-[16px]"
              id="whatsapp"
            ></i> */}
            <FontAwesomeIcon
              className="text-black text-lg group-hover:text-[#25D366] transition-all duration-300 ease-in-out"
              icon={faWhatsapp}
            />
            <span className="max-md:hidden" id="whatsapp">
              +44 7930 888192
            </span>
          </a>
          <a
            href="https://www.trustpilot.com/review/zod.fashion"
            target="_blank"
            rel="noopener"
            className="w-[150px] max-lg:w-[120px] max-md:rounded-full max-md:w-[35px] max-md:h-[35px] max-md:flex max-md:justify-center max-md:bg-white max-md:border max-md:border-[#00b67a]"
          >
            <Image src={trustPilotStar} alt="" className="md:hidden w-[18px]" />
            <Image src={trustPilot} alt="" className="w-full max-md:hidden" />
          </a>
          <div className="relative">
            <select
              value={value}
              onChange={handleSelectedLanguage}
              id="language-select"
              className="border text-black outline-none focus:outline-none text-[14px] px-3 py-1 max-sm:hidden border-[#DB0718] rounded-full appearance-none min-w-[100px] font-heading"
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
            </select>
            <select
              value={value}
              onChange={handleSelectedLanguage}
              id="language-select"
              className="border text-black outline-none focus:outline-none text-[14px] px-3 py-1 border-[#DB0718] rounded-full appearance-none min-w-[60px] font-heading sm:hidden"
            >
              <option value="en">En</option>
              <option value="de">De</option>
              <option value="fr">Fr</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#7E7E7E] text-[13px]">
              {/* <i className="fas fa-angle-down text-[#DB0718]"></i> */}
              <FontAwesomeIcon
                className="text-[#DB0718] text-md"
                icon={faChevronDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
