import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Sign & Go",
    subtitle: "Prepaid — fără contract",
    desc: "Ideal pentru antreprenori la început.",
    price: "de la 11,50 LEI",
    priceSuffix: "/ colet",
    features: [
      "Fără contract sau perioadă minimă",
      "3.000+ puncte SHIP & GO",
      "Tracking în timp real",
      "Plată la livrare inclus",
      "Generare AWB online",
    ],
    cta: "Începe acum",
    ctaHref: "#cere-oferta",
  },
  {
    id: "business",
    name: "Abonament Complet",
    subtitle: "30-300 colete / lună",
    desc: "Preț fix, fără surprize. Cel mai popular.",
    price: "Preț personalizat",
    priceSuffix: "bazat pe volum",
    features: [
      "Preț fix pe durata contractului",
      "Ridicare de la adresă inclusă",
      "Account manager dedicat",
      "Integrare e-commerce",
      "Retur simplificat",
      "Protecție anti-inflație",
    ],
    cta: "Cere ofertă",
    ctaHref: "#cere-oferta",
  },
  {
    id: "enterprise",
    name: "Personalizat",
    subtitle: "300+ colete / lună",
    desc: "Soluție la cheie cu tarife negociate.",
    price: "Tarif negociat",
    priceSuffix: "contactează-ne",
    features: [
      "Tarife negociate pe volum",
      "SLA-uri personalizate",
      "Integrare API completă",
      "Manager logistic dedicat",
      "Facturare flexibilă",
    ],
    cta: "Contactează-ne",
    ctaHref: "#contact",
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("business");
  const activePlan = plans.find((p) => p.id === activeTab)!;

  return (
    <section id="preturi" className="section-padding bg-secondary">
      <h2 className="section-heading">Planuri & Prețuri</h2>
      <p className="section-subheading">
        Fără costuri ascunse. Alege planul potrivit volumului tău.
      </p>

      {/* Tabs */}
      <div className="mt-6 flex rounded-xl bg-background p-1 shadow-card">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setActiveTab(plan.id)}
            className={`flex-1 py-2.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === plan.id
                ? "bg-cargus-orange text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Volume indicator row */}
      <div className="flex rounded-b-xl -mt-1 px-1">
        {[
          { label: "< 30 colete/lună" },
          { label: "30–300 colete/lună" },
          { label: "300+ colete/lună" },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex-1 text-center py-1.5 text-[10px] font-semibold transition-colors duration-200 ${
              activeTab === plans[i].id
                ? "text-cargus-orange"
                : "text-muted-foreground"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Active plan card */}
      <div className="mt-5 rounded-2xl p-6 border-2 border-cargus-orange bg-card shadow-card-hover">
        {activeTab === "business" && (
          <span className="badge-orange text-[11px] mb-3 inline-block">Recomandat</span>
        )}
        <h3 className="font-extrabold text-lg text-foreground">{activePlan.name}</h3>
        <p className="text-xs font-semibold text-cargus-orange mt-0.5 uppercase tracking-wider">
          {activePlan.subtitle}
        </p>
        <p className="text-sm text-muted-foreground mt-2">{activePlan.desc}</p>

        <div className="mt-4 pb-4 border-b border-border">
          <div className="text-2xl font-black text-foreground">{activePlan.price}</div>
          <div className="text-xs text-muted-foreground">{activePlan.priceSuffix}</div>
        </div>

        <ul className="mt-4 space-y-3">
          {activePlan.features.map((f, fi) => (
            <li key={fi} className="flex items-start gap-2.5">
              <Check size={18} className="text-cargus-success shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-sm text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={activePlan.ctaHref}
          className="cta-primary w-full justify-center mt-6"
        >
          <span>{activePlan.cta}</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default PricingSection;
