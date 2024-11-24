import React from "react";
import { AnimatedModalDemo } from "./ContactFormModal";
import { SparklesPreview } from "./SparklesUnderline";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[60vh] md:h-[80vh] w-full"
      id="contact"
    >
      <SparklesPreview text={"Make your dreams come true"} />
      <div className={"flex w-1/2 justify-center max-w-[250px]"}>
        <AnimatedModalDemo />
      </div>
    </div>
  );
};

export default Contact;
