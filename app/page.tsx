import Hero from "@/components/sections/hero";
import Product from "@/components/sections/product";
import Features from "@/components/sections/features";
import ABCDEP from "@/components/sections/abcdep";
import Roadmap from "@/components/sections/roadmap";
import Mission from "@/components/sections/mission";
import Team from "@/components/sections/team";
import FinalCTA from "@/components/sections/final-cta";
import ScrollToTop from "@/components/custom/scroll-to-top";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <Features />
      <ABCDEP />
      <Roadmap />
      <Mission />
      <Team />
      <FinalCTA />
      <ScrollToTop />
    </>
  );
}
