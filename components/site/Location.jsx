import { MapPin, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/siteContent";

const corners = [
  "left-4 top-4 border-l border-t",
  "right-4 top-4 border-r border-t",
  "left-4 bottom-4 border-l border-b",
  "right-4 bottom-4 border-r border-b",
];

export default function Location() {
  return (
    <section
      id="localizacao"
      className="scroll-mt-24 border-t border-border/50 bg-card/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary/55">07</span>
                <span className="h-px w-10 bg-primary/50" />
                <span className="text-[10px] uppercase tracking-[0.34em] text-primary">
                  Localização
                </span>
              </div>

              <h2 className="mt-6 font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.015em] text-foreground text-balance">
                No centro de <span className="text-primary">Manaus</span>
              </h2>

              <div className="mt-9 flex items-start gap-4 border-t border-border/60 pt-7">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-foreground/90 sm:text-base">{site.address}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">{site.addressCity}</p>
                  <p className="mt-2 text-[8px] uppercase tracking-[0.26em] text-primary/60">
                    {site.addressNote}
                  </p>
                </div>
              </div>

              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost mt-8">
                <Navigation className="h-3.5 w-3.5" />
                Abrir no mapa
              </a>

              <p className="mt-6 max-w-md text-[10px] leading-relaxed text-muted-foreground">
                Endereço fictício. O mapa é apenas ilustrativo e não indica um estabelecimento real.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="map-canvas relative aspect-[4/3] w-full overflow-hidden border border-border/60">
              {corners.map((position) => (
                <span
                  key={position}
                  className={`pointer-events-none absolute h-8 w-8 border-primary/35 ${position}`}
                />
              ))}

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span className="relative flex h-14 w-14 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/15" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-6px_hsl(var(--primary)/0.8)]">
                    <MapPin className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </span>
                <p className="mt-5 font-heading text-xl text-foreground sm:text-2xl">{site.name}</p>
                <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-primary/80">
                  {site.city} · {site.state}
                </p>
              </div>

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between border-t border-primary/20 pt-3 text-[8px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Mapa ilustrativo</span>
                <span className="text-primary/50">03°08′S · 58°26′W</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}