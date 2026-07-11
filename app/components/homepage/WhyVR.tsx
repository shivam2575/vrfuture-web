import { FEATURES } from "@/app/constants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function WhyVR() {
  return (
    <section className="my-4 p-2 md:my-8">
      <div className="flex flex-col gap-4">
        <h2 className="font-heading text-4xl md:text-6xl text-center">
          Why choose us?
        </h2>
        <div className="flex flex-col md:flex-row gap-6 px-2">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="relative mx-auto w-full max-w-sm pt-0 shadow-md"
            >
              {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
              <img
                src={feature.img}
                alt="Student wearing a vr headset"
                className="relative z-20 aspect-video w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
