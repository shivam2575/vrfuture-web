import Image from "next/image";
import { Section } from "../components/homepage/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FACULTY } from "../constants";
import { CTA } from "../components/homepage/CTA";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Faculty | VRFuture Coaching Institute, Daman",
  description:
    "Meet the experienced teachers behind VRFuture — expert faculty for Classes 5–12, JEE & NEET in Daman.",
};

export default function FacultyPage() {
  return (
    <div className="">
      <Section className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-brand font-heading">
          Our Faculty
        </h1>
        <p className="text-lg text-muted-foreground">
          Meet the experienced teachers behind VRFuture — expert faculty for
          Classes 5–12, JEE & NEET in Daman.
        </p>
      </Section>
      <Section
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8",
        )}
      >
        {FACULTY.map((faculty) => (
          <Card
            key={faculty.name}
            className="relative mx-auto w-full max-w-sm pt-0 shadow-md"
          >
            <Image
              src={`/${faculty.photo}`}
              alt={faculty.name}
              width={800}
              height={600}
              className="w-full aspect-square object-cover"
            />
            <CardHeader className="flex justify-between">
              <CardTitle>{faculty.name}</CardTitle>
              <Badge>{faculty.subject}</Badge>
            </CardHeader>
            <CardContent>
              <p>{faculty.qualification}</p>
              <p>{faculty.bio}</p>
            </CardContent>
          </Card>
        ))}
      </Section>
      <CTA />
    </div>
  );
}
