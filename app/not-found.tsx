import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { IconPosition, MainButton } from "@/components/ui/MainButton";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  const colors = ["green", "pink", "purple", "blue", "white", "yellow", "red"];
  const uuid = uuidv4();
  const size = 300

  const robohashUrl = `https://robohash.org/${uuid}?size=${size}x${size}`;

  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div>
        <Spotlight
          className="top-10 h-[80vh] w-[50vh]"
          fill={colors[Math.floor(Math.random() * colors.length)]}
          fillOpacity="0.5"
        />
      </div>
      {/* Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_100%)] pointer-events-none" />
      {/* Content */}
      <div className="flex justify-center relative z-10 -top-6">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <Image
            src={robohashUrl}
            alt={`Robohash image`}
            width={size}
            height={size}
            quality={75} 
            priority={false}
          />
          <h1 className="text-[40px] md:text-4xl lg:text-5xl mt-8 font-bold dark:text-white text-black">
            <span className="text-purple">Oops!</span> You’re Lost.
          </h1>
          <p className="text-sm md:text-md lg:text-xl mt-4">
            The page you’re looking for doesn’t exist, or maybe it’s hiding. 🕵️‍♂️
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 mt-3 shadow-md"
          >
            
          <MainButton icon={<FaHome />} title="Go back home" position={IconPosition.Right} />
          </a>
        </div>
      </div>
    </main>
  );
}
