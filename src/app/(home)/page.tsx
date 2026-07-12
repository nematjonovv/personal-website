"use client"
import Header from "@/src/components/Header";
import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import WhoAmI from "./components/WhoAmI";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { RefreshCcw } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [rotate, setRotate] = useState(false)
  const classname = `relative transition duration-10000 ${rotate ? "rotate-1800" : "-rotate-1800"} h-full`

  return (
    <>
      {/* <button
        className="fixed z-50 text-(--accent) cursor-pointer"
        onClick={() => setRotate(!rotate)}
      >
        <RefreshCcw />
      </button> */}

      <div className={classname}>
        <Header />
        <Hero />
        <MarqueeBanner />
        <WhoAmI />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}