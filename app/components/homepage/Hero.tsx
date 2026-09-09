import { HERO_STATS, WHATSAPP_URL } from "@/app/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { EnquiryButton } from "../global/EnquiryButton";
import { Section } from "../global/Section";

export function Hero() {
  return (
    <section className="surface-dark relative min-h-svh overflow-hidden">
      <div
        id="sentinel"
        className="pointer-events-none absolute top-0 h-1 w-full"
      />

      <Image
        src="/hero1.webp"
        alt="Students learning with VR headsets at VRFuture"
        priority
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Scrim — absolute, or it renders as a zero-height div */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/30" />

      <Section className="relative z-10 flex min-h-svh flex-col justify-center">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Daman · CBSE, GSEB, ICSE
          </p>

          <h1 className="mt-6 text-6xl font-heading text-foreground">
            Understand it.
            <br />
            Don&apos;t memorise it.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            VR-powered coaching for Classes 5–12, JEE and NEET in Daman. CBSE,
            GSEB and ICSE — taught in English, Hindi and Gujarati.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <EnquiryButton />
            <Button
              variant="outline"
              size="pill"
              render={
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              WhatsApp Us
            </Button>
          </div>

          <dl className="mt-12 flex gap-10 border-t border-border pt-8">
            {HERO_STATS.map(({ value, label }) => (
              <div key={label}>
                <dt className="text-3xl font-heading text-foreground tabular-nums">
                  {value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}
