import { ArrowUp, MapPin, MessageCircle, Clock } from "lucide-react";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { navLinks, site, whatsappLink } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-border/60 bg-background">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-8 border-b border-border/60 py-16 sm:py-20 lg:grid-cols-[1.3fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-primary/50" />
                <span className="text-[10px] uppercase tracking-[0.34em] text-primary">
                  Agendamento
                </span>
              </div>
              <h2 className="mt-6 max-w-xl font-heading text-[clamp(2.2rem,6vw,4.4rem)] font-normal leading-[0.98] tracking-[-0.02em] text-foreground text-balance">
                Reserve o seu <span className="text-primary">horário</span>.
              </h2>
              <p className="mt-5 max-w-md text-[13px] leading-relaxed text-muted-foreground sm:text-[15px]">
                Envie uma mensagem e combine o melhor horário para o seu atendimento na Barber Prime.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
              <p className="mt-3 text-center text-[8px] uppercase tracking-[0.24em] text-muted-foreground lg:text-right">
                Atendimento por agendamento
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Barbearia contemporânea em Manaus, Amazonas. Corte, barba e rituais de cuidado com
              técnica e tempo.
            </p>
          </div>

          <div>
            <h3 className="text-[9px] uppercase tracking-[0.3em] text-foreground/55">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-foreground/70 transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] uppercase tracking-[0.3em] text-foreground/55">Contato</h3>
            <ul className="mt-5 space-y-4 text-[13px] leading-relaxed text-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span>
                  {site.address}
                  <br />
                  {site.addressCity}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.5}
                />
                <span>WhatsApp (demonstrativo)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] uppercase tracking-[0.3em] text-foreground/55">Horários</h3>
            <ul className="mt-5 space-y-3 text-[13px] leading-relaxed text-foreground/70">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span>
                  Seg a sex · 09h — 20h
                  <br />
                  Sábado · 08h — 18h
                  <br />
                  Domingo · fechado
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 py-7">
          <p className="max-w-3xl text-[10px] leading-relaxed text-muted-foreground">
            {site.demoNotice}
          </p>
          <p className="mt-2 max-w-3xl text-[10px] leading-relaxed tracking-[0.04em] text-muted-foreground">
            Projeto demonstrativo fictício —{" "}
            <span className="text-primary/75">Desenvolvido por {site.agency}.</span>
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 text-[8px] uppercase tracking-[0.24em] text-muted-foreground/80 sm:flex-row sm:items-center sm:gap-6">
              <span>© 2026 {site.name}</span>
              <span>Manaus · Amazonas · Brasil</span>
            </div>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-foreground/55 transition-colors hover:text-primary"
            >
              Voltar ao topo
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden pb-2">
        <p className="text-stroke whitespace-nowrap text-center font-heading text-[10vw] leading-[0.75] tracking-[0.02em]">
          BARBER PRIME
        </p>
      </div>
    </footer>
  );
}