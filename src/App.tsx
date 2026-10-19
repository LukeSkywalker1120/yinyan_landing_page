import { useState } from "react";
import { MotionConfig } from "motion/react";
import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Workflow } from "./components/Workflow";
import { BenefitStrip } from "./components/BenefitStrip";
import { ApparelTeaser } from "./components/ApparelTeaser";
import { Scenarios } from "./components/Scenarios";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { ContactSection } from "./components/ContactSection";
import { FloatingButtons } from "./components/FloatingButtons";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { ApparelPageSections } from "./components/ApparelPageSections";
import { DownloadPageSections } from "./components/DownloadPageSections";
import { ApiPageSections } from "./components/ApiPageSections";
import { usePageReveals } from "./components/ui";
export default function App() {
  const [modal, setModal] = useState<"service" | "mobile" | "partner" | null>(
    null,
  );
  usePageReveals();
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return (
    <MotionConfig reducedMotion="user">
      <main id="top" className="bg-page text-ink">
        <SiteHeader onPartner={() => setModal("partner")} />
        {path === "/apparel" ? (
          <ApparelPageSections />
        ) : path === "/download" ? (
          <DownloadPageSections />
        ) : path === "/open-api" ? (
          <ApiPageSections />
        ) : (
          <>
            <Hero />
            <Workflow />
            <BenefitStrip />
            <ApparelTeaser />
            <Scenarios />
            <Features />
            <Gallery />
            <FAQ />
            <ContactSection onContact={() => setModal("service")} />
          </>
        )}
        <FloatingButtons onOpen={setModal} />
        <Footer />
      </main>
      {modal && (
        <ContactModal
          key={modal}
          kind={modal}
          onClose={() => setModal(null)}
          onService={() => setModal("service")}
        />
      )}
    </MotionConfig>
  );
}
