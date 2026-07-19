import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Section } from "../components/homepage/Section";
import { TESTIMONIALS } from "../constants";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
export const metadata = {
  title: "Testimonials | VRFuture Coaching Institute, Daman",
  description:
    "Hear from parents and students about VR-powered learning at VRFuture Coaching Institute, Daman.",
};
export default function TestimonialPage() {
  return (
    <div className="">
      {/* //Heading & desc */}
      <Section className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-brand font-heading">
          What People Say
        </h1>
        <p className="text-lg text-muted-foreground">
          Hear from parents and students about VR-powered learning at VRFuture
          Coaching Institute, Daman.
        </p>
      </Section>
      <Section
        className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6")}
      >
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.name} className="text-center">
            <CardHeader className="flex justify-center">
              <Quote />
            </CardHeader>
            <CardContent>{testimonial.quote}</CardContent>
            <CardFooter className="flex flex-col">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted">{testimonial.role}</p>
            </CardFooter>
          </Card>
        ))}
      </Section>
    </div>
  );
}
