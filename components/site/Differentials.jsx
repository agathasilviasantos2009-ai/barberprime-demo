import { Armchair, CalendarClock, Droplets, Scissors } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { differentials } from "@/data/siteContent";

const icons = {
  calendar: CalendarClock,
  scissors: Scissors,
  droplets: Droplets,
  armchair: Armchair,
};

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-24 border-t border-border/50 bg-card/30 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="03"
            eyebrow="Diferenciais"
            title={
              <>
                Por que a <span className="text-primary">Barber Prime</span>
              </>
            }
            description="Quatro compromissos que sustentam cada atendimento dentro da barbearia."
          />
          <div className="mt-10 hidden h-px w-24 bg-gradient-to-r from-primary/60 to-transparent lg:block" />
        </div>

        <div className="border-t border-border/60">
          {differentials.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group grid grid-cols-[2.25rem_1fr] items-start gap-x-5 gap-y-2 border-b border-border/60 py-7 sm:grid-cols-[2.5rem_14rem_1fr] sm:gap-x-8 sm:py-9">
                  <span className="font-heading text-lg leading-none text-primary/50">
                    {item.index}
                  </span>
                  <h3 className="flex items-center gap-3 font-heading text-xl leading-tight text-foreground transition-colors duration-500 group-hover:text-primary sm:text-[22px]">
                    <Icon className="h-4 w-4 shrink-0 text-primary/70" strokeWidth={1.4} />
                    {item.title}
                  </h3>
                  <p className="col-start-2 text-[13px] leading-relaxed text-muted-foreground sm:col-start-3 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}