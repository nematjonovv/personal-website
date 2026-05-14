import Header from "@/src/components/Header";
import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import WhoAmI from "./components/WhoAmI";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <MarqueeBanner />
      <WhoAmI />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
