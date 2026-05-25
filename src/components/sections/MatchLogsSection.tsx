"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CircleDot } from "lucide-react";

const matchEvents = [
  {
    overs: "14.2",
    event: "WICKET! The captain strikes. Middle stump out of the ground.",
    momentum: "drifters", // 'drifters' or 'opponents'
    type: "crucial",
  },
  {
    overs: "16.5",
    event: "FOUR. Driven through covers. Required rate drops below 10.",
    momentum: "drifters",
    type: "normal",
  },
  {
    overs: "17.3",
    event: "SIX OVER LONG ON. MATCH TURNED HERE. Ball lost in the shadows.",
    momentum: "drifters",
    type: "highlight",
  },
  {
    overs: "19.1",
    event: "DROPPED! Tension at the boundary line.",
    momentum: "opponents",
    type: "critical",
  },
  {
    overs: "19.5",
    event: "MATCH WON. A flick to square leg seals the deal.",
    momentum: "drifters",
    type: "victory",
  }
];

export default function MatchLogsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 bg-[#0A0A0A] z-20 flex flex-col items-center border-t border-[rgba(255,255,255,0.05)]"
    >
      <div className="w-full max-w-5xl px-4 flex flex-col relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[var(--color-red-deep)] uppercase tracking-[0.2em] font-bold text-sm mb-2">
              VS ROYAL STRIKERS
            </h4>
            <h2 className="text-4xl md:text-6xl uppercase text-white leading-none">
              BATTLE LOGS
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm font-oswald uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--color-cyan-glow)]" />
              <span className="text-[var(--color-silver)]">Momentum: Drifters</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#444]" />
              <span className="text-[#666]">Momentum: Opponent</span>
            </div>
          </motion.div>
        </div>

        <div className="relative pl-8 md:pl-24">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-[39px] top-0 bottom-0 w-[2px] bg-white/10 z-0" />
          <motion.div 
            className="absolute left-[15px] md:left-[39px] top-0 w-[2px] bg-[var(--color-red-deep)] z-10 origin-top shadow-[0_0_15px_rgba(139,0,0,1)]"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16">
            {matchEvents.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
  return (
    <motion.div 
      className="relative z-20 group hover-target"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Node Dot */}
      <div className="absolute -left-[30px] md:-left-[54px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-white/20 flex items-center justify-center transition-colors group-hover:border-[var(--color-cyan-glow)] group-hover:shadow-[0_0_10px_var(--color-cyan-glow)]">
        <CircleDot className="w-4 h-4 text-white/50 group-hover:text-white" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center bg-[#111] p-6 border border-white/5 group-hover:border-white/20 transition-colors clip-path-slant relative overflow-hidden">
        {/* Momentum Indicator Background */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
            item.momentum === "drifters" ? "bg-[var(--color-cyan-glow)]" : "bg-[#444]"
          }`}
        />

        <div className="flex-shrink-0 w-24">
          <span className="font-oswald text-3xl font-black text-[var(--color-red-deep)]">
            {item.overs}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-silver)] block">
            Overs
          </span>
        </div>
        
        <div className="flex-1">
          <p className={`text-lg md:text-xl font-medium tracking-wide ${
            item.type === 'highlight' ? 'text-[var(--color-cyan-glow)] font-bold' : 
            item.type === 'critical' ? 'text-orange-500' :
            item.type === 'victory' ? 'text-white font-black' :
            'text-[var(--color-off-white)]'
          }`}>
            {item.event}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
