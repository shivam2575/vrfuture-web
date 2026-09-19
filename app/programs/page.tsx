import { Section } from "../components/global/Section";
import { PROGRAMS } from "../constants";
import { CTA } from "../components/global/CTA";
import { SectionHeader } from "../components/global/SectionHeader";
import { ProgramsCard } from "../components/programs/ProgramsCard";

export const metadata = {
  title: "Programs",
  description:
    "VR-powered coaching for Classes 5–12, JEE & NEET in Daman. CBSE, GSEB & ICSE boards in English, Hindi & Gujarati.",
};

export default function ProgramsPage() {
  return (
    <div>
      {/* //Heading & desc */}
      <Section>
        <SectionHeader
          as="h1"
          eyebrow="Programmes"
          title="Our Programs"
          lead="VR-powered coaching for Classes 5–12, JEE & NEET in Daman. CBSE, GSEB
          & ICSE boards in English, Hindi & Gujarati."
        />
        <div className="mt-14 flex flex-col gap-6">
          {PROGRAMS.map((program) => (
            <ProgramsCard key={program.id} {...program} />
          ))}
        </div>
      </Section>
      <CTA />
    </div>
  );
}
