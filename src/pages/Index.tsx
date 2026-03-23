import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import DownloadAppSection from "@/components/DownloadAppSection";
import FooterSection from "@/components/FooterSection";
import StickyBottomBar from "@/components/StickyBottomBar";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="max-w-[428px] mx-auto bg-background min-h-screen relative">
      <StickyHeader />
      <main>
        <HeroSection />
        <AnimatedSection>
          <BenefitsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <HowItWorksSection />
        </AnimatedSection>
        <AnimatedSection>
          <SocialProofSection />
        </AnimatedSection>
        <AnimatedSection>
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection>
          <DownloadAppSection />
        </AnimatedSection>
      </main>
      <FooterSection />
      <StickyBottomBar />
      <div className="h-20" />
    </div>
  );
};

export default Index;
