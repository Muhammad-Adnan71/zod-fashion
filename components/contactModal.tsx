/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useContext, useState } from "react";
import trustpilot from "@public/trustpilot.webp";
import ModalContext from "../context/ModalContext";
import { contactPostService } from "@services/contact";
import { ContactInput, ContactUsSchema } from "@utils/form.schema";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./formInput";
import { Bounce, toast } from "react-toastify";
import PhoneInputComponent from "./phoneInput";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { IPInfoContext } from "ip-info-react";

export default function ContactModal({
  formContent,
  sourceName,
  mainHeading,
  secondHeading,
  isModal = true,
}: {
  isModal?: boolean;
  mainHeading: string;
  secondHeading?: string;
  formContent: any;
  sourceName: string;
}) {
  const userInfo = useContext(IPInfoContext);
  const { handleModal } = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const methods = useForm<ContactInput>({
    resolver: zodResolver(ContactUsSchema),
    mode: "onBlur",
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<ContactInput> = async (values: any) => {
    setIsLoading(true);
    const data = {
      jsonrpc: "2.0",
      method: "call",
      params: {
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
      },
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
    <div
      onClick={handleModal}
      className=" fixed inset-0 z-[99999] flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-90"
    >
      <div
        onClick={(e: any) => e.stopPropagation()}
        className="relative p-4 w-full max-w-xl max-h-full"
      >
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-white">
          {/* <!-- Modal header --> */}
          <div className="rounded-t relative">
            <div className="absolute top-2 right-3">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#DB0718] rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-center"
                onClick={handleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="text-center pt-10">
              <h2
                className=" text-black max-w-[400px] mx-auto leading-tight font-heading text-[25px] font-normal"
                data-section="formSection"
                data-key="superZodFormHeading"
              >
                <span dangerouslySetInnerHTML={{ __html: mainHeading }}></span>
              </h2>
              {secondHeading ? (
                <h3
                  data-section="superZodHeadingAndText"
                  data-key="atEmployeeCostModal"
                  className={`${
                    isModal ? "[&_sup]:!text-[20px]" : ""
                  } text-black  leading-tight font-heading font-semibold pt-5 text-[20px] max-sm:text-[16px]`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: secondHeading ? secondHeading : "",
                    }}
                  ></span>
                </h3>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* <!-- Modal body --> */}
          <div className="px-4 md:px-5 space-y-4">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  name="name"
                  label={formContent.name}
                  placeholder={formContent.enterName}
                  clasess="mb-3"
                />
                <FormInput
                  name="email"
                  label={formContent.email}
                  placeholder={formContent.enterEmail}
                  clasess="mb-3"
                />
                <PhoneInputComponent
                  name="phone"
                  label={formContent.phone}
                  placeholder={formContent.enterPhone}
                  classes="mb-3"
                />
                <div className="text-center mt-10 max-sm:mt-10">
                  <button
                    type="submit"
                    id="submitButton"
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
                          <span
                            data-section="button"
                            data-key="submit"
                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#DB0718] text-[16px]"
                          >
                            {formContent.submit}
                          </span>
                        </span>
                      ) : (
                        <>
                          <span className="absolute inset-0 rounded-[25px] border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                          <span
                            data-section="button"
                            data-key="submit"
                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#DB0718] text-[16px]"
                          >
                            {formContent.submit}
                          </span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </FormProvider>

            <div className="w-[150px] mx-auto py-5 max-xl:py-5">
              <a
                href="https://www.trustpilot.com/review/zod.fashion"
                target="_blank"
                rel="noopener"
                className="w-[50px] max-md:w-[120px]"
              >
                <Image src={trustpilot} alt="" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
