import { Phone, Mail, MapPin } from "lucide-react";
import cargusLogo from "@/assets/cargus-logo.svg";

const FooterSection = () => {
  return (
    <footer id="contact" className="section-padding bg-foreground text-primary-foreground">
      <div className="flex items-start gap-4 mb-8">
        <img src={cargusLogo} alt="Cargus" className="h-12 w-auto brightness-0 invert" />
        <div>
          <p className="text-sm font-bold">Navighează pe calea succesului cu Cargus.</p>
          <p className="text-xs text-primary-foreground/60 mt-1">30+ ani de experiență în curierat</p>
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-4 mb-8">
        <h3 className="font-bold text-sm uppercase tracking-wider text-primary-foreground/60">Contact</h3>
        <a href="tel:+40213085200" className="flex items-center gap-3 text-sm">
          <Phone size={18} className="text-cargus-orange shrink-0" />
          <span>021 308 52 00</span>
        </a>
        <a href="mailto:antreprenori@cargus.ro" className="flex items-center gap-3 text-sm">
          <Mail size={18} className="text-cargus-orange shrink-0" />
          <span>antreprenori@cargus.ro</span>
        </a>
        <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
          <MapPin size={18} className="text-cargus-orange shrink-0 mt-0.5" />
          <span>Luni-Vineri: 8:30-17:00</span>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-primary-foreground/60 mb-3">Cargus</h3>
          <ul className="space-y-2.5">
            {["Despre noi", "Cariere", "Contact", "Regulamente"].map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-primary-foreground/60 mb-3">Utile</h3>
          <ul className="space-y-2.5">
            {["Urmărește un colet", "Găsește SHIP & GO", "Întrebări frecvente", "Devino curier"].map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-primary-foreground/10 pt-6">
        <p className="text-xs text-primary-foreground/40 leading-relaxed">
          © 2026 Cargus SRL. Toate drepturile rezervate. ANCOM Nr. 1234/2006.
        </p>
        <div className="flex flex-wrap gap-4 mt-3">
          {["Termeni și condiții", "Politica de confidențialitate", "Cookies"].map((l) => (
            <a key={l} href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
