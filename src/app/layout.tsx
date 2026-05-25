import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import AudioPlayer from "@/components/AudioPlayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Deadline Drifters | Cricket Team",
  description: "Built After Deadlines. Feared Before Matchday. The official digital identity of the Deadline Drifters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} dark`}>
      <body className="antialiased noise-bg bg-black-matte text-off-white">
        <SmoothScroll>
          <CustomCursor />
          <AudioPlayer />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
