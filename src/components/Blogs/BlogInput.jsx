import React from "react";
import Button from "../ui/Button";

export default function BlogInput() {
  return (
    <div className="border border-black flex items-center mt-10 w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 flex-1 border-none outline-none text-black text-sm w-full"
      />
      <Button
        text="Search"
        bgColor="black"
        textColor="white"
        className="px-4 py-2 text-sm"
      />
    </div>
  );
}
