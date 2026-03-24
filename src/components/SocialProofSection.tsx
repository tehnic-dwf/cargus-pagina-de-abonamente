import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maria D.",
    business: "Magazin online de cosmetice",
    text: "De când am trecut la Cargus, rata de returnare a scăzut cu 15%. Clienții mei apreciază livrarea rapidă și opțiunile flexibile de ridicare.",
    rating: 5,
  },
  {
    name: "Andrei P.",
    business: "Shop de haine streetwear",
    text: "Folosesc SHIP & GO pentru 80% din comenzi. Costurile sunt mai mici și clienții adoră că pot ridica când vor ei. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Elena S.",
    business: "Librărie online",
    text: "Suportul dedicat face diferența. Am un account manager care mă ajută mereu — nu mai sunt doar un număr de cont ca la alți curieri.",
    rating: 5,
  },
];

const SocialProofSection = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary">
      <h2 className="section-heading">Ce spun antreprenorii</h2>

      {/* Rating summary */}
      <div className="info-card mt-6 flex items-center gap-4">
        <div className="text-center shrink-0">
          <div className="text-4xl font-black text-foreground">4.8</div>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-cargus-orange text-cargus-orange" />
            ))}
          </div>
        </div>
        <div className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-bold text-foreground">40.805 recenzii</span> verificate pe eKomi.
        </div>
      </div>

      {/* Single testimonial with navigation */}
      <div className="mt-5 info-card relative">
        <Quote size={20} className="text-cargus-orange mb-3" />
        <p className="text-sm text-foreground leading-relaxed italic min-h-[72px]">"{t.text}"</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="font-bold text-sm text-foreground">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.business}</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Precedent"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrent((current + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Următor"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-cargus-orange" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <div className="text-center">
          <div className="text-2xl font-black text-foreground">30+</div>
          <div className="text-xs text-muted-foreground">ani experiență</div>
        </div>
        <div className="w-px h-10 bg-border" />
        <div className="text-center">
          <div className="text-2xl font-black text-foreground">50.000+</div>
          <div className="text-xs text-muted-foreground">clienți business</div>
        </div>
        <div className="w-px h-10 bg-border" />
        <div className="text-center">
          <div className="text-2xl font-black text-foreground">13.500+</div>
          <div className="text-xs text-muted-foreground">localități acoperite</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
