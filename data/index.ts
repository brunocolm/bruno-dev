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
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/img1Laptop.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I offer flexibility with time zone differences, prioritizing timely communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My technical skill set",
    description: "I'm committed to continuous self-improvement",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about development and dedicated to innovative technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/gridBG.svg",
    spareImg: "/img2Skeleton.svg",
  },
  {
    id: 5,
    title: "Currently improving my DevOps skills",
    description: "More specifically with AWS",
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





/* export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "",
    },
]; */

/*  export const testimonials = [
   {
     quote:
       "Collaborating with Bruno was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Bruno's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Bruno is the ideal partner.",
     name: "Michael Johnson",
     title: "Director of AlphaStream Technologies",
   },
   {
     quote:
       "Collaborating with Bruno was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Bruno's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Bruno is the ideal partner.",
     name: "Michael Johnson",
     title: "Director of AlphaStream Technologies",
   },
   {
     quote:
       "Collaborating with Bruno was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Bruno's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Bruno is the ideal partner.",
     name: "Michael Johnson",
     title: "Director of AlphaStream Technologies",
   },
   {
     quote:
       "Collaborating with Bruno was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Bruno's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Bruno is the ideal partner.",
     name: "Michael Johnson",
     title: "Director of AlphaStream Technologies",
   },
   {
     quote:
       "Collaborating with Bruno was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Bruno's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Bruno is the ideal partner.",
     name: "Michael Johnson",
     title: "Director of AlphaStream Technologies",
   },
 ];
  */
/* export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
]; */

/* export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
]; */

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];