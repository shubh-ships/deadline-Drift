"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Trophy } from "lucide-react";

const trophies = [
  {
    id: 1,
    title: "NCR Corporate League",
    year: "2024",
    story: "Defeated Titans XI by 14 runs in a final that lasted till the 20th over.",
    status: "Gold"
  },
  {
    id: 2,
    title: "Midnight Bash Cup",
    year: "2023",
    story: "Vikram scored 78 off 32 balls under the floodlights to chase 190.",
    status: "Silver"
  },
  {
    id: 3,
    title: "Winter Smash",
    year: "2022",
    story: "The origin story. A ragtag group pulled off a miracle semi-final win.",
    status: "Gold"
  }
];

export default function TrophyRoomSection() {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#050505] py-32 flex flex-col items-center justify-center z-20 overflow-hidden">
      {/* Background cinematic lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[300px] bg-gradient-to-b from-[var(--color-stadium-warm)]/10 to-transparent blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-7xl px-4 flex flex-col relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#444] uppercase tracking-tighter">
            Trophy Room
          </h2>
          <p className="text-[var(--color-silver)] mt-4 font-inter text-sm md:text-base max-w-xl mx-auto uppercase tracking-widest">
            The hardware we bled for.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-end relative">
          {/* A glowing shelf line */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-silver)]/30 to-transparent z-0" />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-cyan-glow)]/50 to-transparent blur-[2px] z-0" />
          
          {trophies.map((trophy, idx) => (
            <TrophyItem key={trophy.id} trophy={trophy} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrophyItem({ trophy, index }: { trophy: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center group cursor-pointer hover-target p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-8">
        <motion.div 
          animate={{ 
            y: isHovered ? -10 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative z-20"
        >
          <Trophy 
            size={120} 
            strokeWidth={1}
            className={`transition-colors duration-300 ${
              trophy.status === 'Gold' 
                ? 'text-[#FFD700] fill-[#FFD700]/10 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                : 'text-[#C0C0C0] fill-[#C0C0C0]/10 drop-shadow-[0_0_15px_rgba(192,192,192,0.3)]'
            }`} 
          />
        </motion.div>
        
        {/* Spotlight effect from top */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[150px] h-[250px] bg-white/5 blur-[30px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col items-center text-center max-w-[200px]">
        <span className="text-[var(--color-red-deep)] font-oswald text-2xl font-bold">{trophy.year}</span>
        <h3 className="text-white font-black uppercase text-lg leading-tight mt-1 mb-3">
          {trophy.title}
        </h3>
        
        <div className="overflow-hidden h-[0px] group-hover:h-[80px] transition-[height] duration-500 ease-in-out">
          <p className="text-[11px] text-[var(--color-silver)]/80 leading-relaxed uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {trophy.story}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
