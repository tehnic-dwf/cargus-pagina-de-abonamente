import { useRef, useState } from "react";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    volume: "",
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [volumeError, setVolumeError] = useState(false);
  const volumeRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="cere-oferta" className="section-padding dark-section text-center">
        <CheckCircle2 size={48} className="text-cargus-success mx-auto mb-4" />
        <h2 className="section-heading !text-2xl">Mulțumim!</h2>
        <p className="text-base text-primary-foreground/70 mt-3">
          Am primit cererea ta. Un consultant Cargus te va contacta în maximum 24 de ore lucrătoare cu o ofertă personalizată.
        </p>
      </section>
    );
  }

  return (
    <section id="cere-oferta" className="section-padding dark-section">
      <div className="section-divider !bg-cargus-orange" />
      <h2 className="section-heading">Cere ofertă personalizată</h2>
      <p className="section-subheading !text-primary-foreground/70">
        Completează formularul și primești o ofertă adaptată nevoilor tale.
      </p>

      {/* Trust awards */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <span className="inline-flex items-center gap-1.5 text-[11px] text-primary-foreground/60 font-medium bg-primary-foreground/5 rounded-full px-3 py-1.5">
          🏆 #1 experiență clienți AI — Romanian Contact Center Awards 2025
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-primary-foreground/60 font-medium bg-primary-foreground/5 rounded-full px-3 py-1.5">
          🥈 Medalia de Argint EcoVadis
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-primary-foreground/60 font-medium bg-primary-foreground/5 rounded-full px-3 py-1.5">
          ✅ Certificare ISO 9001:2015
        </span>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Clock size={16} className="text-cargus-orange" />
        <span className="text-sm text-primary-foreground/70">Durează mai puțin de 2 minute</span>
      </div>

      {/* Progress */}
      <div className="flex gap-2 mt-6">
        {[0, 1].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-all ${
              s <= step ? "bg-cargus-orange" : "bg-primary-foreground/20"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-primary-foreground/50 mt-2">
        Pasul {step + 1} din 2
      </p>

      <div className="mt-6 space-y-4">
        {step === 0 && (
          <>
            <div ref={volumeRef}>
              <label className="block text-sm font-semibold text-primary-foreground mb-2">
                Câte colete trimiți pe lună?
              </label>
              <div className={`grid grid-cols-2 gap-3 rounded-xl transition-all ${volumeError ? "ring-2 ring-destructive ring-offset-2 ring-offset-[hsl(var(--cargus-dark))]" : ""}`}>
                {["1-30", "30-100", "100-300", "300+"].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setFormData({ ...formData, volume: v });
                      setVolumeError(false);
                    }}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all ${
                      formData.volume === v
                        ? "border-cargus-orange bg-cargus-orange/10 text-primary-foreground"
                        : "border-primary-foreground/20 text-primary-foreground/70 hover:border-primary-foreground/40"
                    }`}
                  >
                    {v} colete
                  </button>
                ))}
              </div>
              {volumeError ? (
                <p className="text-xs text-destructive font-semibold mt-2 animate-pulse">
                  ⚠ Te rugăm să selectezi numărul de colete pe lună.
                </p>
              ) : (
                <p className="text-xs text-primary-foreground/50 mt-2">
                  Ne ajută să calculăm cel mai bun tarif pentru tine.
                </p>
              )}
            </div>
            <button
              onClick={() => {
                if (!formData.volume) {
                  setVolumeError(true);
                  volumeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                } else {
                  setStep(1);
                }
              }}
              className="cta-primary w-full justify-center"
            >
              Continuă
              <ArrowRight size={18} />
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-1.5">
                Numele tău
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="ex: Ion Popescu"
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-cargus-orange transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@magazin.ro"
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-cargus-orange transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-1.5">
                Telefon
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="07XX XXX XXX"
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-cargus-orange transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(0)}
                className="cta-secondary !bg-transparent !border-primary-foreground/20 !text-primary-foreground/70 flex-1 justify-center"
              >
                Înapoi
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="cta-primary flex-[2] justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trimite cererea
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CTASection;
