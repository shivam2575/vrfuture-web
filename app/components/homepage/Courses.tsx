import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "./Section";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/app/constants";

export function Courses() {
  return (
    <Section>
      <h2 className="font-heading text-4xl md:text-6xl text-center mb-8">
        Courses We Offer
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {COURSES.map((course) => (
          <Card
            key={course.title}
            className="relative mx-auto w-full max-w-sm pt-0 shadow-md"
          >
            <Image
              src={`/${course.img}`}
              alt={course.title}
              width={800}
              height={600}
              className="w-full aspect-video object-cover"
            />
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.desc}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-center">
              <Link
                href="/programs"
                className="rounded-2xl bg-brand text-white py-2 px-4"
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
