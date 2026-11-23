import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services, whatsappLink } from "@/data/siteContent";

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-24 border-t border-border/50 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Serviços"
            title={
              <>
                O ofício em <span className="text-primary">cinco</span> etapas
              </>
            }
            description="Uma carta de serviços enxuta, pensada para o cuidado masculino. Cada atendimento começa com uma conversa e termina no detalhe."
          />
          <p className="hidden shrink-0 pb-2 text-right text-[9px] uppercase leading-relaxed tracking-[0.24em] text-muted-foreground/80 sm:block">
            05 serviços
            <br />
            valores sob consulta
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-border/60 bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}

          <Reveal delay={0.28}>
            <div className="surface-card relative flex h-full flex-col justify-between overflow-hidden bg-card/50 p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-primary">
                  Atendimento
                </span>
                <h3 className="mt-7 font-heading text-2xl leading-tight text-foreground sm:text-[28px]">
                  Não sabe qual escolher?
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                  Fale diretamente com um barbeiro e receba a indicação certa para o seu perfil.
                </p>
              </div>
              <a
                href={whatsappLink("Olá! Gostaria de uma indicação de serviço.")}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-8 w-full !text-[10px]"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <p className="mt-7 text-[10px] leading-relaxed text-muted-foreground">
          Valores e duração sob consulta. Serviços descritos de forma ilustrativa para este projeto
          demonstrativo.
        </p>
      </div>
    </section>
  );
}