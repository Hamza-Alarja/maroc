import React from "react";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Styles from "@/components/site/Styles";
import BeforeAfter from "@/components/site/BeforeAfter";
import WhyUs from "@/components/site/WhyUs";
import Process from "@/components/site/Process";
import Areas from "@/components/site/Areas";
import Booking from "@/components/site/Booking";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import ScrollProgress from "@/components/site/ScrollProgress";

const App = () => {
  return (
    <I18nProvider>
      <main className="relative">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Services />
        <Styles />
        <BeforeAfter />
        <WhyUs />
        <Process />
        <Areas />
        <Booking />
        <FAQ />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </I18nProvider>
  );
};

export default App;
