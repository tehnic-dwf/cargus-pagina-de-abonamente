import { Zap, MapPin, Banknote, Eye, ArrowLeftRight, Headphones, UserCheck, CreditCard, ShoppingCart, Puzzle, RotateCcw } from "lucide-react";

const primaryBenefits = [
  {
    icon: Zap,
    title: "Livrare în 24-48h",
    desc: "96% din colete ajung la timp. Garanție de performanță.",
  },
  {
    icon: MapPin,
    title: "3.000+ puncte SHIP & GO",
    desc: "Clienții tăi ridică coletul de lângă ei, din lockere și puncte.",
  },
  {
    icon: Banknote,
    title: "Ramburs fără costuri extra",
    desc: "Banii ajung la tine automat, inclus în tarif.",
  },
  {
    icon: ShoppingCart,
    title: "Integrare e-commerce",
    desc: "Plugin-uri native WooCommerce, PrestaShop, Magento, OpenCart.",
  },
  {
    icon: CreditCard,
    title: "Plăți moderne la livrare",
    desc: "Cash, card la curier, Google Pay, Apple Pay — clientul alege.",
  },
];

const secondaryBenefits = [
  { icon: Eye, text: "Tracking real-time" },
  { icon: ArrowLeftRight, text: "Retur simplificat" },
  { icon: Headphones, text: "Suport business" },
  { icon: UserCheck, text: "Manager dedicat" },
  { icon: Puzzle, text: "Widget checkout gratuit" },
  { icon: ArrowRight, text: "2 încercări de livrare" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficii" className="section-padding !pt-8 !pb-10 bg-background">
      <h2 className="section-heading !text-xl">De ce aleg antreprenorii Cargus?</h2>

      {/* Primary benefits */}
      <ul className="mt-6 space-y-5">
        {primaryBenefits.map((b, i) => (
          <li key={i} className="flex items-start gap-3.5 px-4">
            <div
              className="w-9 h-9 flex items-center justify-center shrink-0 rounded-lg bg-foreground"
            >
              <b.icon size={16} className="text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[14px] text-foreground">{b.title}</p>
              <p className="text-[13px] text-muted-foreground mt-0.5 leading-snug">{b.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Secondary benefits grid */}
      <div className="grid grid-cols-2 gap-2.5 mt-6 px-4">
        {secondaryBenefits.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-lg bg-secondary px-3 py-2.5"
          >
            <div className="w-7 h-7 flex items-center justify-center shrink-0 rounded-md bg-cargus-orange-light">
              <b.icon size={14} className="text-cargus-orange" strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-semibold text-foreground">{b.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
