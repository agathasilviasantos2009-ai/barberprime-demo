import { site } from "@/data/siteContent";

export default function Logo({ onClick }) {
  return (
    <span onClick={onClick} className="flex items-center gap-3">
      <span className="relative flex h-9 w-9 items-center justify-center border border-primary/60 sm:h-10 sm:w-10">
        <span className="absolute inset-[3px] border border-primary/15" />
        <span className="font-heading text-base leading-none text-primary sm:text-lg">
          {site.monogram}
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[15px] tracking-[0.2em] text-foreground sm:text-base">
          BARBER PRIME
        </span>
        <span className="mt-1.5 text-[7px] uppercase tracking-[0.36em] text-primary/65 sm:text-[8px]">
          {site.city} · AM
        </span>
      </span>
    </span>
  );
}