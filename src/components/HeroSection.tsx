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
            background: "linear-gradient(160deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* Pill top-left */}
        <div className="relative z-10 flex flex-col h-full px-5 pt-6 pb-8">
          <span
            className="self-start text-[11px] font-semibold tracking-wide text-primary-foreground"
            style={{
              background: "rgba(255, 92, 0, 0.75)",
              padding: "3px 10px",
              borderRadius: 20,
            }}
          >
            Pentru antreprenori
          </span>

          <div className="mt-auto">
            {/* Orange brand bar */}
            <div
              className="mb-3"
              style={{
                width: 28,
                height: 3,
                borderRadius: 2,
                background: "hsl(var(--cargus-orange))",
              }}
            />
            <h1
              className="text-[1.75rem] font-extrabold text-primary-foreground"
              style={{ letterSpacing: "-0.02em", lineHeight: 1.18 }}
            >
              Tarife negociate și manager dedicat, de la primul colet
            </h1>
            <p className="text-[15px] text-primary-foreground/[0.88] mt-3" style={{ lineHeight: 1.6, fontWeight: 400 }}>
              Peste 50.000 de magazine online livrează cu Cargus.
            </p>

            {/* Rating inline */}
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-cargus-success inline-block" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-cargus-orange text-cargus-orange" />
                ))}
              </div>
              <span className="text-[13px] font-medium text-primary-foreground/80">4.8/5 — 40.805 recenzii eKomi</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pt-5 pb-6 border-b border-border">
        <a
          href="#preturi"
          className="cta-primary w-full justify-center text-base"
          style={{ paddingTop: 14, paddingBottom: 14 }}
        >
          Devino partener Cargus
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
