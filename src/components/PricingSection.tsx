import { useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  volume: string;
  bonus: string;
  desc: string;
  price: number;
  discount: string;
  extraColet: string;
  extra31: string;
  clickCollect: string;
  ramburs: string;
  featured?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    id: "mini20",
    name: "Mini Business 20",
    volume: "Până la 20",
    bonus: "+ 2 BONUS",
    desc: "Conceput pentru companiile care fac primul pas în afaceri",
    price: 299,
    discount: "75,1%",
    extraColet: "14,95 lei",
    extra31: "9,90 lei",
    clickCollect: "11,80 lei",
    ramburs: "2,50 lei",
  },
  {
    id: "multi50",
    name: "Multi Business 50",
    volume: "Până la 50",
    bonus: "+ 5 BONUS",
    desc: "Conceput pentru companiile care încep să crească",
    price: 725,
    discount: "75,8%",
    extraColet: "14,50 lei",
    extra31: "9,60 lei",
    clickCollect: "11,30 lei",
    ramburs: "2,20 lei",
  },
  {
    id: "maxi100",
    name: "Maxi Business 100",
    volume: "Până la 100",
    bonus: "+ 10 BONUS",
    desc: "Pentru activități de comerț electronic cu experiență",
    price: 1439,
    discount: "76%",
    extraColet: "14,39 lei",
    extra31: "9,30 lei",
    clickCollect: "10,80 lei",
    ramburs: "2,00 lei",
    featured: true,
    badge: "Cel mai ales",
  },
  {
    id: "biz200",
    name: "Business 200",
    volume: "Până la 200",
    bonus: "+ 20 BONUS",
    desc: "Pentru activități de comerț electronic constante",
    price: 2720,
    discount: "77,3%",
    extraColet: "13,60 lei",
    extra31: "9,00 lei",
    clickCollect: "10,30 lei",
    ramburs: "1,50 lei",
  },
  {
    id: "biz300",
    name: "Business 300",
    volume: "Până la 300",
    bonus: "+ 30 BONUS",
    desc: "Pentru volume mari și activități de comerț electronic la scară",
    price: 3997,
    discount: "77,8%",
    extraColet: "13,32 lei",
    extra31: "9,00 lei",
    clickCollect: "10,30 lei",
    ramburs: "1,50 lei",
  },
];

const sharedIncluded = [
  "Preț fix pe durata contractului (12 luni)",
  "Fără taxe suplimentare de combustibil",
  "Fără taxe pentru localități în afara ariei de acoperire",
  "Fără costuri variabile în funcție de greutate",
  "Un contract pentru toate expedițiile",
  "Notificări gratuite către destinatari",
  "Facturare lunară cu termen de plată relaxat",
  "Vizibilitate 24/7 asupra expedierilor",
  "Suport gratuit la integrare cu diverse platforme",
  "Manager de cont alocat",
];

const PricingSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="preturi" className="section-padding bg-secondary">
      <div className="section-divider" />
      <h2 className="section-heading uppercase">Abonamente lunare</h2>
      <p className="section-subheading">
        Plan pe 12 luni. Alege volumul potrivit pentru afacerea ta.
      </p>

      <div className="mt-8 space-y-5">
        {plans.map((plan) => {
          const isOpen = openId === plan.id;
          return (
            <div
              key={plan.id}
              className={[
                "relative rounded-2xl bg-card transition-all duration-200",
                plan.featured ? "border-2 border-cargus-orange" : "border border-border",
              ].join(" ")}
              style={{
                padding: plan.featured ? "22px 18px 18px" : "18px 16px",
                boxShadow: plan.featured
                  ? "0 12px 32px -8px hsl(var(--cargus-orange) / 0.35), 0 2px 8px hsl(0 0% 0% / 0.06)"
                  : "var(--shadow-card)",
              }}
            >
              {plan.featured && plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap text-primary-foreground"
                  style={{
                    background: "hsl(var(--cargus-orange))",
                    boxShadow: "0 2px 8px hsl(var(--cargus-orange) / 0.4)",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name chip */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold text-muted-foreground bg-secondary">
                  {plan.name}
                </span>
                <span className="text-[10px] font-bold text-cargus-orange">
                  {plan.discount} reducere
                </span>
              </div>

              {/* Volume + bonus */}
              <div className="mt-3">
                <p className="text-[11px] text-muted-foreground font-medium">
                  Număr lunar de colete
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <p
                    className="font-extrabold leading-none text-foreground"
                    style={{ fontSize: plan.featured ? 30 : 26 }}
                  >
                    {plan.volume}
                  </p>
                  <span className="text-[11px] font-bold text-cargus-success">
                    {plan.bonus}
                  </span>
                </div>
              </div>

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

              <p className="text-[12px] leading-snug text-muted-foreground">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[28px] font-extrabold text-foreground leading-none">
                  {plan.price.toLocaleString("ro-RO")}
                </span>
                <span className="text-[14px] font-bold text-foreground">lei</span>
                <span className="text-[11px] text-muted-foreground ml-1">
                  / lună
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Preț fără TVA · 12 luni
              </p>

              {/* Top 3 highlights (always visible) */}
              <ul className="mt-4 space-y-1.5">
                {[
                  `${plan.extraColet} / colet extra (până la 15 kg)`,
                  `${plan.clickCollect} pentru Click & Collect`,
                  `${plan.ramburs} ramburs prin cont colector`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="w-[6px] h-[6px] rounded-full bg-cargus-success inline-block shrink-0 mt-1.5" />
                    <span className="text-[12px] text-foreground/85 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.featured ? (
                <a
                  href="#cere-oferta"
                  className="flex items-center justify-center gap-1.5 mt-5 w-full rounded-lg text-primary-foreground font-bold text-[14px] uppercase tracking-wide"
                  style={{
                    background: "hsl(var(--cargus-orange))",
                    padding: "12px",
                    minHeight: 48,
                  }}
                >
                  Alege
                  <ArrowRight size={16} />
                </a>
              ) : (
                <a
                  href="#cere-oferta"
                  className="flex items-center justify-center gap-1.5 mt-5 w-full rounded-lg font-semibold text-[14px] border-2 transition-colors"
                  style={{
                    borderColor: "hsl(var(--border))",
                    color: "hsl(var(--foreground))",
                    padding: "10px",
                    minHeight: 48,
                  }}
                >
                  Alege
                  <ArrowRight size={16} />
                </a>
              )}

              {/* Expand */}
              <button
                onClick={() => setOpenId(isOpen ? null : plan.id)}
                className="w-full mt-3 flex items-center justify-center gap-1 text-[12px] font-semibold text-cargus-orange py-2"
                aria-expanded={isOpen}
              >
                {isOpen ? "Vezi mai puține detalii" : "Vezi toate detaliile"}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="mt-2 pt-3 border-t border-border space-y-1.5">
                  <div className="flex justify-between text-[12px] py-1">
                    <span className="text-muted-foreground">
                      Colete 16-31 kg
                    </span>
                    <span className="font-semibold text-foreground">
                      {plan.extra31}
                    </span>
                  </div>
                  {sharedIncluded.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-1.5 py-0.5"
                    >
                      <Check
                        size={13}
                        className="text-cargus-success shrink-0 mt-0.5"
                        strokeWidth={3}
                      />
                      <span className="text-[12px] text-foreground/85 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-muted-foreground text-center mt-6">
        Prețurile afișate nu includ TVA.
      </p>
    </section>
  );
};

export default PricingSection;
