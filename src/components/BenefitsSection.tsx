import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, Receipt, MapPin, CreditCard, RotateCcw } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Garanția prețului (*)",
    desc: "Costul abonamentului nu se modifică pe durata celor 12 luni de contract. Afacerea ta crește și vei avea mai multe expedieri? Fără griji, poți trece oricând la un abonament mai mare. Sau poți rămâne cu același abonament și vei beneficia de prețuri speciale pentru expedierile extra.",
  },
  {
    icon: Receipt,
    title: "Fără taxe ascunse sau variabile",
    desc: "În cadrul unei sume fixe tip abonament, vei putea trimite 20, 50, 100, 200 sau 300 de colete cu greutate până la 31 kg. Nu vei fi obligat să declari cantitatea lunară sau să-ți faci griji pentru fluctuații sezoniere. În plus, poți reporta expedierile neutilizate într-o lună și le folosești când ai nevoie.",
  },
  {
    icon: CreditCard,
    title: "Formă de plată convenabilă",
    desc: "Fără bătăi de cap cu plata facturilor către curier. Pentru toate expedierile prin Cargus ai doar o factură lunară cu data scadentă la 14 zile.",
  },
  {
    icon: MapPin,
    title: "Livrare SHIP & GO de la 10,3 RON",
    desc: "Crește satisfacția cumpărătorilor și numărul de comenzi oferind clienților posibilitatea de a alege ca adresă de destinație unul din punctele Cargus SHIP & GO, chiar din momentul plasării comenzii. Prețul de transport scade până la 10,3 lei dacă un client selectează ca adresă de livrare un punct SHIP & GO din proximitate.",
  },
  {
    icon: RotateCcw,
    title: "Cost redus pentru retur",
    desc: "Costuri reduse pentru retururile de la consumator — doar 11 lei pe colet returnat.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficii" className="section-padding bg-background">
      <div className="section-divider" />
      <h2 className="section-heading uppercase">Descoperă beneficiile</h2>
      <h3 className="text-base font-bold text-foreground mt-4 uppercase tracking-wide">
        Scut anti-inflație pentru afacerea ta
      </h3>
      <p className="section-subheading">
        Afacerea ta merită un partener de livrări pe măsură. Cargus îți oferă
        livrări rapide, sigure, transparență și instrumente utile pentru
        eficientizarea proceselor de expediere. Tu trebuie doar să te ocupi de
        dezvoltarea afacerii.
      </p>

      <Accordion type="single" collapsible className="mt-6" defaultValue="b-0">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <AccordionItem
              key={i}
              value={`b-${i}`}
              className="border-border rounded-xl bg-card mb-2.5 px-4 border"
            >
              <AccordionTrigger className="hover:no-underline py-3.5">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0 rounded-lg bg-cargus-orange-light">
                    <Icon
                      size={18}
                      className="text-cargus-orange"
                      strokeWidth={2.4}
                    />
                  </div>
                  <span className="text-[14px] font-bold text-foreground">
                    {b.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[13px] text-muted-foreground leading-relaxed pb-4 pl-12">
                {b.desc}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <p className="text-[10px] text-muted-foreground/70 mt-4 leading-relaxed">
        * Sub rezerva modificărilor Condițiilor Generale de Furnizare a
        Serviciilor Poștale aprobate de ANCOM și ale Termenilor și Condițiilor
        Cargus, publicate pe www.cargus.ro
      </p>
    </section>
  );
};

export default BenefitsSection;
