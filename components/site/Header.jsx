import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "@/data/siteContent";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div
        className={`overflow-hidden border-b border-border/30 transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
        }`}
      >
        <p className="py-2 text-center text-[8px] uppercase tracking-[0.3em] text-primary/65 sm:text-[9px]">
          Projeto demonstrativo · dados fictícios
        </p>
      </div>

      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:py-4">
        <a href="#top" aria-label="Barber Prime, início" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-[10px] uppercase tracking-[0.24em] text-foreground/65 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-primary/45 px-5 py-2.5 text-[9px] uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center border border-border/80 text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary lg:hidden"
          >
            <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <div className="fixed inset-0 z-[70] flex flex-col bg-background lg:hidden">
          <div className="flex items-center justify-between border-b border-border/50 px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex h-10 w-10 items-center justify-center border border-border/80 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Navegação móvel" className="flex-1 overflow-y-auto px-5">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between gap-4 border-b border-border/40 py-5"
              >
                <span className="font-heading text-[26px] leading-none text-foreground/90 transition-colors group-hover:text-primary">
                  {link.label}
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-primary/50">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-border/50 px-5 py-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold w-full"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <p className="mt-4 text-[9px] leading-relaxed text-muted-foreground">
              {site.demoNotice}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}