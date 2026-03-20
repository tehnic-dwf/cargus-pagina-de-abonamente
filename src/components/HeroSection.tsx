import { ArrowRight, Star } from "lucide-react";
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
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.68) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-end h-full px-5 pb-8">
          <span
            className="mb-3 self-start text-[11px] font-semibold tracking-wide"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "hsl(var(--primary-foreground))",
              padding: "3px 10px",
              borderRadius: 20,
            }}
          >
            Pentru antreprenori
          </span>
          <h1 className="text-[1.75rem] font-black leading-[1.15] text-primary-foreground">
            Livrare rapidă și sigură pentru magazinul tău online
          </h1>
          <p className="text-[15px] text-primary-foreground/80 mt-3" style={{ lineHeight: 1.6 }}>
            Livrări naționale, locker și internaționale. Tarife negociate și suport dedicat — totul într-un singur partener de curierat.
          </p>
        </div>
      </div>

      {/* CTA + trust bar */}
      <div className="px-5 py-6 space-y-4">
        <a href="#cere-oferta" className="cta-primary w-full justify-center text-base">
          Află prețul pentru afacerea ta
          <ArrowRight size={20} />
        </a>

        {/* Mini social proof */}
        <div className="flex items-center gap-3">
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
