import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothAnchors } from "@/components/SmoothAnchors";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Doctor } from "@/components/Doctor";
import { Studio } from "@/components/Studio";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />
      <SmoothAnchors />
      <Navbar />
      <Hero />
      <About />
      <Doctor />
      <Studio />
      <Marquee />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
