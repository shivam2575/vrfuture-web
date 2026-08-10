import { WHATSAPP_URL } from "@/app/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { EnquiryButton } from "../global/EnquiryButton";

export function Hero() {
  return (
    <section className="surface-dark relative min-h-screen w-full bg-cover bg-center">
      <div
        id="sentinel"
        className="absolute top-0 h-1 w-full pointer-events-none"
      />
      <Image src="/hero1.webp" alt="VR Classroom" priority fill />
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-foreground">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-7xl font-heading text-foreground">
            Learn with Virtual Reality
          </h1>
          <p className="text-4xl font-sans">Classes 5-12, JEE, NEET</p>
        </div>
        <div className="flex flex-col mt-6 md:flex-row gap-4">
          <EnquiryButton />

          <Button
            variant="whatsapp"
            size="pill"
            render={
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Whatsapp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
