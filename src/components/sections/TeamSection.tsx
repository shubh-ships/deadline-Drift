"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Add your team data here. 
// Images must exist in the public/team/ folder.
export const playersData = [
  {
    id: 1,
    name: "Abhinav",
    image: "/team/abhinav.jpg",
    role: "Strike Bowler",
    style: "RHF",
    stats: "SR: 155.0",
    aura: "Yorker Reaper",
    number: "01"
  },
  {
    id: 2,
    name: "Ashlesh",
    image: "/team/ashlesh.jpg",
    role: "All-Round Weapon",
    style: "RHB / RAM",
    stats: "Econ: 6.5",
    aura: "Momentum Thief",
    number: "02"
  },
  {
    id: 3,
    name: "Ashish",
    image: "/team/mathur.jpg",
    role: "Power Hitter",
    style: "RHB",
    stats: "Avg: 45.2",
    aura: "Boundary Predator",
    number: "03"
  },
  {
    id: 4,
    name: "Nikhil",
    image: "/team/nikhil.jpg",
    role: "Star All-Rounder",
    style: "RHB / RAM",
    stats: "Avg: 45.2",
    aura: "The Phantom",
    number: "04"
  },
  {
    id: 5,
    name: "Pavit",
    image: "/team/pavit.jpg",
    role: "Keeper-Batsman",
    style: "RHB",
    stats: "SR: 126.1",
    aura: "Fortress Keeper",
    number: "05"
  },
  {
    id: 6,
    name: "Pulkit",
    image: "/team/pulkit.jpg",
    role: "Captain / Fast Bowler",
    style: "RMF",
    stats: "Econ: 8.8",
    aura: "Death Overs General",
    number: "06"
  },
  {
    id: 7,
    name: "Rishabh",
    image: "/team/rishabh.jpg",
    role: "Utility All-Rounder",
    style: "RHB / RAM",
    stats: "Econ: 6.5",
    aura: "Pressure Absorber",
    number: "07"
  },
  {
    id: 8,
    name: "Shubham",
    image: "/team/shubham.jpeg",
    role: "Middle Order Enforcer",
    style: "RHB",
    stats: "Win %: 75",
    aura: "Chaos Architect",
    number: "08"
  },
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We duplicate the array to create a seamless infinite loop
  const duplicatedPlayers = [...playersData, ...playersData];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[var(--color-charcoal)] py-32 flex flex-col items-center justify-center z-20 border-t border-[rgba(255,255,255,0.05)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

      <div className="w-full max-w-7xl px-4 flex flex-col items-start relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[var(--color-red-bright)] rounded-full animate-pulse" />
            <span className="text-[var(--color-red-bright)] font-oswald tracking-[0.3em] uppercase text-sm font-bold">
              Active Roster
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#444] leading-none uppercase tracking-tighter">
            THE SQUAD
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative overflow-hidden group">

        {/* Shadow Overlays for smooth fade out at screen edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-charcoal)] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll group-hover:pause-scroll">
          {duplicatedPlayers.map((player, index) => (
            <div key={`${player.id}-${index}`} className="px-4">
              <PlayerCard player={player} />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause-scroll {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}

function PlayerCard({ player }: { player: typeof playersData[0] }) {
  return (
    <div className="hover-target group relative w-[320px] h-[480px] md:w-[380px] md:h-[550px] bg-[#050505] border border-white/10 overflow-hidden clip-path-card cursor-pointer transition-all duration-500 hover:border-white/30 flex-shrink-0">

      {/* Player Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105"
        style={{ backgroundImage: `url(${player.image})` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-red-deep)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

      {/* Giant Background Number */}
      <div className="absolute top-4 right-4 text-[6rem] font-black leading-none opacity-10 group-hover:opacity-30 transition-opacity text-white font-oswald pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        {player.number}
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <div className="flex flex-col gap-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--color-red-deep)] text-white text-[10px] font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(139,0,0,0.5)]">
              {player.role}
            </span>
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/20 text-white/90 text-[10px] font-bold tracking-widest uppercase">
              {player.style}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black uppercase text-white mt-2 leading-none tracking-tighter group-hover:text-[var(--color-off-white)] transition-colors text-stroke">
            {player.name}
          </h3>

          <div className="flex flex-col gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Key Stat</span>
              <span className="font-oswald text-lg font-bold text-white tracking-wider">{player.stats}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Aura</span>
              <span className="font-oswald text-lg font-bold text-[var(--color-red-bright)] tracking-wider drop-shadow-[0_0_5px_rgba(204,0,0,0.5)]">
                {player.aura}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Glitch Overlay Effect on hover */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.02)] mix-blend-difference pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
