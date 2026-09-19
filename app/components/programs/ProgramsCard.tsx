import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProgramsCard({
  id,
  title,
  desc,
  tags,
}: {
  id: string;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-md md:p-8"
    >
      <div className="md:flex md:items-start md:justify-center md:gap-10">
        <div className="md:max-w-xl">
          <h2 className="text-2xl font-heading text-heading">{title}</h2>
          <p className="mt-3 text-muted-foreground">{desc}</p>
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
        </div>
        <Button
          variant="outline"
          size="pill"
          className="mt-6 w-full md:mt-0 md:w-auto"
          render={<Link href={`/contact?programme=${id}`} />}
        >
          Enquire
        </Button>
      </div>
    </article>
  );
}
