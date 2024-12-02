import { cn } from "@/utils/cn";
import React from "react";
import { AnimatedModalDemo } from "./ui/ContactFormModal";
import { SparklesPreview } from "./ui/SparklesUnderline";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[60vh] md:h-[80vh] w-full"
      id="contact"
    >
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] absolute opacity-40 z-0" />
      <SparklesPreview text={"Make your dreams come true"} />
      <div className={"flex w-1/2 justify-center max-w-[250px]"}>
        <AnimatedModalDemo />
      </div>
    </div>
  );
};

export default Contact;
