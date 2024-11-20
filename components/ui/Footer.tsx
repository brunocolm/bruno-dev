/* eslint-disable @next/next/no-img-element */
import { socialMedia } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { AnimatedModalDemo } from "./ContactFormModal";
import { IconPosition, MainButton } from "./MainButton";
import { SparklesPreview } from "./SparklesUnderline";

const Footer = () => {
  return (
    <footer className="w-full mb-[10px] pt-9 pb-10" id="contact">
      <div className="flex flex-col items-center justify-center h-[60vh]">
        {/*  <h1 className="heading lg:max-w-[45vw]">
          Make your <span className="text-purple">dreams</span> come true
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          If you want it, you can have it. Reach out today.
        </p> */}
        <SparklesPreview text={"Make your dreams come true"} />
        <div className={"flex w-1/2 justify-center max-w-[250px]"}>
          {/* <MainButton
            title="Lets get in touch"
            icon={<FaLocationArrow />}
            position={IconPosition.Right}
          /> */}
          <AnimatedModalDemo />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between w-full items-center md:items-stretch">
        <p className="md:text-base text-sm md:font-normal font-light self-center mb-5 md:mb-0">
          Copyright © 2024 Bruno Colmenares
        </p>
        <div className="flex items-center gap-3 md:gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounder-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={profile.id.toString()}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
