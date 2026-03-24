import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ce tipuri de colete pot trimite prin Cargus?",
    a: "Poți trimite colete standard (până la 31.5 kg), plicuri, colete voluminoase și paleți. Acoperim o gamă completă: Click & Collect, Standard, Standard 31+ și Standard 50+.",
  },
  {
    q: "Care sunt zonele de livrare și tarifele pe zone?",
    a: "Cargus livrează în toată România — peste 13.500 de localități. Cu planul Abonament, beneficiezi de un preț fix care include toate zonele. Livrăm și internațional în Bulgaria și Grecia.",
  },
  {
    q: "Cum funcționează rambursul (plata la livrare)?",
    a: "Oferim serviciu de ramburs inclus în toate planurile. Sumele colectate sunt virate în contul tău bancar în 1-3 zile lucrătoare. Poți seta valoarea rambursului pe fiecare AWB.",
  },
  {
    q: "Ce metode de plată acceptă curierul?",
    a: "Clienții tăi pot plăti cash, cu cardul la curier, online, prin Google Pay sau Apple Pay. Oferim cele mai moderne opțiuni de plată pentru o experiență completă.",
  },
  {
    q: "Ce se întâmplă dacă un colet se pierde sau se deteriorează?",
    a: "Fiecare colet este asigurat standard. În cazuri rare de pierdere sau deteriorare, procesul de despăgubire este simplu — completezi un formular și echipa noastră se ocupă de restul în maximum 30 de zile.",
  },
  {
    q: "Cum integrez Cargus cu platforma mea e-commerce?",
    a: "Oferim plugin-uri native pentru WooCommerce, PrestaShop, Magento și OpenCart. API-ul nostru permite integrări personalizate, plus un widget gratuit pentru checkout cu puncte și lockere SHIP & GO.",
  },
  {
    q: "Livrați și internațional?",
    a: "Da, Cargus oferă livrări internaționale din România către Bulgaria și Grecia, cu extindere planificată către alte destinații.",
  },
  {
    q: "Pot schimba sau anula planul oricând?",
    a: "Da, planul Sign & Go nu are perioadă minimă — poți opri oricând. Pentru Abonament, perioada minimă este de 12 luni, cu posibilitatea de upgrade pe parcurs.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <h2 className="section-heading">Întrebări frecvente</h2>
      <p className="section-subheading">
        Răspunsuri rapide la cele mai comune întrebări ale antreprenorilor.
      </p>

      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-sm font-bold text-foreground py-4 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
