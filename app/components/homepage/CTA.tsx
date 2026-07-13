import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import Link from "next/link";

export function CTA() {
  return (
    <div className="bg-accent-brand">
      <Section>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand text-center">
            Ready to give your child the VR advantage?
          </h2>
          <Link href="/contact">
            <Button>Enquire Now</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
