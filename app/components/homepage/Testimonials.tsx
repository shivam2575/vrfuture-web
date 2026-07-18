import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "./Section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TESTIMONIALS } from "@/app/constants";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <Section>
      <h2 className="font-heading text-4xl md:text-6xl text-center mb-8">
        What People Say
      </h2>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="text-center">
                <CardHeader className="flex justify-center">
                  <Quote />
                </CardHeader>
                <CardContent>{testimonial.quote}</CardContent>
                <CardFooter className="flex flex-col">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
