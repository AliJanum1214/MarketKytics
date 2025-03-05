// import Link from "next/link";
// import React from "react";

import Link from "next/link";

// export default function Button({
//   text,
//   href = "#",
//   bgColor = "transparent",
//   textColor,
// }) {
//   // Set default text color based on background color if textColor is not provided
//   const computedTextColor = textColor
//     ? `text-${textColor}`
//     : bgColor === "white"
//     ? "text-white"
//     : "text-white";

//   const borderColor = bgColor === "white" ? "border-white" : "border-white";
//   const beforeColor =
//     bgColor === "white" ? "before:bg-white" : "before:bg-white";

//   return (
//     <div>
//       <Link href={href}>
//         <button
//           className={`flex items-center ${computedTextColor} ${borderColor} ${beforeColor} cursor-pointer font-sans text-base font-bold leading-6 outline-none p-2 relative
//           before:content-[''] before:inline-block before:h-px before:mr-2 before:transition-all before:duration-500 hover:before:w-12 before:w-0 border-[0px]`}
//           style={{ backgroundColor: bgColor }}
//         >
//           {text}
//         </button>
//       </Link>
//     </div>
//   );
// }
export default function Button({ text, href = "#" }) {
  return (
    <Link href={href}>
      <button className="inline-block px-6 py-3 border border-white transition-all ease-in duration-200 relative overflow-hidden text-lg cursor-pointer text-white z-10 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:scale-y-100 before:scale-x-125 before:top-full before:w-[140%] before:h-[180%] before:bg-white/5 before:rounded-full before:block before:transition-all before:duration-500 before:delay-100 before:ease-[cubic-bezier(0.55,0,0.1,1)] before:z-[-1] after:content-[''] after:absolute after:left-[55%] after:-translate-x-1/2 after:scale-y-100 after:scale-x-145 after:top-[180%] after:w-[160%] after:h-[190%] after:bg-white after:rounded-full after:block after:transition-all after:duration-500 after:delay-100 after:ease-[cubic-bezier(0.55,0,0.1,1)] after:z-[-1] hover:text-black  hover:before:-top-[35%] hover:before:bg-white hover:before:scale-y-130 hover:before:scale-x-80 hover:after:-top-[45%] hover:after:bg-white hover:after:scale-y-130 hover:after:scale-x-80 hover:border-[1px] hover:border-black">
        {text}
      </button>
    </Link>
  );
}
