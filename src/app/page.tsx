import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { AESITrustBar } from "@/components/site/aesi-trust-bar";
import { ProblemSection } from "@/components/site/problem-section";
import { SolarIntro } from "@/components/site/solar-intro";
import { SuitabilityCheck } from "@/components/site/suitability-check";
import { SolarCalculator } from "@/components/site/solar-calculator";
import { Portfolio } from "@/components/site/portfolio";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { CustomerJourney } from "@/components/site/customer-journey";
import { TrustStats } from "@/components/site/trust-stats";
import { Testimonials } from "@/components/site/testimonials";
import { Education } from "@/components/site/education";
import { FAQ } from "@/components/site/faq";
import { FinalCTA } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AESITrustBar />
        <ProblemSection />
        <SolarIntro />
        <SuitabilityCheck />
        <SolarCalculator />
        <Portfolio />
        <WhyChooseUs />
        <CustomerJourney />
        <TrustStats />
        <Testimonials />
        <Education />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
