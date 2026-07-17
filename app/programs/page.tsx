import { Section } from "../components/homepage/Section";
import { cn } from "@/lib/utils";
import { BOARDS, MEDIUMS, PROGRAMS } from "../constants";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CTA } from "../components/homepage/CTA";

export const metadata = {
  title: "Programs — Classes 5–12, JEE & NEET | VRFuture Coaching, Daman",
  description:
    "VR-powered coaching for Classes 5–12, JEE & NEET in Daman. CBSE, GSEB & ICSE boards in English, Hindi & Gujarati.",
};

export default function ProgramsPage() {
  return (
    <div>
      {/* //Heading & desc */}
      <Section className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-brand font-heading">
          Our Programs
        </h1>
        <p className="text-lg text-muted">
          VR-powered coaching for Classes 5–12, JEE & NEET in Daman. CBSE, GSEB
          & ICSE boards in English, Hindi & Gujarati.
        </p>
      </Section>
      {/* Boards & Medium badge strip */}
      <div className="bg-surface">
        <Section>
          <div className="flex flex-wrap justify-center gap-8">
            <span>BOARDS:</span>
            {BOARDS.map((board) => (
              <Badge key={board}>{board}</Badge>
            ))}
            <span>Medium:</span>
            {MEDIUMS.map((medium) => (
              <Badge key={medium}>{medium}</Badge>
            ))}
          </div>
        </Section>
      </div>
      {/* Program groups */}
      <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROGRAMS.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{program.desc}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              {program.subjects &&
                program.subjects.map((subject) => (
                  <Badge key={subject}>{subject}</Badge>
                ))}
              {program.streams &&
                program.streams.map((stream) => (
                  <Badge key={stream}>{stream}</Badge>
                ))}
            </CardFooter>
          </Card>
        ))}
      </Section>
      {/* CTA block */}
      <CTA />
    </div>
  );
}
