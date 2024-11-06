interface GridItem {
  id: number;
  title: string;
  description?: string
  header?: React.ReactNode
  icon?: React.ReactNode
  className?: string
  imgClassName?: string
  titleClassName?: string
  img?: string;
  spareImg?: string;
}

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: any[] = [
  {
    id: 1,
    title: "I focus on building strong client relationships through transparent and open communication",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/img1Laptop.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I offer flexibility with time zone differences, prioritizing seamless and timely communication",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My technical skill set",
    description: "I'm committed to continuous self-improvement",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about development and dedicated to innovative technologies",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/gridBG.svg",
    spareImg: "/img2Skeleton.svg",
  },
  {
    id: 5,
    title: "Currently improving my DevOps skills",
    description: "More specifically with AWS",
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/img3Code.svg",
    spareImg: "/gridBG.svg",
  },
  {
    id: 6,
    title: "Let's start a project together!",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];