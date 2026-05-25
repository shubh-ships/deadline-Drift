"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black-matte z-10"
    >
      {/* Background cinematic elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Cricket Ground Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
          style={{ backgroundImage: "url('/cricket-stadium.png')" }}
        />
        
        {/* Stadium Light Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-stadium-warm)] opacity-30 blur-[120px]" />
        <div className="absolute top-[-10%] right-[-20%] w-[60%] h-[60%] rounded-full bg-[var(--color-cyan-glow)] opacity-20 blur-[150px]" />
        
        {/* Dark Overlays / Vignette */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.7)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0A0A0A]" />
        
        {/* Dust Particles Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col w-full max-w-7xl px-4 md:px-8 h-full justify-center mt-12"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start w-full relative"
        >
          {/* Background large stroke text for depth */}
          <div className="absolute top-[-50px] right-0 opacity-5 pointer-events-none hidden lg:block">
            <h1 className="text-[20rem] font-black uppercase text-stroke text-transparent leading-none tracking-tighter">
              DD
            </h1>
          </div>

          <h1 
            className="text-[20vw] md:text-[16vw] lg:text-[13vw] leading-[0.8] font-black uppercase text-transparent tracking-tighter relative z-10 pt-4"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}
          >
            DEADLINE
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 -mt-4 md:-mt-8 lg:-mt-10 ml-0 md:ml-16 lg:ml-32 relative z-20 w-full">
            <h1 className="text-[20vw] md:text-[16vw] lg:text-[13vw] leading-[0.8] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-red-bright)] to-[var(--color-red-deep)] tracking-tighter drop-shadow-[0_0_50px_rgba(139,0,0,0.5)] pb-4">
              DRIFTERS
            </h1>
            
            {/* Aggressive speed lines / graphic elements */}
            <div className="flex flex-col gap-2 mt-0 md:mt-4 opacity-80 self-end md:self-auto mb-6 md:mb-0 mr-4 md:mr-0">
              <div className="w-24 lg:w-32 h-2 lg:h-5 bg-[var(--color-cyan-glow)] skew-x-[-30deg]" />
              <div className="w-12 lg:w-16 h-2 lg:h-5 bg-white/20 skew-x-[-30deg] ml-4" />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end mt-12 md:mt-24 gap-12 relative z-30">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-start border-l-4 border-[var(--color-cyan-glow)] pl-6 max-w-lg"
          >
            <p className="font-oswald text-2xl md:text-4xl text-[var(--color-off-white)] uppercase tracking-wide leading-tight">
              Forged in the <span className="text-[var(--color-cyan-glow)]">Shadows</span>.<br/>
              Feared on the <span className="text-[var(--color-red-bright)]">Pitch</span>.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            style={{ y: y2 }}
          >
            <button className="hover-target group relative px-8 py-5 bg-[var(--color-red-deep)] text-white font-oswald uppercase tracking-wider text-xl font-bold overflow-hidden clip-path-slant flex items-center justify-center gap-3">
              <span className="relative z-10">Meet the Squad</span>
              <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-[var(--color-red-bright)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
            
            <button className="hover-target group px-8 py-5 border border-[var(--color-silver)]/20 text-white font-oswald uppercase tracking-wider text-xl font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors clip-path-slant">
              <Play className="w-5 h-5 fill-white" />
              <span>Highlights</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
      

    </section>
  );
}
