/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradient";
import { GlobeDemo } from "./GlobeDemo";

import { useState } from "react";
import { IconPosition, MainButton } from "./MainButton";
import { FiCopy } from "react-icons/fi";
import animationData from "@/data/confetti.json";
import { ColorGridDemo } from "./ColorGridDemo";
/* import Lottie from "lottie-react"; */
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-7 mx-auto px-5 sm:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("email@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,54,120,1) 28%, rgba(110,0,148,1) 100%)",
      }}
    >
      <div
        className={cn(
          `h-full ${id === 1 && "flex flex-col overflow-visible"} ${
            id === 6 && "flex justify-center"
          }`
        )}
      >
        <div className={"w-full h-full absolute"}>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 1 && <GlobeDemo />}
        {id === 3 && <ColorGridDemo />}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 ${
              id === 1 && "flex justify-end lg:pb-7 md:pr-10 min-h-30 md:h-auto"
            }`
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div
            className={cn(
              `font-sans font-bold text-lg lg:text-xl z-10 ${
                id !== 1 && "max-w-96"
              } `
            )}
          >
            {title}
          </div>
          {id === 2 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-6">
                {["ReactJS", "NextJS", "Typescript"].map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  );
                })}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-6">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["React Native", "AWS", "MongoDB"].map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={cn(`absolute md:-bottom-28 -bottom-16 ${copied && "z-20"}`)}>
                <DynamicLottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                />
              </div>

              <MainButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<FiCopy />}
                position={IconPosition.Left}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
