import { Menu, MessageCircle } from "lucide-react";

const StickyBottomBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-sticky">
      <div className="flex items-center justify-between h-16 px-4">
        <a href="#" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3">
          <Menu size={22} />
          <span>Meniu</span>
        </a>
        <a
          href="#cere-oferta"
          className="cta-primary !py-3 !px-8 !text-sm !min-h-0 !rounded-lg"
        >
          Cere ofertă
        </a>
        <a href="#" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3">
          <MessageCircle size={22} />
          <span>Chat</span>
        </a>
      </div>
    </nav>
  );
};

export default StickyBottomBar;
