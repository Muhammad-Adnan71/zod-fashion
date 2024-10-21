import React from "react";

function GetInTouch({ text, onclick }: { text: string; onclick?: () => void }) {
  return (
    <button
      onClick={onclick}
      className="scrollToForm mt-20 group relative inline-flex items-center justify-start overflow-hidden rounded-[25px] border-2 border-[#DB0718] bg-[#DB0718] px-7 py-3 font-semibold transition-all hover:bg-white max-md:hidden font-heading"
    >
      <span className="absolute inset-0 rounded-[25px] border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#DB0718]">
        {text}
      </span>
    </button>
  );
}

export default GetInTouch;
