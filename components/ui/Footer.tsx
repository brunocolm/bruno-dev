import React from "react";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="flex md:mt-16 mb-8 md:flex-row flex-col justify-between w-full items-center md:items-stretch"
      id="contact"
    >
      <p className="md:text-base text-sm md:font-normal font-light self-center mb-5 md:mb-0">
        Copyright © 2024 Bruno Colmenares
      </p>
      <div className="flex items-center gap-3 md:gap-4">
        {socialMedia.map((profile) => (
          <div
            key={profile.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounder-lg border border-black-300"
          >
            {profile.icon}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
