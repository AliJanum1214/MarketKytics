import Link from "next/link";

export default function ContactBtn({ text, href = "#" }) {
  return (
    <Link href={href}>
      <button className="inline-block w-24 py-1  transition-all ease-in duration-200 relative overflow-hidden text-lg cursor-pointer text-white z-10 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:scale-y-100 before:scale-x-125 before:top-full before:w-[140%] before:h-[180%] before:bg-cyan-500/5 before:rounded-full before:block before:transition-all before:duration-500 before:delay-100 before:ease-[cubic-bezier(0.55,0,0.1,1)] before:z-[-1] after:content-[''] after:absolute after:left-[55%] after:-translate-x-1/2 after:scale-y-100 after:scale-x-145 after:top-[180%] after:w-[160%] after:h-[190%] after:bg-cyan-500 after:rounded-full after:block after:transition-all after:duration-500 after:delay-100 after:ease-[cubic-bezier(0.55,0,0.1,1)] after:z-[-1] hover:text-white  hover:before:-top-[35%] hover:before:bg-cyan-500 hover:before:scale-y-130 hover:before:scale-x-80 hover:after:-top-[45%] hover:after:bg-cyan-500 hover:after:scale-y-130 hover:after:scale-x-80">
        {text}
      </button>
    </Link>
  );
}
