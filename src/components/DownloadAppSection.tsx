import { Download, FileText } from "lucide-react";

const DownloadAppSection = () => {
  return (
    <section id="descarca-oferta" className="section-padding bg-secondary">
      <div className="section-divider" />
      <h2 className="section-heading uppercase">
        Nu te poți decide acum? Nicio problemă
      </h2>
      <p className="section-subheading">
        Descarcă oferta specială pentru antreprenori și consultă toate
        condițiile, tarifele și beneficiile în detaliu.
      </p>

      <a
        href="https://www.cargus.ro/wp-content/uploads/Oferta-exclusiva-pentru-antreprenori-Cargus-01.04.2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-cargus-orange transition-colors"
      >
        <div className="w-11 h-11 rounded-lg bg-cargus-orange-light flex items-center justify-center shrink-0">
          <FileText size={20} className="text-cargus-orange" strokeWidth={2.4} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-bold text-foreground">
            Oferta exclusivă antreprenori
          </p>
          <p className="text-[12px] text-muted-foreground">PDF · 01.04.2026</p>
        </div>
        <Download size={18} className="text-cargus-orange shrink-0" />
      </a>
    </section>
  );
};

export default DownloadAppSection;
