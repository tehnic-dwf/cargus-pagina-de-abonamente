import { ArrowRight } from "lucide-react";

const plans = [
  {
    id: "starter",
    volume: "Sub 30 colete/lună",
    name: "Sign & Go",
    desc: "Fără contract. Plătești doar ce trimiți, fără abonament lunar.",
    trust: [
      "Fără contract sau perioadă minimă",
      "3.000+ puncte SHIP & GO",
      "Tracking în timp real",
    ],
    cta: "Începe acum",
    ctaHref: "#cere-oferta",
    featured: false,
  },
  {
    id: "business",
    volume: "30–300 colete/lună",
    name: "Abonament",
    desc: "All-inclusive, fără costuri ascunse. Preț fix pe durata contractului.",
    trust: [
      "Colete bonus gratuite lunar",
      "Retururi gratuite incluse",
      "Protecție anti-inflație",
    ],
    cta: "Vezi planuri",
    ctaHref: "#cere-oferta",
    featured: true,
    badge: "Cel mai ales",
  },
  {
    id: "enterprise",
    volume: "Peste 300 colete/lună",
    name: "Soluție personalizată",
    desc: "Ofertă negociată, integrare API și echipă dedicată volume mari.",
    trust: [
      "Tarife negociate pe volum",
      "Integrare API completă",
      "Manager logistic dedicat",
    ],
    cta: "Solicită ofertă",
    ctaHref: "#contact",
    featured: false,
  },
];
const PricingSection = () => {
  return (
    <section id="preturi" className="section-padding bg-background">
      <h2 className="section-heading">Planuri & Prețuri</h2>
      <p className="section-subheading">
        Câte colete trimiți lunar?
      </p>

      <div className="mt-8 space-y-5">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={[
              "relative rounded-2xl transition-all duration-200",
              plan.featured
                ? "border-2 border-cargus-orange bg-card"
                : "border border-border bg-card",
            ].join(" ")}
            style={{
              padding: plan.featured ? "24px 18px 20px" : "20px 16px",
              boxShadow: plan.featured
                ? "0 12px 32px -8px hsl(var(--cargus-orange) / 0.35), 0 2px 8px hsl(0 0% 0% / 0.06)"
                : "var(--shadow-card)",
            }}
          >
            {/* Recommended badge - centered on top */}
            {plan.featured && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
                style={{
                  background: "hsl(var(--cargus-orange))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "0 2px 8px hsl(var(--cargus-orange) / 0.4)",
                }}
              >
                {plan.badge}
              </div>
            )}

            {/* Plan name chip */}
            <span className="inline-flex items-center rounded-md px-2.5 py-1 text-[11px] text-muted-foreground bg-secondary mb-2">
              {plan.name}
            </span>

            {/* Volume */}
            <p
              className="font-bold leading-tight text-foreground"
              style={{ fontSize: plan.featured ? 24 : 20 }}
            >
              {plan.volume}
            </p>

            {/* Brand bar separator */}
            <div
              className="my-3"
              style={{
                width: 32,
                height: 2,
                borderRadius: 2,
                background: "hsl(var(--cargus-orange))",
                opacity: plan.featured ? 0.9 : 0.5,
              }}
            />

            {/* Description */}
            <p className="text-[13px] leading-snug text-muted-foreground">
              {plan.desc}
            </p>

            {/* Trust list */}
            <div className="flex flex-col gap-1.5 mt-3">
              {plan.trust.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="w-[6px] h-[6px] rounded-full bg-cargus-success inline-block shrink-0" />
                  <span className="text-[12px] text-foreground/80 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA — only featured uses solid orange (blur test) */}
            {plan.featured ? (
              <a
                href={plan.ctaHref}
                className="flex items-center justify-center gap-1.5 mt-5 w-full rounded-lg text-primary-foreground font-semibold text-[14px]"
                style={{
                  background: "hsl(var(--cargus-orange))",
                  padding: "12px",
                  minHeight: 48,
                }}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            ) : (
              <a
                href={plan.ctaHref}
                className="flex items-center justify-center gap-1.5 mt-4 w-full rounded-lg font-semibold text-[14px] border-2 transition-colors"
                style={{
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                  padding: "10px",
                  minHeight: 48,
                }}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
