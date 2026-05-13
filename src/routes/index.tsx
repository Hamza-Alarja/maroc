import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Styles from "@/components/site/Styles";
// import Portfolio from "@/components/site/Portfolio";
import BeforeAfter from "@/components/site/BeforeAfter";
import WhyUs from "@/components/site/WhyUs";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import Areas from "@/components/site/Areas";
import Booking from "@/components/site/Booking";
import FAQ from "@/components/site/FAQ";
// import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import ScrollProgress from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Maroc — Finitions de luxe & rénovation au Maroc" },
      {
        name: "description",
        content:
          "Studio de finition et rénovation haut de gamme au Maroc. Salles de bain, gypse, peinture, éclairage, zellige, jardin.",
      },
      { property: "og:title", content: "Atelier Maroc — Finitions de luxe" },
      { property: "og:description", content: "Tu transformes les espaces en expérience de luxe." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Styles />
      {/* <Portfolio /> */}
      <BeforeAfter />
      <WhyUs />
      <Process />
      {/* <Testimonials /> */}
      <Areas />
      <Booking />
      <FAQ />
      {/* <FinalCTA /> */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
