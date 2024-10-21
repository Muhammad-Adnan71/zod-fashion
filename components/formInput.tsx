import React from "react";
import { useFormContext } from "react-hook-form";

export default function FormInput({
  label,
  placeholder,
  name,
  clasess,
}: {
  label: string;
  placeholder: string;
  name: string;
  clasess?: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={"mb-7 max-sm:mb-5 relative " + clasess}>
      <label className="font-semibold text-black mb-2 block max-sm:text-[14px]">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name)}
        className="bg-[#9F9F9F]  p-4 text-[#7E7E7E] w-full bg-opacity-20 rounded-[25px] focus:outline-none"
      />
      {errors[name] && (
        <span className="w-full text-left text-red-500 mx-auto text-[10px]  block absolute -bottom-[14px]   left-1/2 transform -translate-x-1/2">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}
