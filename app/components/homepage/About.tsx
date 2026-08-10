import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Section } from "../global/Section";

export function About() {
  return (
    <Section>
      <div className="">
        <h2 className="font-heading text-5xl text-center mb-8 text-heading">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="">
            <Image
              src="/hero1.webp"
              width={800}
              height={600}
              alt="Students learning with VR headsets at VRFuture"
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <Separator className="hidden md:block" orientation="vertical" />
          <div>
            <p className="font-sans text-primary">
              Founded in 2020, VRFuture Coaching Institute was built to help
              students fall in love with learning by going beyond conventional
              teaching. Through Virtual Reality, students can visualise complex
              concepts — making lessons more engaging, interactive, and far
              easier to remember. We combine immersive technology with
              experienced faculty to build confident, future-ready learners.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
