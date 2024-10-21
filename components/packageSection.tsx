/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";
import pattern4 from "@public/pattern4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "./button";

function PackageSection({
  superZodHeadingAndText,
  button,
  handleModalClick,
}: {
  handleModalClick: any;
  superZodHeadingAndText: any;
  button: any;
}) {
  const [activePackage, setActivePackage] = useState(1);

  const handlePackageChange = (value: number) => {
    setActivePackage(value);
  };
  return (
    <section className="max-w-[1400px] w-[90%] mx-auto relative ">
      <Image
         
        src={pattern4}
        alt=""
        className="w-[20%] absolute top-[50px] left-[-40px] z-[-1] max-lg:hidden rotate-[90deg]"
      />
      <Image
         
        src={pattern4}
        alt=""
        className="w-[50%] absolute top-[-330px] right-[-230px] z-[1] max-lg:hidden rotate-[180deg]"
      />
      <h2
        data-section="superZodHeadingAndText"
        data-key="hireSuperZodNow"
        className="relative z-[2] text-[50px] text-black leading-tight font-heading max-xl:text-[35px] max-sm:text-[28px] font-semibold text-center pb-10"
      >
        <span
          dangerouslySetInnerHTML={{
            __html: superZodHeadingAndText.hireSuperZodNow,
          }}
        ></span>
      </h2>
      <div className=" bg-[#F0F0F0] rounded-[20px] py-16 px-10 max-lg:px-5 max-lg:py-10 max-sm:px-2">
        <table className=" w-full bg-white shadow-lg rounded-[15px] max-md:hidden font-heading">
          <thead className="bg-black text-white text-center text-[22px] font-semibold">
            <tr>
              <th
                className="p-4 w-[35%] rounded-tl-[15px] border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="superZodTasks"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: superZodHeadingAndText.superZodTasks,
                  }}
                ></span>
              </th>
              <th className="p-4 leading-6 border-r-[#F6F6F6] border">
                <span
                  className="min-h-[80px] block"
                  data-section="superZodHeadingAndText"
                  data-key="designAndQuality"
                >
                  {superZodHeadingAndText.designAndQuality}
                </span>
                <span
                  data-modal-target="open-modal"
                  data-modal-toggle="open-modal"
                  className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[14px] rounded-[50px] px-4 py-1 flex w-fit justify-center items-center mx-auto cursor-pointer"
                >
                  ($299/month)
                </span>
              </th>
              <th className="p-4 leading-6 border-r-[#F6F6F6] border">
                <span
                  className="min-h-[80px] block"
                  data-section="superZodHeadingAndText"
                  data-key="designAndOperations"
                >
                  {superZodHeadingAndText.designAndOperations}
                </span>
                <span
                  data-modal-target="open-modal"
                  data-modal-toggle="open-modal"
                  className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[14px] rounded-[50px] px-4 py-1 flex w-fit justify-center items-center mx-auto cursor-pointer"
                >
                  ($499/month)
                </span>
              </th>
              <th className="p-4 leading-6 rounded-tr-[15px]">
                <span
                  className="min-h-[80px] block"
                  data-section="superZodHeadingAndText"
                  data-key="growthAndOperations"
                >
                  {superZodHeadingAndText.growthAndOperations}
                </span>
                <span
                  data-modal-target="open-modal"
                  data-modal-toggle="open-modal"
                  className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[14px] rounded-[50px] px-4 py-1 flex w-fit justify-center items-center mx-auto cursor-pointer"
                >
                  ($899/month)
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-center text-black font-medium text-[18px]">
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="findsTheBestDesigns"
              >
                {superZodHeadingAndText.findsTheBestDesigns}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="customizesDesigns"
              >
                {superZodHeadingAndText.customizesDesigns}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="connectsExpert"
              >
                {superZodHeadingAndText.connectsExpert}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="controlsQuality"
              >
                {superZodHeadingAndText.controlsQuality}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="handlesShipments"
              >
                {superZodHeadingAndText.handlesShipments}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="managesOnlineStore"
              >
                {superZodHeadingAndText.managesOnlineStore}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="handlesCustomerQueries"
              >
                {superZodHeadingAndText.handlesCustomerQueries}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="generatesNewLeads"
              >
                {superZodHeadingAndText.generatesNewLeads}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="providesExpertAdvice"
              >
                {superZodHeadingAndText.providesExpertAdvice}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
            <tr className="border-t">
              <td
                className="p-4 border-r-[#F6F6F6] border"
                data-section="superZodHeadingAndText"
                data-key="AvailableOnCall"
              >
                {superZodHeadingAndText.AvailableOnCall}
              </td>
              <td className="p-4 border-r-[#F6F6F6] border">–</td>
              <td className="p-4 border-r-[#F6F6F6] border">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
              <td className="p-4">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px]"
                  icon={faCheck}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-1 font-heading mb-5">
            <div
              onClick={() => handlePackageChange(1)}
              id="packageBtn1"
              className={`${
                activePackage === 1
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } cursor-pointer rounded-[20px] transition-all duration-300 ease-in-out p-2 text-[18px] font-semibold text-center max-sm:text-[15px] max-[400px]:text-[13px] flex flex-col justify-between leading-[1]`}
            >
              <span
                data-section="superZodHeadingAndText"
                data-key="designAndQuality"
                className="mb-2"
              >
                {superZodHeadingAndText.designAndQuality}
              </span>
              <span className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[13px] rounded-[50px] px-4 py-1 flex w-fit justify-center items-center mx-auto max-[400px]:text-[11px] max-[400px]:px-2 cursor-pointer">
                ($299/m)
              </span>
            </div>
            <div
              onClick={() => handlePackageChange(2)}
              id="packageBtn2"
              className={`${
                activePackage === 2
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } cursor-pointer rounded-[20px] transition-all duration-300 ease-in-out p-2 text-[18px] font-semibold text-center max-sm:text-[15px] max-[400px]:text-[13px] flex flex-col justify-between leading-[1.1]`}
            >
              <span
                data-section="superZodHeadingAndText"
                data-key="designAndOperations"
                className="mb-2"
              >
                {superZodHeadingAndText.designAndOperations}
              </span>
              <span className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[13px] rounded-[50px] px-4 py-1 flex w-fit justify-center items-center mx-auto max-[400px]:text-[11px] max-[400px]:px-2">
                ($499/m)
              </span>
            </div>
            <div
              onClick={() => handlePackageChange(3)}
              id="packageBtn3"
              className={`${
                activePackage === 3
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } cursor-pointer rounded-[20px] transition-all duration-300 ease-in-out p-2 text-[18px] font-semibold text-center max-sm:text-[15px] max-[400px]:text-[13px] flex flex-col justify-between leading-[1]`}
            >
              <span
                data-section="superZodHeadingAndText"
                data-key="growthAndOperations"
                className="mb-2"
              >
                {superZodHeadingAndText.growthAndOperations}
              </span>
              <span className="bg-[linear-gradient(90deg,_rgba(219,6,23,1)_0%,_rgba(101,0,255,1)_100%)] text-white text-[13px] rounded-[50px] px-4 py-1 flex w-fit justify-center items-center mx-auto max-[400px]:text-[11px] max-[400px]:px-2">
                ($899/m)
              </span>
            </div>
          </div>
          <div
            className={`${activePackage === 1 ? "block" : "hidden"}`}
            id="package1"
          >
            <div
              data-section="superZodHeadingAndText"
              data-key="superZodTasks"
              className="bg-black text-white font-bold text-[25px] text-center rounded-tl-[20px] rounded-tr-[20px] py-5"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: superZodHeadingAndText.superZodTasks,
                }}
              ></span>
              <p className="text-[#db0617] font-heading text-[16px] font-normal">
                ($299/month)
              </p>
            </div>
            <div className="grid grid-cols-3 bg-white text-center">
              <div
                data-section="superZodHeadingAndText"
                data-key="findsTheBestDesigns"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.findsTheBestDesigns}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="customizesDesigns"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.customizesDesigns}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="connectsExpert"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.connectsExpert}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="controlsQuality"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.controlsQuality}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="handlesShipments"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.handlesShipments}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="managesOnlineStore"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.managesOnlineStore}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="handlesCustomerQueries"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.handlesCustomerQueries}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="generatesNewLeads"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.generatesNewLeads}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="providesExpertAdvice"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.providesExpertAdvice}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="AvailableOnCall"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.AvailableOnCall}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
            </div>
          </div>
          <div
            className={` ${activePackage === 2 ? "block" : "hidden"}`}
            id="package2"
          >
            <div
              data-section="superZodHeadingAndText"
              data-key="superZodTasks"
              className="bg-black text-white font-bold text-[25px] text-center rounded-tl-[20px] rounded-tr-[20px] py-5"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: superZodHeadingAndText.superZodTasks,
                }}
              ></span>
              <p className="text-[#db0617] font-heading text-[16px] font-normal">
                ($499/month)
              </p>
            </div>
            <div className="grid grid-cols-3 bg-white text-center">
              <div
                data-section="superZodHeadingAndText"
                data-key="findsTheBestDesigns"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.findsTheBestDesigns}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="customizesDesigns"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.customizesDesigns}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="connectsExpert"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.connectsExpert}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="controlsQuality"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.controlsQuality}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="handlesShipments"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.handlesShipments}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[20px] flex justify-center items-centre text-[#707070]"
                  icon={faMinus}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="managesOnlineStore"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.managesOnlineStore}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="handlesCustomerQueries"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.handlesCustomerQueries}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="generatesNewLeads"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.generatesNewLeads}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                {" "}
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="providesExpertAdvice"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.providesExpertAdvice}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="AvailableOnCall"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.AvailableOnCall}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
            </div>
          </div>
          <div
            className={`${activePackage === 3 ? "block" : "hidden"}`}
            id="package3"
          >
            <div className="bg-black text-white font-bold text-[25px] text-center rounded-tl-[20px] rounded-tr-[20px] py-5">
              <span
                data-section="superZodHeadingAndText"
                data-key="superZodTasks"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: superZodHeadingAndText.superZodTasks,
                  }}
                ></span>
              </span>
              <p className="text-[#db0617] font-heading text-[16px] font-normal">
                ($899/month)
              </p>
            </div>
            <div className="grid grid-cols-3 bg-white text-center">
              <div
                data-section="superZodHeadingAndText"
                data-key="findsTheBestDesigns"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.findsTheBestDesigns}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="customizesDesigns"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.customizesDesigns}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="connectsExpert"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.connectsExpert}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="controlsQuality"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.controlsQuality}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="handlesShipments"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.handlesShipments}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="managesOnlineStore"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.managesOnlineStore}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="handlesCustomerQueries"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.handlesCustomerQueries}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="generatesNewLeads"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.generatesNewLeads}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="providesExpertAdvice"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.providesExpertAdvice}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
              <div
                data-section="superZodHeadingAndText"
                data-key="AvailableOnCall"
                className="col-span-2 text-black font-heading border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 text-[16px] font-medium px-2 max-[400px]:text-[13px]"
              >
                {superZodHeadingAndText.AvailableOnCall}
              </div>
              <div className="col-start-3 border-[#F6F6F6] border-b-[2px] border-r-[2px] py-3 ">
                <FontAwesomeIcon
                  className="text-[#4BB85E] text-[25px] flex justify-center items-centre"
                  icon={faCheck}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center w-[80%] mx-auto mt-10 max-md:w-full">
          <h2
            data-section="superZodHeadingAndText"
            data-key="customizeSuperZodPlan"
            className="text-[50px] text-black leading-tight font-heading max-xl:text-[35px] max-sm:text-[28px] font-semibold"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: superZodHeadingAndText.customizeSuperZodPlan,
              }}
            ></span>
          </h2>
          <p
            data-section="superZodHeadingAndText"
            data-key="needAMixOfServices"
            className="font-heading text-black text-[22px] max-w-[700px] mx-auto py-10 font-normal max-md:text-[18px] max-lg:w-full max-sm:text-[16px]"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: superZodHeadingAndText.needAMixOfServices,
              }}
            ></span>
          </p>
          <GetInTouch text={button.getCustomPlan} onclick={handleModalClick} />
        </div>
      </div>
    </section>
  );
}

export default PackageSection;
