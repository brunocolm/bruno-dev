"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";

interface SparklesPreviewProps {
  text: string;
  className?: string;
  textClassName?: string;
}

export function SparklesPreview({
  text,
  className,
  textClassName,
}: SparklesPreviewProps) {
  return (
    <div
      className={
        className ||
        "w-full flex flex-col items-center justify-center overflow-hidden rounded-md"
      }
    >
      <h1
        className={
          textClassName ||
          "md:text-5xl text-2xl sm:text-3xl lg:text-6xl font-bold text-center text-white relative z-20"
        }
      >
        {text}
      </h1>
      <div className="flex w-1/2 h-40 relative mt-2 justify-center">
        {/* Gradients */}
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full blur-sm" />
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full [mask-image:radial-gradient(350px_150px_at_top,white_0%,transparent_100%)]"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
