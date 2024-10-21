import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneInputComponent({
  label,
  placeholder,
  name,
  classes,
}: {
  label: string;
  placeholder: string;
  name: string;
  classes?: string;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`mb-7 max-sm:mb-5 relative ${classes}`}>
      <label className="font-semibold mb-2 block max-sm:text-[14px]">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            defaultCountry="gb"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-[#9F9F9F] p-3 text-[#7E7E7E] w-full bg-opacity-20 rounded-[25px] focus:outline-none"
            inputClassName="w-full"
            inputStyle={{
              background: "#ececec",
              border: "none",
              color: "#7E7E7E",
              fontSize: "16px",
            }}
            countrySelectorStyleProps={{
              buttonStyle: {
                background: "transparent",
                border: "none",
              },
              dropdownStyleProps: {
                style: {
                  zIndex: 10,
                },
              },
            }}
          />
        )}
      />
      {errors[name] && (
        <span className="w-full text-left text-red-500 mx-auto text-[10px] block absolute -bottom-[14px] left-1/2 transform -translate-x-1/2">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}
