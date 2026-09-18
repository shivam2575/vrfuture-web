import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "../global/Section";
import { SectionHeader } from "../global/SectionHeader";

export function About() {
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeader
            eyebrow="Our story"
            title="Started in Daman in 2020, with one idea."
          />
          <p className="mt-6 text-muted-foreground">
            VRFuture was built to help students fall in love with learning by
            going beyond conventional teaching. Through Virtual Reality,
            students can visualise complex concepts — making lessons more
            engaging, interactive, and far easier to remember. We combine
            immersive technology with experienced faculty to build confident,
            future-ready learners.
          </p>

          <Link
            href="/gallery"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary group transition-colors hover:text-heading"
          >
            See VR in action
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-lg">
          <Image
            src="/gal1.webp"
            alt="Students learning with VR headsets at VRFuture, Daman"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
