import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { LandingSection } from "@/components/LandingSection/LandingSection";
import { PricingSection } from "@/components/Pricing/PricingSection";
import { TestimonialSection } from "@/components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between text-black">
      <Header />
      <LandingSection />
      <FeaturesSection/>
      <TestimonialSection/>
      <Footer />
    </main>
  );
}
