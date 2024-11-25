import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { NavBar } from "@/components/NavBar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <FaHome />,
    }
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full ">
        <h1>Bruno Development</h1>
        <NavBar navItems={navItems} />
        <Hero />
        <Grid />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
