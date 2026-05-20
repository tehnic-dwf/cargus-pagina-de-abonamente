import { ArrowRight, Star, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-antreprenori.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[380px]">
        <img
          src={heroBg}
          alt="Antreprenor care lucrează cu colete Cargus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.78) 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col h-full px-5 pt-6 pb-7">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-[11px] text-primary-foreground/80"
          >
            <a href="#" className="hover:text-primary-foreground">
              Antreprenori
            </a>
            <ChevronRight size={12} className="opacity-60" />
            <span className="font-semibold">Abonamente antreprenori</span>
          </nav>

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
              className="text-[1.85rem] font-extrabold text-primary-foreground uppercase"
              style={{ letterSpacing: "-0.01em", lineHeight: 1.1 }}
            >
              Ofertă{" "}
              <span className="relative inline-block">
                specială
                <span
                  className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full"
                  style={{ background: "hsl(var(--cargus-orange))" }}
                />
              </span>
              <br />
              pentru antreprenori
            </h1>
            <p
              className="text-[14px] text-primary-foreground/90 mt-4"
              style={{ lineHeight: 1.55, fontWeight: 500 }}
            >
              Abonamente lunare cu preț fix 12 luni — de la{" "}
              <span className="font-bold text-cargus-orange">299 lei</span>, cu
              până la <span className="font-bold">77,8% reducere</span> și colete
              bonus în fiecare lună.
            </p>

            {/* Social proof inline */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-cargus-success inline-block" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-cargus-orange text-cargus-orange"
                  />
                ))}
              </div>
              <span className="text-[12px] font-medium text-primary-foreground/85">
                4.8/5 — 40.805 recenzii eKomi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero CTA */}
      <div className="px-5 pt-5 pb-5 bg-background border-b border-border">
        <a
          href="#cere-oferta"
          className="cta-primary w-full justify-center text-base uppercase tracking-wide"
        >
          Vreau oferta
          <ArrowRight size={20} />
        </a>
        <p className="text-[11px] text-muted-foreground text-center mt-2.5">
          Răspuns în maximum 24 ore lucrătoare · Fără obligații
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
