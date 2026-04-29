import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { About } from "@/components/About";
import { Cases } from "@/components/Cases";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";
import { Tech } from "@/components/Tech";
import { I18nProvider } from "@/lib/i18n";
import "./styles.css";

function App() {
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
          <Clients />
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
