import { Send, PackageOpen, ArrowLeftRight, Building2, Globe, Zap } from "lucide-react";

const services = [
  { icon: Send, title: "Standard & Express", desc: "Livrare la adresă în 24-48h sau same-day", tag: "Popular" },
  { icon: PackageOpen, title: "Locker & SHIP & GO", desc: "3.000+ puncte de ridicare naționale" },
  { icon: ArrowLeftRight, title: "Retur & Schimb", desc: "Proces simplificat de returnare" },
  { icon: Building2, title: "Marfă & Volum mare", desc: "Colete mari, paleți și logistică" },
  { icon: Globe, title: "Internațional", desc: "Livrări în Europa și worldwide" },
  { icon: Zap, title: "Same-Day", desc: "Livrare în aceeași zi în orașe mari" },
];

const ServicesSection = () => {
  return (
    <section id="servicii" className="section-padding !py-10 bg-secondary">
      <h2 className="section-heading !text-xl">Servicii disponibile</h2>
      <p className="text-sm text-muted-foreground mt-1">Gama completă de soluții de curierat.</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {services.map((s, i) => (
          <div key={i} className="info-card !p-4 relative">
            {s.tag && (
              <span className="badge-orange absolute top-2.5 right-2.5 !text-[9px] !px-2 !py-0.5">{s.tag}</span>
            )}
            <div className="w-8 h-8 rounded-lg bg-cargus-orange-light flex items-center justify-center mb-4">
              <s.icon size={16} className="text-cargus-orange" strokeWidth={2.5} />
            </div>
            <h3 className="font-bold text-[13px] text-foreground leading-tight">{s.title}</h3>
            <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
