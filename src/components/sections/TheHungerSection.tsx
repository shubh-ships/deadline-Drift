"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TheHungerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] py-32 flex flex-col items-center justify-center z-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[var(--color-red-deep)] opacity-10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="w-full flex flex-col relative z-10 overflow-hidden py-20">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <h2 className="text-[12vw] md:text-[8vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#222] via-[#555] to-[#222] leading-none tracking-tighter opacity-80">
            0 TROPHIES <span className="text-[var(--color-red-deep)]">///</span> 0 EXCUSES <span className="text-[var(--color-red-deep)]">///</span> 0 TROPHIES
          </h2>
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="whitespace-nowrap -mt-4 md:-mt-8">
          <h2 className="text-[12vw] md:text-[8vw] font-black uppercase text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            INFINITE HUNGER <span className="text-[var(--color-cyan-glow)]">///</span> INFINITE HUNGER
          </h2>
        </motion.div>
      </div>

      <motion.div 
        style={{ scale }}
        className="relative z-10 max-w-4xl px-4 text-center mt-12 md:mt-24"
      >
        <div className="w-1 px-8 mb-8 mx-auto flex gap-2 justify-center">
          <div className="w-2 h-2 bg-[var(--color-red-bright)] rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-[var(--color-red-deep)] rounded-full" />
          <div className="w-2 h-2 bg-[#333] rounded-full" />
        </div>
        
        <h3 className="font-oswald text-3xl md:text-5xl uppercase text-white tracking-wide leading-tight">
          We haven't filled a cabinet. <br className="hidden md:block" />
          <span className="text-[var(--color-silver)]">We are building an empire.</span>
        </h3>
        
        <p className="font-inter text-sm md:text-lg text-[#888] mt-8 max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
          The empty shelf isn't a void. It's a target. Every match is a statement. Every ball is a warning. The league doesn't fear the champion resting on their laurels—they fear the underdog with nothing to lose and everything to prove.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <div className="inline-block relative group cursor-pointer hover-target">
            <div className="absolute inset-0 bg-[var(--color-red-deep)] blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            <button className="relative px-8 py-4 border border-[var(--color-red-deep)] text-[var(--color-red-bright)] font-oswald text-xl uppercase font-bold tracking-[0.2em] bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-[var(--color-red-deep)] group-hover:text-white">
              Watch Us Hunt
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
