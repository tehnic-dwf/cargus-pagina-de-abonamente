import { Menu, Send, MessageCircle, MapPin } from "lucide-react";

const StickyBottomBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-sticky">
      <div className="flex items-center justify-around h-16">
        <a href="#" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3">
          <Menu size={22} />
          <span>Meniu</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3">
          <MapPin size={22} />
          <span>Urmărește</span>
        </a>
        <a href="#cere-oferta" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3">
          <Send size={22} />
          <span>Trimite</span>
        </a>
        <a
          href="#cere-oferta"
          className="flex flex-col items-center gap-0.5 text-xs font-medium py-2 px-3 text-cargus-orange"
          aria-label="Chat"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cargus-orange text-primary-foreground">
            <MessageCircle size={20} />
          </div>
          <span>Chat</span>
        </a>
      </div>
    </nav>
  );
};

export default StickyBottomBar;
