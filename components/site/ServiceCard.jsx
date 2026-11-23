import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/data/siteContent";

export default function ServiceCard({ service }) {
  return (
    <a
      href={whatsappLink(`Olá! Tenho interesse no serviço ${service.name}.`)}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col justify-between overflow-hidden bg-background p-7 transition-colors duration-500 hover:bg-card/70 sm:p-9"
    >
      <span className="absolute inset-x-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />

      <div>
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[10px] tracking-[0.24em] text-primary/70">
            {service.number}
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-foreground/25 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="mt-7 font-heading text-[26px] leading-[1.1] text-foreground transition-colors duration-500 group-hover:text-primary sm:mt-9 sm:text-[28px]">
          {service.name}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
          {service.description}
        </p>
      </div>

      <span className="mt-8 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-foreground/45 transition-colors duration-500 group-hover:text-primary">
        Agendar
        <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
      </span>
    </a>
  );
}