import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/app/constants";
import { Section } from "../global/Section";
import { SectionHeader } from "../global/SectionHeader";

export function Courses() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Programmes"
        title="Coaching for every stage, from Class 5 to entrance exams."
        lead="CBSE, GSEB and ICSE — taught in English, Hindi and Gujarati."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROGRAMS.map(({ id, title, desc, tags }) => (
          <Link
            id={id}
            key={id}
            href={`/programs#${id}`}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-heading text-heading">{title}</h3>
            <p className="mt-2 text-muted-foreground">{desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              View programme
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
