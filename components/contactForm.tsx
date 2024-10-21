/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useContext, useState } from "react";
import trustpilot from "@public/trustpilot.webp";
import FormInput from "./formInput";
import Multiselect from "./multiselect";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { contactPostService } from "../services/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FashionContactInput,
  FashionContactUsSchema,
  ContactInput,
  ContactUsSchema,
} from "../utils/form.schema";
import { Bounce, toast } from "react-toastify";
import PhoneInputComponent from "./phoneInput";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { IPInfoContext } from "ip-info-react";

export default function ContactForm({
  formContent,
  sourceName,
}: {
  formContent: any;
  sourceName: string;
}) {
  const userInfo = useContext(IPInfoContext);
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  type FormInputType = typeof sourceName extends "fashion"
    ? FashionContactInput
    : ContactInput;

  const useSchema =
    sourceName === "fashion" ? FashionContactUsSchema : ContactUsSchema;

  // Use the correct type in the useForm hook
  const methods = useForm<FormInputType>({
    resolver: zodResolver(useSchema),
    mode: "onBlur",
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<ContactInput> = async (values: any) => {
    console.log(values);
    setIsLoading(true);
    let paramData = {};

    if (values.category) {
      const categoryData = values.category.map((item: any) => item.value);
      paramData = {
        db: "Zod",
        login: "obaid@zod.media",
        password: "Ideabox@123",
        name: values.name,
        email: values.email,
        phone: values.phone,
        category: categoryData.toString(),
        country: userInfo.country_name ? userInfo.country_name : "",
        business_type: "",
        business_name: "",
        city: userInfo.city ? userInfo.city : "",
        source_name: sourceName,
      };
    } else {
      paramData = {
        db: "Zod",
        login: "obaid@zod.media",
        password: "Ideabox@123",
        name: values.name,
        email: values.email,
        phone: values.phone,
        country: userInfo.country_name ? userInfo.country_name : "",
        business_type: "",
        business_name: "",
        city: userInfo.city ? userInfo.city : "",
        source_name: sourceName,
      };
    }
    const data = {
      jsonrpc: "2.0",
      method: "call",
      params: paramData,
      id: 1,
    };

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      setIsLoading(false);
      return;
    }

    executeRecaptcha("enquiryFormSubmit").then(
      async (gReCaptchaToken: string) => {
        const response = await contactPostService({
          ...data,
          gReCaptchaToken,
        });
        if (response.status === "success") {
          console.log("submit done");
          toast.success("Form Submitted Successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          window.location.href = `/thank-you`;
          setIsLoading(false);
          reset();
        } else {
          setIsLoading(false);
        }
      }
    );
  };
  return (
    <div className="w-[80%] mx-auto bg-white z-[10] relative ">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="name"
            label={formContent.name}
            placeholder={formContent.enterName}
          />
          <FormInput
            name="email"
            label={formContent.email}
            placeholder={formContent.enterEmail}
          />
          <PhoneInputComponent
            name="phone"
            label={formContent.phone}
            placeholder={formContent.enterPhone}
          />
          {sourceName === "fashion" && (
            <Multiselect
              label={formContent.category}
              optionLabels={formContent.sliderSection}
              name="category"
            />
          )}

          {/* <input type="hidden" name="ip_address" id="ipAddress" value="" /> */}

          <div className="text-center mt-14 max-sm:mt-10">
            <button
              type="submit"
              disabled={isLoading}
              className=" group relative inline-flex items-center justify-start overflow-hidden rounded-[25px] border-2 border-[#DB0718] bg-[#DB0718] px-14 py-3 font-semibold transition-all hover:bg-white font-heading"
            >
              <span className="relative z-10 flex">
                {isLoading ? (
                  <span className="flex justify-between items-center">
                    <svg
                      className="text-gray-300 animate-spin mr-3 absolute -left-8 bottom-[1px]"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#1D1D1D]"
                      ></path>
                    </svg>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#DB0718] text-[16px]">
                      {formContent.submit}
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="absolute inset-0 rounded-[25px] border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#DB0718] text-[16px]">
                      {formContent.submit}
                    </span>
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </FormProvider>
      <a
        href="https://www.trustpilot.com/review/zod.fashion"
        target="_blank"
        rel="noopener"
        className="absolute bottom-[-120px] left-[50%] translate-x-[-50%] w-[180px] max-sm:w-[120px] max-sm:bottom-[-100px]"
      >
        <Image src={trustpilot} alt="" className="w-full" />
      </a>
    </div>
  );
}
