import Link from "next/link";

export default function DashboardBtn({
  text,
  href = "#",
  bgColor = "transparent",
  textColor,
}) {
  // Set default text color based on background color if textColor is not provided
  const computedTextColor = textColor
    ? `text-${textColor}`
    : bgColor === "white"
    ? "text-white"
    : "text-white";

  const borderColor = bgColor === "white" ? "border-white" : "border-white";
  const beforeColor =
    bgColor === "white" ? "before:bg-white" : "before:bg-white";

  return (
    <div>
      <Link href={href}>
        <button
          className={`flex items-center ${computedTextColor} ${borderColor} ${beforeColor} cursor-pointer font-sans text-base font-bold leading-6 outline-none p-2 relative
          before:content-[''] before:inline-block before:h-px before:mr-2 before:transition-all before:duration-500 hover:before:w-12 before:w-0 border-[0px]`}
          style={{ backgroundColor: bgColor }}
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
