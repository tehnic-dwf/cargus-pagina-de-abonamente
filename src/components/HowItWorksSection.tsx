import { UserPlus, FileText, Truck, PackageCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserPlus,
    num: "01",
    title: "Înregistrează-te",
    desc: "Creează un cont sau cere o ofertă personalizată — durează sub 2 minute.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Generează AWB",
    desc: "Creează rapid un AWB online sau prin integrarea cu platforma ta e-commerce.",
  },
  {
    icon: Truck,
    num: "03",
    title: "Curierul ridică coletul",
    desc: "Programează ridicarea sau predă-l într-un punct SHIP & GO — tu alegi.",
  },
  {
    icon: PackageCheck,
    num: "04",
    title: "Urmărește & livrează",
    desc: "Tracking în timp real, notificări automate — clientul tău e mereu informat.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="cum-functioneaza" className="section-padding bg-background">
      <h2 className="section-heading">Cum funcționează?</h2>
      <p className="section-subheading">
        4 pași simpli de la înregistrare la livrare.
      </p>

      <div className="mt-8 space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 relative">
            {i < steps.length - 1 && (
              <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border" />
            )}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-12 h-12 rounded-full bg-cargus-orange flex items-center justify-center z-10">
                <step.icon size={20} className="text-primary-foreground" strokeWidth={2.5} />
              </div>
            </div>
            <div className="pb-8 min-w-0">
              <span className="text-xs font-bold text-cargus-orange uppercase tracking-wider">
                Pasul {step.num}
              </span>
              <h3 className="font-bold text-base text-foreground mt-0.5">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#cere-oferta"
        className="cta-primary w-full justify-center"
      >
        <span>Cere ofertă personalizată</span>
        <ArrowRight size={18} />
      </a>
    </section>
  );
};

export default HowItWorksSection;
