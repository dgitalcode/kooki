import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, kicker, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("story-section", className)}
      aria-labelledby={`${id}-title`}
    >
      <header className="mb-7">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
