import { ArrowRight } from "lucide-react";

const plans = [
  {
    id: "starter",
    volume: "Sub 30 colete/lună",
    name: "SIGN & GO",
    desc: "Fără contract, plătești per colet",
    cta: "Începe acum",
    ctaHref: "#cere-oferta",
    featured: false,
  },
  {
    id: "business",
    volume: "30–300 colete/lună",
    name: "ABONAMENT",
    desc: "Tarif fix lunar, manager dedicat de cont",
    cta: "Vezi planuri",
    ctaHref: "#cere-oferta",
    featured: true,
    badge: "Cel mai ales",
  },
  {
    id: "enterprise",
    volume: "Peste 300 colete/lună",
    name: "SOLUȚIE PERSONALIZATĂ",
    desc: "Ofertă la cerere, echipă dedicată",
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
        Fără costuri ascunse. Alege planul potrivit volumului tău.
      </p>

      <div className="mt-8 space-y-4">
        {plans.map((plan) => (
          <a
            key={plan.id}
            href={plan.ctaHref}
            className={`block rounded-2xl transition-all duration-200 active:scale-[0.98] ${
              plan.featured
                ? "border-2 bg-card shadow-card-hover"
                : "border bg-card shadow-card"
            }`}
            style={{
              borderColor: plan.featured
                ? "hsl(var(--cargus-orange))"
                : "hsl(var(--border))",
              padding: "20px 16px",
              minHeight: 44,
            }}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="badge-orange text-[11px] mb-2 inline-block">
                {plan.badge}
              </span>
            )}

            {/* L1: Volume — primary selection criterion */}
            <p
              className="font-semibold leading-tight"
              style={{
                fontSize: 17,
                color: "hsl(var(--foreground))",
              }}
            >
              {plan.volume}
            </p>

            {/* L2: Plan name — demoted label */}
            <p
              className="uppercase tracking-[0.06em] mt-2"
              style={{
                fontSize: 11,
                color: "hsl(var(--muted-foreground))",
              }}
            >
              {plan.name}
            </p>

            {/* L3: Description */}
            <p
              className="mt-3 leading-snug"
              style={{
                fontSize: 13,
                color: "hsl(var(--muted-foreground))",
              }}
            >
              {plan.desc}
            </p>

            {/* L4: CTA */}
            <span
              className="inline-flex items-center gap-1.5 mt-3 font-medium"
              style={{
                fontSize: 13,
                color: "hsl(var(--cargus-orange))",
              }}
            >
              {plan.cta}
              <ArrowRight size={15} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
