"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-2",
    caption: "The Final Over"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-1",
    caption: "Locker Room"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-1",
    caption: "Focus"
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/125141742/photo/cricket-bowler-in-action.jpg?s=1024x1024&w=is&k=20&c=gOXzIB6QdK7Q9GKy4r7LjHJTwaP4DJdebnaDccT6J90=",
    colSpan: "col-span-12 md:col-span-6",
    rowSpan: "row-span-1",
    caption: "Pace"
  },
  {
    id: 5,
    url: "https://plus.unsplash.com/premium_photo-1722122222077-332c43cfbed0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "col-span-12 md:col-span-6",
    rowSpan: "row-span-1",
    caption: "Under the Lights"
  }
];

export default function GallerySection() {
  return (
    <section className="relative w-full py-32 bg-[#0A0A0A] z-20">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter">
              Archive
            </h2>
            <div className="h-1 w-24 bg-[var(--color-red-deep)] mt-4" />
          </div>

          <span className="text-[var(--color-silver)] text-sm font-oswald uppercase tracking-[0.2em] hidden md:block">
            Raw Footage // Est. 2022
          </span>
        </motion.div>

        <div className="grid grid-cols-12 auto-rows-[250px] gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${img.colSpan} ${img.rowSpan} group relative overflow-hidden bg-[#111] hover-target`}
            >
              {/* Fallback pattern in case image fails to load, gives a gritty look */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />

              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-8 h-[2px] bg-[var(--color-cyan-glow)] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                <h3 className="text-white font-oswald text-2xl uppercase tracking-wider font-bold">
                  {img.caption}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
