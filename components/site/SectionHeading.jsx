import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, description, className = "" }) {
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-4">
        {index ? (
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary/55">{index}</span>
        ) : null}
        <span className="h-px w-10 bg-primary/50" />
        <span className="text-[10px] uppercase tracking-[0.34em] text-primary">{eyebrow}</span>
      </div>

      <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2rem,4.6vw,3.6rem)] font-normal leading-[1.05] tracking-[-0.015em] text-foreground text-balance">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}