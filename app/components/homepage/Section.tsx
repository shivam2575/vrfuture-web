import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("max-w-7xl mx-auto px-4 py-12 md:py-20", className)}
    >
      {children}
    </section>
  );
}
