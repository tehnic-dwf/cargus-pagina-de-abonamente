import { ArrowRight } from "lucide-react";

const plans = [
  {
    id: "starter",
    volume: "Sub 30 colete/lună",
    name: "Sign & Go",
    desc: "Fără contract, plătești per colet",
    cta: "Începe acum",
    ctaHref: "#cere-oferta",
    featured: false,
  },
  {
    id: "business",
    volume: "30–300 colete/lună",
    name: "Abonament",
    desc: "Tarif fix lunar, manager dedicat de cont",
    cta: "Vezi planuri",
    ctaHref: "#cere-oferta",
    featured: true,
    badge: "Cel mai ales",
  },
  {
    id: "enterprise",
    volume: "Peste 300 colete/lună",
    name: "Soluție personalizată",
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
        Alege după volumul lunar de colete.
      </p>

      <div className="mt-8 space-y-4">
        {plans.map((plan) => (
          <a
            key={plan.id}
            href={plan.ctaHref}
            className="group block rounded-2xl transition-all duration-200 active:scale-[0.98]"
            style={{
              border: plan.featured
                ? "2px solid hsl(var(--cargus-orange))"
                : "1px solid hsl(var(--border))",
              background: "hsl(var(--card))",
              padding: "20px 16px",
              minHeight: 44,
              boxShadow: plan.featured
                ? "var(--shadow-card-hover)"
                : "var(--shadow-card)",
            }}
          >
            <style>{`
              .pricing-card-hover:hover {
                border-color: hsl(var(--cargus-orange)) !important;
                background: hsl(30 100% 98%) !important;
              }
            `}</style>

            {/* Badge */}
            {plan.badge && (
              <span className="badge-orange text-[11px] mb-3 inline-block">
                {plan.badge}
              </span>
            )}

            {/* Chip: plan name */}
            <div className="mb-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1"
                style={{
                  fontSize: 11,
                  color: "hsl(var(--muted-foreground))",
                  background: "hsl(var(--secondary))",
                }}
              >
                {plan.name}
              </span>
            </div>

            {/* L1: Volume — primary selection criterion */}
            <p
              className="font-bold leading-tight"
              style={{
                fontSize: plan.featured ? 22 : 20,
                color: "hsl(var(--foreground))",
              }}
            >
              {plan.volume}
            </p>

            {/* Separator */}
            <div
              className="my-3"
              style={{
                height: 1,
                background: "hsl(var(--cargus-orange) / 0.4)",
              }}
            />

            {/* L3: Description */}
            <p
              className="leading-snug"
              style={{
                fontSize: 13,
                color: "hsl(var(--muted-foreground))",
              }}
            >
              {plan.desc}
            </p>

            {/* L4: CTA */}
            <span
              className="inline-flex items-center gap-1.5 mt-3"
              style={{
                fontSize: plan.featured ? 14 : 13,
                fontWeight: plan.featured ? 600 : 500,
                color: "hsl(var(--cargus-orange))",
              }}
            >
              {plan.cta}
              <ArrowRight size={plan.featured ? 16 : 15} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
