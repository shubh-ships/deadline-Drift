"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    // Using the local anthem.mp3 added to the public folder
    const audio = new Audio("/anthem.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // Clean up on unmount
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Play returns a promise, handling it prevents errors if browser blocks autoplay
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      {/* Equalizer animation when playing */}
      {isPlaying && (
        <div className="flex items-end gap-[2px] h-4">
          <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[var(--color-cyan-glow)]" />
          <motion.div animate={{ height: ["80%", "30%", "80%"] }} transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[var(--color-cyan-glow)]" />
          <motion.div animate={{ height: ["50%", "90%", "50%"] }} transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[var(--color-cyan-glow)]" />
        </div>
      )}

      <button
        onClick={togglePlay}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-white/20 backdrop-blur-md hover:border-[var(--color-red-deep)] hover:bg-[var(--color-red-deep)]/20 transition-all duration-300"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-white" />
        ) : (
          <VolumeX className="w-5 h-5 text-[#888] group-hover:text-white transition-colors" />
        )}
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-[var(--color-red-deep)] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 pointer-events-none" />
      </button>
    </div>
  );
}
