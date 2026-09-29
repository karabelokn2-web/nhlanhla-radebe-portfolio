export function SectionHeading({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-primary">({index})</span>
      <span className="h-px flex-1 bg-border" />
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
