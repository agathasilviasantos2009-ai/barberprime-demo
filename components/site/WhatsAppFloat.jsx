import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/siteContent";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fab-glow group fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary py-3.5 pl-4 pr-4 text-primary-foreground transition-all duration-300 hover:bg-primary/90 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/25" />
      <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 group-hover:max-w-[9rem]">
        Agendar
      </span>
    </a>
  );
}