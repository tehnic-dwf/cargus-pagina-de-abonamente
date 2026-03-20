import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import cargusLogo from "@/assets/cargus-logo.svg";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background shadow-sticky" : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16">
          <a href="#" aria-label="Cargus Acasă">
            <img src={cargusLogo} alt="Cargus" className="h-10 w-auto" />
          </a>

          <div className="flex items-center gap-3">
            {scrolled && (
              <a href="#cere-oferta" className="cta-primary !py-2.5 !px-5 !text-sm !min-h-0 !rounded-lg">
                Cere ofertă
              </a>
            )}
            <button
              aria-label="Caută"
              className="flex items-center justify-center w-11 h-11 rounded-full text-foreground"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Închide meniu" : "Deschide meniu"}
              className="flex items-center justify-center w-11 h-11 rounded-full text-foreground"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="bg-background border-t border-border px-5 py-6 animate-fade-in-up">
            <ul className="space-y-4">
              {[
                { label: "Beneficii", href: "#beneficii" },
                { label: "Servicii", href: "#servicii" },
                { label: "Cum funcționează", href: "#cum-functioneaza" },
                { label: "Prețuri & Planuri", href: "#preturi" },
                { label: "Întrebări frecvente", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg font-semibold text-foreground py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#cere-oferta"
              onClick={() => setMenuOpen(false)}
              className="cta-primary w-full justify-center mt-6"
            >
              Cere ofertă personalizată
            </a>
          </nav>
        )}
      </header>
      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default StickyHeader;
