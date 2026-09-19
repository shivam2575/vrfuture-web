import { TRUST_STRIP } from "@/app/constants";
import { Section } from "../global/Section";
import { SectionHeader } from "../global/SectionHeader";
import { EnquiryButton } from "../global/EnquiryButton";

export function Trust() {
  return (
    <div className="surface-dark bg-background">
      <Section>
        <SectionHeader
          eyebrow="Why parents choose us"
          title="Try it for a week before you commit."
          lead="No deposit, no paperwork — just come and see whether it works for your child."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {TRUST_STRIP.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-highlight/10 text-highlight">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-heading text-heading">
                {title}
              </h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <EnquiryButton className="mt-12" />
      </Section>
    </div>
  );
}
