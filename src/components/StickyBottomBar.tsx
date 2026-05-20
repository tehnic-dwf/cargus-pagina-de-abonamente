import { Menu, Phone } from "lucide-react";

const StickyBottomBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-sticky">
      <div className="flex items-center justify-between h-16 px-4 max-w-[428px] mx-auto">
        <a href="#" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3 min-w-[56px]">
          <Menu size={22} />
          <span>Meniu</span>
        </a>
        <a
          href="#cere-oferta"
          className="cta-primary !py-3 !px-7 !text-sm !min-h-0 !rounded-lg flex-1 mx-3 justify-center"
        >
          Cere ofertă
        </a>
        <a href="tel:+40219330" className="flex flex-col items-center gap-0.5 text-muted-foreground text-xs font-medium py-2 px-3 min-w-[56px]">
          <Phone size={22} />
          <span>Sună</span>
        </a>
      </div>
    </nav>
  );
};

export default StickyBottomBar;
