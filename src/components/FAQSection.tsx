import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Cum pot avea tarife mici dacă nu am expedieri lunare constante?",
    a: "Poți alege între mai multe opțiuni, precum oferta Mini Business care are un număr minim de colete declarate. Ești liber să alegi tipul de abonament care se potrivește nevoilor tale. În plus, poți reporta toate expedierile neutilizate într-o lună și le folosești atunci când ai nevoie.",
  },
  {
    q: "Ce se întâmplă dacă depășesc numărul de expedieri?",
    a: "Nu îți face griji. Poți trimite în continuare colete conform schemei de preț aferentă abonamentului. Toate transporturile sau serviciile suplimentare folosite vor fi facturate lunar, la același preț competitiv.",
  },
  {
    q: "Am mulți clienți din mediul rural. Abonamentul include cost 0 pentru expedieri în aceste zone?",
    a: "Da. Pentru prima dată, apropiem orașele și oamenii prin scurtarea distanței și cost 0 pentru expedieri în afara ariei de acoperire Cargus. Fără costuri suplimentare, uită de stresul destinației.",
  },
  {
    q: "Cum aleg abonamentul potrivit pentru mine?",
    a: "Alege dintre mai multe opțiuni, fiecare făcută special pentru nevoile tale. Dacă abia începi să explorezi lumea curieratului, încearcă mai întâi un abonament cu mai puține expedieri lunare. Dacă ești un expeditor cu experiență, alege abonamentul de 300 expedieri lunare și beneficiezi de prețuri și mai competitive.",
  },
  {
    q: "Cine ar trebui să folosească contract tip abonament?",
    a: "Abonamentul este destinat companiilor mici și mijlocii care vor predictibilitate, tarife fixe și beneficii incluse fără negocieri lunare.",
  },
  {
    q: "Ce se întâmplă dacă nu folosesc toate expedierile dintr-o lună?",
    a: "Toate expedierile lunare nefolosite vor fi reportate, astfel încât să le poți folosi atunci când ai nevoie.",
  },
  {
    q: "Pot alege un plan superior mai târziu?",
    a: "Da, poți alege un plan superior oricând sau poți păstra abonamentul existent și vei avea expedieri suplimentare la prețuri speciale.",
  },
  {
    q: "Ce opțiuni de plată sunt disponibile?",
    a: "Factura se emite lunar, cu o scadență la 14 zile.",
  },
  {
    q: "Sunt costuri suplimentare în funcție de destinație?",
    a: "Nu, nu există costuri suplimentare în funcție de destinație la niciunul dintre abonamentele din ofertă.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="section-divider" />
      <h2 className="section-heading uppercase">Întrebări frecvente</h2>
      <p className="section-subheading">
        Răspunsuri rapide la cele mai comune întrebări despre abonamente.
      </p>

      <Accordion type="single" collapsible className="mt-6">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-border"
          >
            <AccordionTrigger className="text-left text-[14px] font-bold text-foreground py-4 hover:no-underline">
              <span className="flex gap-2">
                <span className="text-cargus-orange shrink-0">{i + 1}.</span>
                <span>{faq.q}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[13px] text-muted-foreground leading-relaxed pb-4 pl-6">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
