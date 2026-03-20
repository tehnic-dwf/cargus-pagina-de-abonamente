import { Menu, Send, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const StickyBottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-sticky">
      <div className="flex items-center justify-around h-16">
        <a href="#" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3">
          <Menu size={22} />
          <span>Meniu</span>
        </a>
        <a href="#cere-oferta" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3">
          <Send size={22} />
          <span>Trimite</span>
        </a>
        <a
          href="#cere-oferta"
          className="flex items-center justify-center w-14 h-14 -mt-5 rounded-full bg-cargus-orange text-primary-foreground shadow-lg"
          aria-label="Chat"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </nav>
  );
};

export default StickyBottomBar;
