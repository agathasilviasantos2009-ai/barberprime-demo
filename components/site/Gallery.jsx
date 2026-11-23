import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import GalleryFrame from "./GalleryFrame";
import { gallery } from "@/data/siteContent";

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="scroll-mt-24 border-t border-border/50 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Galeria"
            title={
              <>
                Precisão que se <span className="text-primary">vê</span>
              </>
            }
          />
          <p className="max-w-[16rem] pb-1 text-[9px] uppercase leading-relaxed tracking-[0.22em] text-muted-foreground/80 sm:text-right">
            Texturas, aço e couro
            <br />
            espaços para fotos
          </p>
        </div>

        <div className="mt-11 space-y-3 sm:space-y-4">
          <Reveal>
            <GalleryFrame
              image={gallery[0]}
              index="01"
              className="aspect-[4/3] w-full sm:aspect-[21/9]"
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery.slice(1, 4).map((image, i) => (
              <Reveal key={image.src} delay={i * 0.06}>
                <GalleryFrame
                  image={image}
                  index={`0${i + 2}`}
                  className={
                    i === 2
                      ? "aspect-[4/3] w-full lg:col-span-1 lg:aspect-[3/4]"
                      : "aspect-[3/4] w-full"
                  }
                />
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {gallery.slice(4, 6).map((image, i) => (
              <Reveal key={image.src} delay={i * 0.06}>
                <GalleryFrame
                  image={image}
                  index={`0${i + 5}`}
                  className="aspect-[4/3] w-full sm:aspect-[16/10]"
                />
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[10px] leading-relaxed text-muted-foreground">
          Espaços reservados para as fotos do projeto.
        </p>
      </div>
    </section>
  );
}