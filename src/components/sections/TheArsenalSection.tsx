"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Shield, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const loadout = [
  {
    id: "willow",
    title: "The Weapon",
    subtitle: "English Willow",
    icon: Shield,
    description: "Handcrafted for destruction. We don't just occupy the crease; we dictate terms. Every swing is an intent to break the boundary.",
    stats: [
      { label: "Material", value: "Grade 1 Willow" },
      { label: "Purpose", value: "Annihilation" }
    ],
    bgImage: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "leather",
    title: "The Ammo",
    subtitle: "156g Red Leather",
    icon: Target,
    description: "Shined on one side, rough on the other. 156 grams of pure aggression designed to swing in the air and bite off the pitch.",
    stats: [
      { label: "Weight", value: "156g" },
      { label: "Behavior", value: "Lethal Seam" }
    ],
    bgImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop"
  },
  {
    id: "turf",
    title: "The Arena",
    subtitle: "22 Yards of Truth",
    icon: Zap,
    description: "The strip where reputations are forged and broken. Whether it's a green top or a dust bowl, we adapt and conquer.",
    stats: [
      { label: "Length", value: "22 Yards" },
      { label: "Rule", value: "No Excuses" }
    ],
    bgImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop"
  }
];

export default function TheArsenalSection() {
  const [activeTab, setActiveTab] = useState(loadout[0]);

  return (
    <section className="relative w-full min-h-[80vh] bg-[#0A0A0A] py-32 z-20 flex flex-col items-center border-t border-white/5">
      {/* Background that changes based on active tab */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 filter grayscale transition-all duration-1000"
          style={{ backgroundImage: `url(${activeTab.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Navigation */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase text-white mb-12 tracking-tighter"
          >
            The <span className="text-[var(--color-red-deep)]">Arsenal</span>
          </motion.h2>

          <div className="flex flex-col gap-4">
            {loadout.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab.id === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={cn(
                    "hover-target text-left flex items-center gap-4 p-4 border transition-all duration-300",
                    isActive 
                      ? "bg-[var(--color-red-deep)]/10 border-[var(--color-red-deep)] shadow-[inset_4px_0_0_var(--color-red-bright)]" 
                      : "bg-[#111] border-white/5 hover:bg-white/5"
                  )}
                >
                  <Icon className={cn("w-6 h-6", isActive ? "text-[var(--color-red-bright)]" : "text-[#555]")} />
                  <div className="flex flex-col">
                    <span className={cn("font-oswald text-xl uppercase font-bold", isActive ? "text-white" : "text-[#888]")}>
                      {item.title}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#555]">
                      {item.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Content Display */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center min-h-[400px]">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
                Classified Gear
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--color-red-deep)] to-transparent" />
            </div>

            <h3 className="text-5xl md:text-7xl font-black uppercase text-white leading-none tracking-tighter mb-4">
              {activeTab.title}
            </h3>
            <h4 className="text-xl md:text-2xl text-[var(--color-red-bright)] font-oswald uppercase tracking-widest mb-8">
              {activeTab.subtitle}
            </h4>

            <p className="text-lg text-[var(--color-silver)] font-inter leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--color-red-deep)] pl-6">
              {activeTab.description}
            </p>

            <div className="grid grid-cols-2 gap-8 max-w-xl">
              {activeTab.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] text-[#666] uppercase tracking-[0.2em] mb-2">
                    {stat.label}
                  </span>
                  <span className="text-2xl font-oswald uppercase text-white font-bold tracking-wide">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Decorative crosshairs */}
            <div className="absolute top-10 right-10 w-8 h-8 opacity-20 hidden md:block">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
            </div>
            <div className="absolute bottom-10 right-10 w-8 h-8 opacity-20 hidden md:block">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
