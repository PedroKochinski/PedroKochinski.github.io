import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Proof } from "@/components/Proof";
import { Cases } from "@/components/Cases";
import { Tech } from "@/components/Tech";
import { Process } from "@/components/Process";
import { Packages } from "@/components/Packages";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedro Kochinski — AI Engineering & Software Consultancy" },
      {
        name: "description",
        content:
          "Software consultancy for companies that need AI, APIs, recommendation systems and architecture — from design to deploy. Brazil, Portugal, LATAM and EU.",
      },
      { property: "og:title", content: "Pedro Kochinski — AI Engineering & Software Consultancy" },
      {
        property: "og:description",
        content:
          "Applied AI, RAG, vector search, APIs and production architecture for B2B teams in Brazil, Portugal and the EU.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Problems />
          <Services />
          <Proof />
          <Cases />
          <Tech />
          <Process />
          <Packages />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
