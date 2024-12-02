"use client";
import React, { useEffect, useState } from "react";
import { ColorGrid } from "./ColorGrid";
import { isMobile, cn } from "@/utils/helpers";

export function ColorGridDemo() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(isMobile());
  }, []);
  
  return (
    <div className="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute w-full h-full self-center">
        <ColorGrid />
      </div>
      <h1
        className={cn(
          `md:text-4xl text-xl text-white relative pointer-events-none z-20`,
          isMobileView && "bg-black p-2 rounded-md border-white border-[1px]"
        )}
      >
        Dynamic Styles
      </h1>
      <p
        className={cn(
          `text-center mt-2 text-neutral-300 relative z-20`,
          isMobileView && "bg-black p-2 rounded-md border-white border-[1px]"
        )}
      >
        Distinguish your brand from others
      </p>
    </div>
  );
}
