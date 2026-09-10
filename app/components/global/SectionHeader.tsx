export function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-4xl font-heading text-heading">{title}</h2>
      {lead && <p className="mt-4 text-lg text-muted-foreground">{lead}</p>}
    </div>
  );
}
