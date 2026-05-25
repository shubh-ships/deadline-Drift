"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TheOriginSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacities for 4 different text blocks based on scroll position
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 1], [0, 1, 0, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55, 0.7, 1], [0, 1, 0, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.75, 1, 1], [0, 1, 1, 1]);

  // Calculate scale for dramatic effect
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.7], [0.9, 1]);
  const scale4 = useTransform(scrollYProgress, [0.6, 1], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#050505] z-20">

      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">

        {/* Background Gradients & Noise */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(5,5,5,1)_100%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />

          {/* Dynamic background light tracking scroll */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full bg-[var(--color-red-deep)] blur-[150px] opacity-20"
            style={{
              scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]),
              opacity: useTransform(scrollYProgress, [0, 0.8, 1], [0.1, 0.3, 0.5])
            }}
          />
        </div>

        {/* Text 1 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-4 text-center z-10"
          style={{ opacity: opacity1, scale: scale1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-[var(--color-red-deep)] font-oswald tracking-[0.4em] uppercase text-sm font-bold mb-6">
              The Genesis
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none max-w-4xl">
              It started with <br /> missed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-silver)] to-[#444]">deadlines.</span>
            </h2>
          </div>
        </motion.div>

        {/* Text 2 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-4 text-center z-10"
          style={{ opacity: opacity2, scale: scale2 }}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none max-w-4xl">
              Corporate frustration <br /> turned into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-glow)] to-blue-900 drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">aggression.</span>
            </h2>
          </div>
        </motion.div>

        {/* Text 3 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-4 text-center z-10"
          style={{ opacity: opacity3, scale: scale3 }}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none max-w-5xl">
              The pitch became <br /> the only place where <span className="text-stroke text-transparent">rules didn't apply.</span>
            </h2>
          </div>
        </motion.div>

        {/* Text 4 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-4 text-center z-10"
          style={{ opacity: opacity4, scale: scale4 }}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-6xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none max-w-4xl drop-shadow-[0_0_40px_rgba(139,0,0,0.6)]">
              Now, we don't <br /> meet deadlines.
            </h2>
            <div className="mt-8 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-7xl md:text-[10rem] font-black uppercase text-[var(--color-red-bright)] tracking-tighter leading-none"
              >
                We End Them.
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* Scroll Progress Bar at bottom */}
        <div className="absolute bottom-0 left-0 h-1 bg-[var(--color-red-deep)] z-20" style={{ width: "100%" }}>
          <motion.div
            className="h-full bg-[var(--color-cyan-glow)] shadow-[0_0_10px_var(--color-cyan-glow)]"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
}
