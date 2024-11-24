/* eslint-disable @next/next/no-img-element */
import { socialMedia } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { AnimatedModalDemo } from "./ContactFormModal";
import { IconPosition, MainButton } from "./MainButton";
import { SparklesPreview } from "./SparklesUnderline";

const Footer = () => {
  return (
    <footer
      className="flex md:mt-16 mb-8 md:flex-row flex-col justify-between w-full items-center md:items-stretch"
      id="contact"
    >
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
    </footer>
  );
};

export default Footer;
