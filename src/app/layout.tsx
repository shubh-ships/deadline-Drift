import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import AudioPlayer from "@/components/AudioPlayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  metadataBase: new URL('https://deadlinedrifters.in'),
  title: {
    default: "Deadline Drifters | Professional Cricket Team",
    template: "%s | Deadline Drifters"
  },
  description: "Built After Deadlines. Feared Before Matchday. The official digital identity of the Deadline Drifters cricket team. Explore our squad, stats, and match highlights.",
  keywords: ["Cricket", "Cricket Team", "Deadline Drifters", "Local Cricket", "Cricket Club", "Sports Team", "T20 Cricket"],
  authors: [{ name: "Deadline Drifters" }],
  creator: "Deadline Drifters",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://deadlinedrifters.in",
    title: "Deadline Drifters | Cricket Team",
    description: "Built After Deadlines. Feared Before Matchday. The official digital identity of the Deadline Drifters.",
    siteName: "Deadline Drifters",
    images: [{
      url: "/cricket-stadium.png",
      width: 1200,
      height: 630,
      alt: "Deadline Drifters Cricket Team"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deadline Drifters | Cricket Team",
    description: "Built After Deadlines. Feared Before Matchday. The official digital identity of the Deadline Drifters.",
    images: ["/cricket-stadium.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
