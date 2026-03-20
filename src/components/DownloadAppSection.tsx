import appMockup from "@/assets/app-mockup.png";

const DownloadAppSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-divider" />
      <h2 className="section-heading !text-[1.65rem] !leading-tight">
        DESCARCĂ APLICAȚIA CARGUS MOBILE!
      </h2>

      <div className="mt-4 space-y-1">
        <p className="text-base font-bold text-foreground leading-snug">
          Cauți cea mai ușoară modalitate de urmărire a coletului?
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Descoperă aplicația Cargus Mobile și primești automat notificări pentru coletele aflate în drum spre tine.
        </p>
      </div>

      {/* Store badges - 2 side by side + 1 centered */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href="#" className="block bg-foreground rounded-xl px-4 py-3 text-center">
          <div className="text-[10px] text-primary-foreground/70 leading-none">Download on the</div>
          <div className="text-lg font-semibold text-primary-foreground leading-tight">App Store</div>
        </a>
        <a href="#" className="block bg-foreground rounded-xl px-4 py-3 text-center">
          <div className="text-[10px] text-primary-foreground/70 leading-none">GET IT ON</div>
          <div className="text-lg font-semibold text-primary-foreground leading-tight">Google Play</div>
        </a>
      </div>
      <div className="mt-3 flex justify-center">
        <a href="#" className="block bg-foreground rounded-xl px-6 py-3 text-center">
          <div className="text-[10px] text-primary-foreground/70 leading-none">EXPLORE IT ON</div>
          <div className="text-lg font-semibold text-primary-foreground leading-tight">AppGallery</div>
        </a>
      </div>

      {/* Phone mockup - full width bleed */}
      <div className="mt-8 -mx-5 overflow-hidden">
        <img
          src={appMockup}
          alt="Aplicația Cargus Mobile - ecran urmărire colete"
          className="w-full h-auto object-cover max-h-[420px] object-top"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default DownloadAppSection;
