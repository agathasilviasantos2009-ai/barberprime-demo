import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Differentials from "@/components/site/Differentials";
import Gallery from "@/components/site/Gallery";
import About from "@/components/site/About";
import Hours from "@/components/site/Hours";
import Location from "@/components/site/Location";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2 focus:text-[10px] focus:font-semibold focus:uppercase focus:tracking-[0.2em] focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <Gallery />
        <About />
        <Hours />
        <Location />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}