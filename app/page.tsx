import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Page() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
      </main>
    </>
  );
}
