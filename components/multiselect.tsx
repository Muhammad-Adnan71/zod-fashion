/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";

export default function Multiselect({
  label,
  optionLabels,
  name,
}: {
  label: string;
  optionLabels: any;
  name: string;
}) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [selected, setSelected] = useState([]);

  const options = [
    { label: optionLabels.modestWear, value: "modest wear" },
    { label: optionLabels.dresses, value: "Dresses" },
    { label: optionLabels.abaya, value: "Abayas" },
    { label: "Hijab", value: "Hijab" },
    { label: optionLabels.thobeJubba, value: "Thobes/Jubbas" },
    { label: optionLabels.shirt, value: "Shirts" },
    { label: optionLabels.pants, value: "Pants" },
    { label: optionLabels.tops, value: "Tops" },
    { label: optionLabels.denimJeans, value: "Denim Jeans" },
    { label: optionLabels.denimJacket, value: "Denim Jackets" },
    { label: optionLabels.leatherJacket, value: "Leather Jackets" },
    { label: optionLabels.leatherBag, value: "Leather Bags" },
    { label: optionLabels.fragrance, value: "Fragrances" },
    { label: optionLabels.socks, value: "Socks" },
    { label: optionLabels.other, value: "Other" },
  ];

  // Sync the selected state with the form state
  useEffect(() => {
    setValue(name, selected);
  }, [selected, setValue, name]);

  return (
    <div className="mb-7 max-sm:mb-5">
      <label
        className="font-semibold mb-2 block max-sm:text-[14px]"
        data-section="formSection"
        data-key="category"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <MultiSelect
            options={options}
            hasSelectAll={false}
            disableSearch={true}
            value={selected}
            onChange={(selectedOptions: any) => {
              setSelected(selectedOptions);
              onChange(selectedOptions);
            }}
            labelledBy="Select Category"
            className="[&>.dropdown-container]:!bg-[#9F9F9F] [&>.dropdown-container]:py-2 [&>.dropdown-container]:text-[#7E7E7E] [&>.dropdown-container]:w-full [&>.dropdown-container]:!bg-opacity-20 [&>.dropdown-container]:!rounded-[25px] [&>.dropdown-container]:focus:outline-none"
          />
        )}
      />
      {errors[name] && (
        <span className="w-full text-left text-red-500 mx-auto text-[10px] block absolute left-1/2 transform -translate-x-1/2">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}
