"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";

const targets = [
  {
    id: 1,
    team: "Royal Strikers",
    bounty: "The reigning champions.",
    objective: "Dismantle their top order in the powerplay.",
    threatLevel: "Maximum",
    status: "TARGET ACQUIRED",
    date: "OCT 24"
  },
  {
    id: 2,
    team: "Neon Knights",
    bounty: "Undefeated on home soil.",
    objective: "Silence their crowd. Break the streak.",
    threatLevel: "High",
    status: "IN SIGHTS",
    date: "NOV 02"
  },
  {
    id: 3,
    team: "Titan XI",
    bounty: "Heavy hitters, weak spin attack.",
    objective: "Choke them in the middle overs.",
    threatLevel: "Elevated",
    status: "AWAITING ORDERS",
    date: "NOV 15"
  }
];

export default function TheHitlistSection() {
  return (
    <section className="relative w-full py-32 bg-[#0A0A0A] z-20 overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.1)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-red-deep)] to-transparent opacity-50" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-16 md:gap-8">
        
        {/* Left Column - Title */}
        <div className="w-full md:w-1/3 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <Crosshair className="w-6 h-6 text-[var(--color-red-bright)]" />
              <span className="text-[var(--color-red-bright)] font-oswald tracking-[0.3em] uppercase text-sm font-bold">
                Classified
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-6">
              The <br/> Hitlist
            </h2>
            
            <p className="text-[var(--color-silver)] font-inter text-sm uppercase tracking-widest leading-relaxed border-l-2 border-[var(--color-red-deep)] pl-4">
              We don't just play matches. We execute game plans. These are the bounties on the board.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Targets */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {targets.map((target, idx) => (
            <HitlistItem key={target.id} target={target} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function HitlistItem({ target, index }: { target: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative bg-[#111] border border-white/5 hover:border-[var(--color-red-deep)]/50 transition-colors duration-500 overflow-hidden"
    >
      {/* Hover Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-red-deep)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row">
        
        {/* Date Box */}
        <div className="bg-black/50 border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col items-center justify-center min-w-[120px]">
          <span className="text-[var(--color-red-deep)] font-oswald text-xl font-bold uppercase tracking-widest">
            {target.date.split(' ')[0]}
          </span>
          <span className="text-white font-black text-3xl">
            {target.date.split(' ')[1]}
          </span>
        </div>

        {/* Target Info */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-black uppercase text-white tracking-tight group-hover:text-[var(--color-red-bright)] transition-colors">
              {target.team}
            </h3>
            <span className="px-3 py-1 bg-black border border-white/10 text-[10px] text-[var(--color-silver)] font-bold tracking-widest uppercase">
              {target.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#666] uppercase tracking-[0.2em] mb-1">Profile</span>
              <span className="text-sm text-[var(--color-silver)]">{target.bounty}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[10px] text-[#666] uppercase tracking-[0.2em] mb-1">Objective</span>
              <span className="text-sm text-white font-medium">{target.objective}</span>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-[var(--color-red-deep)]/30 transition-colors" />
            <span className="text-[10px] text-[var(--color-red-bright)] uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-red-bright)] animate-pulse" />
              Threat: {target.threatLevel}
            </span>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
