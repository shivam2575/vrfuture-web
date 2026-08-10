import { Section } from "../global/Section";
import { TRUST_STRIP } from "../../constants";
import { cn } from "@/lib/utils";

export function Trust() {
  return (
    <div className="surface-dark bg-muted">
      <Section className={cn("w-full")}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-6">
          {TRUST_STRIP.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-2"
              >
                <Icon className="h-8 w-8 text-highlight" />
                <h3 className="font-heading text-foreground font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
