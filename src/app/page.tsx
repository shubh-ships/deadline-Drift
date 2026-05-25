import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import TheArsenalSection from "@/components/sections/TheArsenalSection";
import TheHungerSection from "@/components/sections/TheHungerSection";
import TheOriginSection from "@/components/sections/TheOriginSection";
import GallerySection from "@/components/sections/GallerySection";
import TheDraftSection from "@/components/sections/TheDraftSection";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center">
      <HeroSection />
      <TeamSection />
      <TheArsenalSection />
      <TheHungerSection />
      <TheOriginSection />
      <GallerySection />
      <TheDraftSection />
      
      {/* Footer */}
      <footer className="w-full py-12 border-t border-[rgba(255,255,255,0.05)] bg-[#050505] relative z-10 flex flex-col items-center justify-center">
        <h2 className="font-oswald text-4xl md:text-6xl text-[var(--color-charcoal)] uppercase font-black text-stroke opacity-20">
          Deadline Drifters
        </h2>
        <p className="mt-4 text-sm text-[var(--color-silver)]/50 tracking-widest uppercase">
          © {new Date().getFullYear()} The Drifters. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
