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
    desc: "Tarif fix lunar + manager dedicat care îți răspunde direct.",
    trust: [
      "Preț fix pe durata contractului",
      "Ridicare de la adresă inclusă",
      "Account manager dedicat",
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
    <section id="preturi" className="section-padding bg-secondary">
      <h2 className="section-heading">Planuri & Prețuri</h2>
      <p className="section-subheading">
        Câte colete trimiți lunar?
      </p>

      <div className="mt-8 space-y-4">
        {plans.map((plan) => (
          <a
            key={plan.id}
            href={plan.ctaHref}
            className={[
              "group block rounded-2xl transition-all duration-200 active:scale-[0.98]",
              plan.featured
                ? "border-2 border-cargus-orange shadow-card-hover"
                : "border border-border bg-card shadow-card hover:border-cargus-orange hover:bg-[hsl(30,100%,98%)]",
            ].join(" ")}
            style={{
              padding: "20px 16px",
              minHeight: 44,
              background: plan.featured ? "#FFFAF7" : undefined,
            }}
          >
            {/* Badge + Chip row */}
            <div className="flex items-center gap-2 mb-2">
              {plan.badge && (
                <span className="badge-orange text-[11px]">
                  {plan.badge}
                </span>
              )}
              <span className="inline-flex items-center rounded-md px-2.5 py-1 text-[11px] text-muted-foreground bg-secondary">
                {plan.name}
              </span>
            </div>

            {/* Volume */}
            <p
              className="font-bold leading-tight text-foreground"
              style={{ fontSize: plan.featured ? 22 : 20 }}
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

            {/* Trust chip */}
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-[6px] h-[6px] rounded-full bg-cargus-success inline-block" />
              <span className="text-[11px] text-muted-foreground font-medium">
                {plan.trust}
              </span>
            </div>

            {/* CTA */}
            {plan.featured ? (
              <span
                className="flex items-center justify-center gap-1.5 mt-4 w-full rounded-lg text-primary-foreground font-semibold text-[14px]"
                style={{
                  background: "hsl(var(--cargus-orange))",
                  padding: "10px",
                }}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </span>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 mt-3 font-medium text-[13px]"
                style={{ color: "hsl(var(--cargus-orange))" }}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
