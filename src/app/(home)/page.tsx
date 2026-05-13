import Header from "@/src/components/Header";
import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import WhoAmI from "./components/WhoAmI";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <MarqueeBanner />
      <WhoAmI />
      <TechStack />
    </div>
  );
}
