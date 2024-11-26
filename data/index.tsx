import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface GridItem {
  id: number;
  title: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}

export const developerEmail = "brunoc.develop@gmail.com"

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    title:
      "I'm available to work across time zones, ensuring seamless communication and support for international clients with flexible hours to meet your needs.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tech innovations",
    description: "Embracing the latest in",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Passionate about development and dedicated to innovative technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/gridBG.svg",
    spareImg: "/img2Skeleton.svg",
  },
  {
    id: 5,
    title: "Currently sharpening my DevOps skills",
    description: "Continuously improving",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/img3Code.svg",
    spareImg: "/gridBG.svg",
  },
  {
    id: 6,
    title: "Let's start a project together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

interface SocialMediaItem {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode; // Corrected type for React components
}

export const socialMedia: SocialMediaItem[] = [
  { id: 1, name: "GitHub", url: "https://github.com/brunocolm", icon: <FaGithub className="w-7 h-7" /> },
  { id: 2, name: "LinkedIn", url: "https://www.linkedin.com/in/bruno-colmenares",icon: <FaLinkedin className="w-7 h-7" /> },
];
