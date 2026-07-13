import { Section } from "./Section";
import { TRUST_STRIP } from "../../constants";
import { cn } from "@/lib/utils";

export function Trust() {
  return (
    <div className="bg-surface">
      <Section className={cn("w-full")}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-6">
          {TRUST_STRIP.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-2"
              >
                <Icon className="h-8 w-8 text-accent-brand" />
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-black">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
