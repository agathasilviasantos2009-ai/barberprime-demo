import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { site, whatsappLink, heroMeta } from "@/data/siteContent";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black" />
      <div className="hero-scrim absolute inset-0" />
      <div className="pointer-events-none absolute inset-3 hidden border border-primary/15 sm:block sm:inset-5" />

      <span className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 text-[8px] uppercase tracking-[0.55em] text-foreground/30 lg:block [writing-mode:vertical-rl]">
        Barbearia contemporânea — {site.city}, {site.state}
      </span>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-40 sm:px-8 sm:pb-16 lg:pb-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.34em] text-primary sm:text-[10px]">
            <span className="h-px w-10 bg-primary/60" />
            Tradição &amp; precisão
          </span>

          <h1 className="mt-6 font-heading text-[clamp(2.4rem,8.5vw,6rem)] font-normal leading-[0.98] tracking-[-0.02em] text-foreground text-balance">
            Tradição afiada à navalha.
            <br />
            <span className="text-primary">Precisão</span> em cada detalhe.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/70 sm:text-base lg:text-lg">
            Cortes, barba e rituais de cuidado conduzidos com técnica, tempo e atenção — em um
            ambiente reservado no coração de Manaus.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost w-full sm:w-auto">
              Explorar serviços
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/40 pt-6 sm:mt-14 sm:gap-8">
          {heroMeta.map((item) => (
            <div key={item.label}>
              <p className="text-[8px] uppercase tracking-[0.24em] text-primary/70 sm:text-[9px]">
                {item.label}
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-foreground/75 sm:text-xs">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[9px] leading-relaxed text-muted-foreground/70">
          * Número de WhatsApp, endereço e demais dados deste site são demonstrativos.
        </p>
      </div>
    </section>
  );
}