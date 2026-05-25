"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function TheDraftSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full py-32 bg-[#0A0A0A] z-20 flex flex-col items-center border-t border-[var(--color-red-deep)]/30 overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,0,0,0.15)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,255,255,0.05)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Horizontal scanline animation */}
        <motion.div 
          className="absolute left-0 right-0 h-[2px] bg-[var(--color-red-bright)] opacity-20"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        />
      </div>

      <div className="w-full max-w-5xl px-4 flex flex-col relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-[var(--color-silver)]/30" />
            <span className="text-[var(--color-silver)] font-oswald tracking-[0.4em] uppercase text-sm font-bold">
              Open Recruitment
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-silver)]/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none mb-6"
          >
            Prove Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-red-bright)] to-[var(--color-red-deep)] drop-shadow-[0_0_20px_rgba(139,0,0,0.5)]">Worth</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888] font-inter max-w-xl mx-auto uppercase tracking-widest text-sm leading-relaxed"
          >
            We don't take applications. We take depositions. If you think you have what it takes to wear the charcoal and red, submit your dossier below.
          </motion.p>
        </div>

        {/* The Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-2xl mx-auto bg-[#111] border border-white/10 p-8 md:p-12 relative group"
        >
          {/* Form Glitch Glow */}
          <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />

          <form className="flex flex-col gap-8 relative z-10">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-[#666] uppercase tracking-[0.2em] font-bold">Operator Name</label>
              <input 
                type="text" 
                placeholder="ENTER NAME..." 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-oswald text-xl uppercase tracking-wider focus:outline-none focus:border-[var(--color-cyan-glow)] transition-colors placeholder:text-white/10"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className="text-[10px] text-[#666] uppercase tracking-[0.2em] font-bold">Specialization</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-4 text-white/50 font-oswald text-xl uppercase tracking-wider focus:outline-none focus:border-[var(--color-cyan-glow)] transition-colors appearance-none cursor-pointer">
                  <option className="bg-[#111]">Batsman</option>
                  <option className="bg-[#111]">Pace Bowler</option>
                  <option className="bg-[#111]">Spin Bowler</option>
                  <option className="bg-[#111]">All-Rounder</option>
                  <option className="bg-[#111]">Wicket Keeper</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className="text-[10px] text-[#666] uppercase tracking-[0.2em] font-bold">Contact Code</label>
                <input 
                  type="text" 
                  placeholder="PHONE OR EMAIL..." 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-oswald text-xl uppercase tracking-wider focus:outline-none focus:border-[var(--color-cyan-glow)] transition-colors placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-[#666] uppercase tracking-[0.2em] font-bold">Motivation</label>
              <textarea 
                rows={3}
                placeholder="WHY SHOULD WE LET YOU ON THE PITCH?..." 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-oswald text-xl uppercase tracking-wider focus:outline-none focus:border-[var(--color-cyan-glow)] transition-colors placeholder:text-white/10 resize-none"
              />
            </div>

            <button 
              type="button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="mt-8 hover-target group relative w-full py-6 bg-[#0A0A0A] border border-[var(--color-red-deep)] text-white font-oswald uppercase tracking-[0.2em] text-lg font-bold overflow-hidden flex items-center justify-center gap-4 transition-all hover:shadow-[0_0_30px_rgba(139,0,0,0.4)]"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Submit Dossier</span>
              <Send className="w-5 h-5 relative z-10 group-hover:text-black transition-colors duration-300" />
              
              {/* Fill animation */}
              <div 
                className="absolute inset-0 bg-[var(--color-red-bright)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" 
              />
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
