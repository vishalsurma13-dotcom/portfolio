import JsonLd from "@/components/JsonLd";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Shayari from "@/components/sections/Shayari";
import Work from "@/components/sections/Work";
import Writing from "@/components/sections/Writing";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Services />
      <Shayari />
      <Work />
      <Clients />
      <Process />
      <Writing />
      <Faq />
      <Contact />
    </>
  );
}
