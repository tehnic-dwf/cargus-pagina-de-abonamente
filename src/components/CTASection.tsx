import { useRef, useState } from "react";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    volume: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    gdpr: false,
    marketing: false,
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
          Am primit solicitarea ta. Un consultant Cargus te va contacta în maximum 24 de ore lucrătoare cu oferta specială pe bază de abonament.
        </p>
      </section>
    );
  }

  return (
    <section id="cere-oferta" className="section-padding dark-section">
      <div className="section-divider !bg-cargus-orange" />
      <p className="text-[11px] tracking-[0.18em] uppercase font-bold text-cargus-orange mb-2">
        Depășești orice așteptare, nu termene de livrare
      </p>
      <h2 className="section-heading">
        Solicită oferta specială Cargus pe bază de abonament!
      </h2>
      <p className="section-subheading !text-primary-foreground/70">
        Îți oferim extra colete pentru extra succes. Completează datele și primești oferta adaptată afacerii tale.
      </p>

      {/* Trust awards */}
      <div className="flex flex-col gap-1.5 mt-4">
        {[
          "#1 experiență clienți AI — Romanian Contact Center Awards 2025",
          "Medalia de Argint EcoVadis",
          "Certificare ISO 9001:2015",
        ].map((item) => (
          <div key={item} className="flex items-center gap-1.5">
            <span className="w-[6px] h-[6px] rounded-full bg-cargus-success inline-block shrink-0" />
            <span className="text-[11px] text-primary-foreground/60 font-medium">{item}</span>
          </div>
        ))}
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

            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-2">
                Servicii dorite*
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["National", "International", "Ambele"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setFormData({ ...formData, service: s })}
                    className={`py-2.5 px-2 rounded-xl text-xs font-semibold border-2 transition-all ${
                      formData.service === s
                        ? "border-cargus-orange bg-cargus-orange/10 text-primary-foreground"
                        : "border-primary-foreground/20 text-primary-foreground/70 hover:border-primary-foreground/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
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
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-primary-foreground mb-1.5">
                  Prenume*
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Ion"
                  className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-cargus-orange transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary-foreground mb-1.5">
                  Nume*
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Popescu"
                  className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-cargus-orange transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-foreground mb-1.5">
                Email*
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
                Telefon*
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="07XX XXX XXX"
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-cargus-orange transition-colors"
              />
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.gdpr}
                onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                className="mt-0.5 w-4 h-4 accent-cargus-orange shrink-0"
              />
              <span className="text-[11px] leading-relaxed text-primary-foreground/60">
                Sunt de acord cu procesarea datelor personale de către Cargus SRL în scopul transmiterii de comunicări comerciale, conform{" "}
                <a
                  href="https://www.cargus.ro/politica-de-prelucrare-a-datelor-cu-caracter-personal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cargus-orange underline"
                >
                  Politicii de prelucrare a datelor cu caracter personal
                </a>
                .
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.marketing}
                onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
                className="mt-0.5 w-4 h-4 accent-cargus-orange shrink-0"
              />
              <span className="text-[11px] leading-relaxed text-primary-foreground/60">
                Doresc să primesc oferta Cargus pentru companii.
              </span>
            </label>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(0)}
                className="cta-secondary !bg-transparent !border-primary-foreground/20 !text-primary-foreground/70 flex-1 justify-center"
              >
                Înapoi
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.gdpr}
                className="cta-primary flex-[2] justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trimite solicitarea
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="text-[10px] text-primary-foreground/40 text-center pt-1">
              * Ofertă valabilă conform termenilor afișați pe cargus.ro
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default CTASection;
