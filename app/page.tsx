import { About } from "./components/homepage/About";
import { Courses } from "./components/homepage/Courses";
import { CTA } from "./components/homepage/CTA";
import { Hero } from "./components/homepage/Hero";
import { Testimonials } from "./components/homepage/Testimonials";
import { Trust } from "./components/homepage/Trust";
import { WhyVR } from "./components/homepage/WhyVR";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhyVR />
      <About />
      <Courses />
      <Trust />
      <Testimonials />
      <CTA />
    </div>
  );
}
