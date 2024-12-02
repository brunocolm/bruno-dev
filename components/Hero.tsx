import React from "react";
import { IconPosition, MainButton } from "./ui/MainButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaCode } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-44">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      {/* Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_100%)] pointer-events-none"/>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Bruno Dev - Next.JS
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Seamless Solutions for Every Need."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Welcome! My name is Bruno and I&apos;m a fullstack developer
          </p>
          <a href="#about" className="md:mt-10">
            <MainButton icon={<FaCode />} title="See More" position={IconPosition.Right} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
