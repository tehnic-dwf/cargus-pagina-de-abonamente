import { Truck, MapPin, Eye, ArrowLeftRight, Banknote, Headphones } from "lucide-react";

const benefits = [
  { icon: Truck, text: "Livrare în 24-48h", detail: "98% din colete" },
  { icon: MapPin, text: "3.000+ puncte SHIP & GO", detail: "Rețea națională" },
  { icon: Eye, text: "Tracking în timp real", detail: "Notificări automate" },
  { icon: ArrowLeftRight, text: "Retur simplificat", detail: "Opțiuni flexibile" },
  { icon: Banknote, text: "Plată ramburs inclus", detail: "Fără costuri extra" },
  { icon: Headphones, text: "Suport dedicat business", detail: "Luni-Vineri" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficii" className="section-padding !py-10 bg-secondary">
      <h2 className="section-heading !text-xl">De ce aleg antreprenorii Cargus?</h2>

      <ul className="mt-6 space-y-3">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-3.5 bg-card rounded-xl px-4 py-3 shadow-card">
            <div className="w-9 h-9 rounded-lg bg-cargus-orange-light flex items-center justify-center shrink-0">
              <b.icon size={18} className="text-cargus-orange" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <span className="font-bold text-[14px] text-foreground">{b.text}</span>
              <span className="text-xs text-muted-foreground ml-1.5">— {b.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BenefitsSection;
