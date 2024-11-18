"use client";
import React from "react";
import { ColorGrid } from "./ColorGrid";
import { cn } from "@/utils/cn";

export function ColorGridDemo() {
  return (
    <div className="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute w-full h-full self-center">
        <ColorGrid />
      </div>
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Dynamic Styles
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Distinguish your brand from others
      </p>
    </div>
  );
}
