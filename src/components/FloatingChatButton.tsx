import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#chat"
      aria-label="Deschide chat suport"
      className={[
        "fixed z-50 right-4 bottom-20 w-14 h-14 rounded-full flex items-center justify-center",
        "shadow-lg transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
      style={{
        background: "hsl(var(--cargus-orange))",
        color: "hsl(var(--primary-foreground))",
        boxShadow: "0 8px 24px hsl(var(--cargus-orange) / 0.45)",
      }}
    >
      <MessageCircle size={24} strokeWidth={2.4} />
    </a>
  );
};

export default FloatingChatButton;
