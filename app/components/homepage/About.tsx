import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Section } from "./Section";

export function About() {
  return (
    <Section>
      <div className="">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-8">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="">
            <Image
              src="/hero1.jpg"
              width={800}
              height={600}
              alt="Students learning with VR headsets at VRFuture"
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <Separator className="hidden md:block" orientation="vertical" />
          <div>
            <p className="font-sans text-brand">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
