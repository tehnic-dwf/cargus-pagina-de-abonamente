import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ce tipuri de colete pot trimite prin Cargus?",
    a: "Poți trimite colete standard (până la 31.5 kg), plicuri, colete voluminoase și paleți. Acceptăm o gamă largă de dimensiuni — contactează-ne pentru detalii specifice despre categorii restricționate.",
  },
  {
    q: "Care sunt zonele de livrare și tarifele pe zone?",
    a: "Cargus livrează în toată România, cu acoperire completă. Tarifele variază în funcție de greutate, dimensiune și zonă — cu planul Abonament Complet, beneficiezi de un preț fix care include toate zonele.",
  },
  {
    q: "Cum funcționează rambursul (plata la livrare)?",
    a: "Oferim serviciu de ramburs inclus în toate planurile. Sumele colectate sunt virate în contul tău bancar în 1-3 zile lucrătoare. Poți seta valoarea rambursului pe fiecare AWB.",
  },
  {
    q: "Ce se întâmplă dacă un colet se pierde sau se deteriorează?",
    a: "Fiecare colet este asigurat standard. În cazuri rare de pierdere sau deteriorare, procesul de despăgubire este simplu — completezi un formular și echipa noastră se ocupă de restul în maximum 30 de zile.",
  },
  {
    q: "Cum integrez Cargus cu platforma mea e-commerce?",
    a: "Oferim integrări native cu Shopify, WooCommerce, Magento, PrestaShop și alte platforme populare. De asemenea, API-ul nostru permite integrări personalizate. Suportul tehnic te ajută cu setup-ul.",
  },
  {
    q: "Pot schimba sau anula planul oricând?",
    a: "Da, planul Sign & Go nu are perioadă minimă — poți opri oricând. Pentru Abonamentul Complet, perioada minimă este de 12 luni, cu posibilitatea de upgrade pe parcurs.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
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
