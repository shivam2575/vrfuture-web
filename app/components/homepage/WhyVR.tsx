import { FEATURES } from "@/app/constants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "../global/Section";
import Image from "next/image";

export function WhyVR() {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <h2 className="font-heading text-heading text-5xl text-center mb-8">
          Why choose us?
        </h2>
        <div className="flex flex-col md:flex-row gap-6 px-2">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="relative mx-auto w-full max-w-sm pt-0"
            >
              <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
              <Image
                src={`/${feature.img}`}
                alt="Student wearing a vr headset"
                width={800}
                height={700}
                className="relative z-20 aspect-video w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
