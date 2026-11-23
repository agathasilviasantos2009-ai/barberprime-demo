import { Check } from "lucide-react";
import Reveal from "./Reveal";
import MediaPlaceholder from "./MediaPlaceholder";
import { principles, site } from "@/data/siteContent";

export default function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 border-t border-border/50 bg-card/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <MediaPlaceholder
                  className="absolute inset-0 h-full w-full"
                  iconClassName="h-10 w-10 sm:h-12 sm:w-12"
                />
                <div className="absolute inset-0 border border-primary/10" />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="absolute -bottom-7 -right-2 hidden w-36 sm:block lg:-right-7 lg:w-44">
              <div className="relative aspect-square overflow-hidden border border-background bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
                <MediaPlaceholder
                  className="absolute inset-0 h-full w-full"
                  iconClassName="h-6 w-6 sm:h-7 sm:w-7"
                />
              </div>
            </Reveal>

            <span className="absolute -left-4 top-8 hidden h-28 w-px bg-primary/40 sm:block" />
          </div>

          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary/55">05</span>
                <span className="h-px w-10 bg-primary/50" />
                <span className="text-[10px] uppercase tracking-[0.34em] text-primary">
                  A barbearia
                </span>
              </div>

              <h2 className="mt-6 font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.015em] text-foreground text-balance">
                Um espaço para o <span className="text-primary">tempo</span> de quem senta na
                cadeira
              </h2>

              <blockquote className="mt-8 border-l border-primary/40 pl-5 font-heading text-[19px] leading-snug text-foreground/85 sm:text-[22px]">
                “Barbearia não é só serviço. É ritual — do começo ao fim, com as mesmas mãos.”
              </blockquote>

              <div className="mt-7 space-y-4 text-[13px] leading-relaxed text-muted-foreground sm:text-[15px]">
                <p>
                  A {site.name} nasceu da ideia de que barbearia não é apenas serviço. Aqui, cada
                  atendimento é conduzido do começo ao fim pelo mesmo profissional, com atenção à
                  estrutura do rosto, ao caimento do cabelo e ao conforto de quem está na cadeira.
                </p>
                <p>
                  O ambiente segue a mesma lógica: materiais honestos, couro, madeira escura e luz
                  baixa. Sem pressa, sem ruído e sem excesso — uma barbearia contemporânea com raízes
                  na tradição clássica.
                </p>
              </div>

              <ul className="mt-9 border-t border-border/60">
                {principles.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-border/60 py-3.5"
                  >
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center border border-primary/35 text-primary">
                      <Check className="h-3 w-3" strokeWidth={2} />
                    </span>
                    <span className="text-[13px] text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex items-end justify-between gap-6">
                <div>
                  <p className="font-heading text-2xl text-primary">{site.name}</p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-muted-foreground">
                    Barbearia · {site.city}, {site.state}
                  </p>
                </div>
                <p className="max-w-[11rem] text-right text-[9px] leading-relaxed text-muted-foreground/80">
                  Apresentação fictícia criada para este projeto demonstrativo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}