import { ArrowRight, Star, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero image background */}
      <div className="relative h-[360px]">
        <img
          src={heroBg}
          alt="Livrare Cargus pentru antreprenori"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/85" />
        <div className="relative z-10 flex flex-col justify-end h-full px-5 pb-8">
          <span className="badge-orange mb-3 self-start !bg-primary/20 !text-primary-foreground">
            Pentru antreprenori
          </span>
          <h1 className="text-[1.75rem] font-black leading-[1.15] text-primary-foreground">
            Livrare rapidă și sigură pentru magazinul tău online
          </h1>
          <p className="text-[15px] text-primary-foreground/80 mt-3 leading-relaxed">
            Livrări naționale, locker și internaționale. Tarife negociate și suport dedicat — totul într-un singur partener de curierat.
          </p>
        </div>
      </div>

      {/* CTA + trust bar */}
      <div className="px-5 py-6 space-y-3">
        <a href="#cere-oferta" className="cta-primary w-full justify-center text-base">
          Află prețul pentru afacerea ta
          <ArrowRight size={20} />
        </a>
        <a href="#cere-oferta" className="cta-secondary">
          <span className="flex items-center gap-2">
            <Send size={18} className="text-cargus-orange" />
            Devino partener Cargus
          </span>
          <ArrowRight size={18} />
        </a>

        {/* Mini social proof */}
        <div className="flex items-center gap-3 pt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-cargus-orange text-cargus-orange" />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            4.8/5 — 40.805 recenzii verificate eKomi
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
