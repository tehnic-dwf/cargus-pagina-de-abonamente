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
            className={[
              "group block rounded-2xl transition-all duration-200 active:scale-[0.98]",
              plan.featured
                ? "border-2 border-cargus-orange bg-card shadow-card-hover"
                : "border border-border bg-card shadow-card hover:border-cargus-orange hover:bg-[hsl(30,100%,98%)]",
            ].join(" ")}
            style={{ padding: "20px 16px", minHeight: 44 }}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="badge-orange text-[11px] mb-3 inline-block">
                {plan.badge}
              </span>
            )}

            {/* Chip: plan name */}
            <div className="mb-2">
              <span className="inline-flex items-center rounded-md px-2.5 py-1 text-[11px] text-muted-foreground bg-secondary">
                {plan.name}
              </span>
            </div>

            {/* Volume — primary selection criterion */}
            <p
              className="font-bold leading-tight text-foreground"
              style={{ fontSize: plan.featured ? 22 : 20 }}
            >
              {plan.volume}
            </p>

            {/* Separator */}
            <div
              className="my-3 h-px"
              style={{ background: "hsl(var(--cargus-orange) / 0.4)" }}
            />

            {/* Description */}
            <p className="text-[13px] leading-snug text-muted-foreground">
              {plan.desc}
            </p>

            {/* CTA */}
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
