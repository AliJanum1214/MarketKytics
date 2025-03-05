import Link from "next/link";
import React from "react";

export default function LearnMoreBtn() {
  return (
    <div>
      <Link href={"#"}>
        <button className="relative inline-block cursor-pointer outline-none border-0 align-middle no-underline bg-transparent p-0 text-inherit font-inherit w-48 h-auto group">
          <span className="relative block m-0 w-12 h-12 bg-[#282936] rounded-[1.625rem] shadow-[0_0_5px_1px_white] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full group-hover:shadow-[0_0_10px_2px_white] group-active:scale-90 group-active:shadow-[0_0_5px_0.5px_white]">
            <span className="absolute top-0 bottom-0 my-auto left-7 w-4.5 h-0.5 bg-transparent transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-[8.7rem] group-hover:bg-white group-active:translate-x-[9.5rem]">
              <span className="absolute content-[''] top-[-0.29rem] right-[0.0625rem] w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45"></span>
            </span>
          </span>
          <span className="absolute inset-0 px-0 py-3 text-[rgba(255,255,255,0.63)] font-bold leading-[1.6] text-center uppercase transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] ml-[1.85rem] group-hover:text-white group-hover:-translate-x-[1.7rem] group-active:text-[rgba(255,255,255,0.459)]">
            Learn More
          </span>
        </button>
      </Link>
    </div>
  );
}
