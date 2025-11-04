import { Suspense, lazy } from "react";
import Hero from "@/components/construction/Hero";
import Values from "@/components/construction/Values";
import BuildingProcess from "@/components/construction/BuildingProcess";
import Technologies from "@/components/construction/Technologies";
import Certificates from "@/components/construction/Certificates";
import Projects from "@/components/construction/Projects";
import PriceCalculator from "@/components/construction/PriceCalculator";
import Testimonials from "@/components/construction/Testimonials";
import Contact from "@/components/construction/Contact";
import Header from "@/components/construction/Header";
import Footer from "@/components/construction/Footer";

const AccessibilityPanel = lazy(() => import('@/components/AccessibilityPanel'));

export default function Index() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Перейти к содержимому
      </a>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content">
          <Hero />
          <Values />
          <Technologies />
          <BuildingProcess />
          <Projects />
          <Certificates />
          <PriceCalculator />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
        
        <Suspense fallback={null}>
          <AccessibilityPanel />
        </Suspense>
      </div>
    </>
  );
}
