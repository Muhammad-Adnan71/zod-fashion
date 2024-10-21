/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function PrivacyPolicy({ dictionary }: { dictionary: any }) {
  const { privacyPolicy } = dictionary;
  return (
    <main>
      <div className="w-[80%] mx-auto ">
        <div className="py-10 max-sm:text-center">
          <h1 className="text-[50px] text-black leading-tight font-heading pb-5 max-sm:text-[35px] font-semibold">
            {privacyPolicy.privacyPolicy}
          </h1>
          <p
            className="text-[20px] text-black leading-tight font-heading max-sm:text-[15px]"
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description1,
            }}
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.InformationCollected}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description2,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.InformationUsage}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description3,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.Cookies}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description4,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.Security}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description5,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2
            data-section="privacyPolicy"
            data-key="ProductInvitationsAndEmail"
            className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]"
          >
            {privacyPolicy.ProductInvitationsAndEmail}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description6,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.WebsiteAndServiceAnnouncement}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description7,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.BankingPolicy}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description8,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.UserRights}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description9,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.ConsentMechanism}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description10,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
        <div className="py-10 max-sm:py-5 max-sm:text-center">
          <h2 className=" text-[40px] text-black leading-tight font-heading pb-5 max-sm:text-[28px]">
            {privacyPolicy.ChangesToPolicy}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: privacyPolicy.description11,
            }}
            className="text-[20px] text-black leading-tight font-heading max-xl:w-full max-sm:text-[15px]"
          />
        </div>
      </div>
    </main>
  );
}
