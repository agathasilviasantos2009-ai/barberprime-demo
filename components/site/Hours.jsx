import { Clock, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { hours, whatsappLink } from "@/data/siteContent";

export default function Hours() {
  return (
    <section
      id="horarios"
      className="scroll-mt-24 border-t border-border/50 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <SectionHeading
          index="06"
          eyebrow="Horários"
          title={
            <>
              A barbearia de <span className="text-primary">portas abertas</span>
            </>
          }
          description="Atendimento por agendamento para garantir exclusividade e tempo com cada cliente."
        />

        <Reveal delay={0.1}>
          <div className="surface-card relative border border-border/60 bg-card/30 p-6 sm:p-9">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-5">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-[0.28em] text-foreground/70 sm:text-[10px]">
                  Funcionamento semanal
                </span>
              </div>
              <span className="hidden rounded-full border border-primary/30 px-3 py-1 text-[8px] uppercase tracking-[0.2em] text-primary/80 sm:inline-block">
                Por agendamento
              </span>
            </div>

            <div>
              {hours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-baseline justify-between gap-6 border-b border-border/40 py-5 last:border-b-0"
                >
                  <span className="text-[13px] text-foreground/85 sm:text-sm">{row.day}</span>
                  <span
                    className={`font-heading text-xl leading-none sm:text-2xl ${
                      row.time === "Fechado" ? "text-muted-foreground" : "text-primary"
                    }`}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-gold w-full !text-[10px]"
              >
                <MessageCircle className="h-4 w-4" />
                Verificar no WhatsApp
              </a>
              <p className="mt-4 text-[10px] leading-relaxed text-muted-foreground">
                Horários demonstrativos, sem relação com um estabelecimento real.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}