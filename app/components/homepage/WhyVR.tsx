import { FEATURES } from "@/app/constants";
import { Section } from "../global/Section";
import { SectionHeader } from "../global/SectionHeader";

export function WhyVR() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why VRFuture"
        title="Some things are easier to understand when you can see them."
        lead="Virtual reality turns diagrams into objects your child can walk around, take apart, and remember."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-highlight/10 text-highlight transition-colors group-hover:bg-highlight/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-heading text-heading">{title}</h3>
            <p className="mt-2 text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
