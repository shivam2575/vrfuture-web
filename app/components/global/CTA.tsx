import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import Link from "next/link";

export function CTA() {
  return (
    <div className="bg-highlight">
      <Section>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="font-heading text-4xl font-bold text-highlight-foreground text-center">
            Ready to give your child the VR advantage?
          </h2>
          <Button render={<Link href="/contact" />}>Enquire Now</Button>
        </div>
      </Section>
    </div>
  );
}
