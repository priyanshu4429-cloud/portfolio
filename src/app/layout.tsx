import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Priyanshu Kumar — Developer | AI Builder | Aspiring Founder",
  description:
    "Official developer portfolio of Priyanshu Kumar. Second-year B.Tech CSE student at MCKV Institute of Engineering, Smart India Hackathon 2026 Grand Finale finalist, specializing in frontend engineering and AI-assisted software applications.",
  keywords: [
    "Priyanshu Kumar",
    "Developer",
    "AI Builder",
    "Frontend Engineer",
    "Smart India Hackathon 2026",
    "React",
    "TypeScript",
    "Next.js",
    "MCKV Institute of Engineering",
    "Veyra Sentinel",
    "TrustTrace",
  ],
  authors: [{ name: "Priyanshu Kumar", url: "https://github.com/priyanshu4429-cloud" }],
  creator: "Priyanshu Kumar",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Priyanshu Kumar — Developer | AI Builder | Aspiring Founder",
    description:
      "Frontend developer and AI builder. SIH 2026 Grand Finale finalist, B.Tech CSE student at MCKV Institute of Engineering.",
    siteName: "Priyanshu Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Kumar — Developer | AI Builder | Aspiring Founder",
    description:
      "Frontend developer and AI builder. SIH 2026 Grand Finale finalist, B.Tech CSE student at MCKV Institute of Engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#111318] font-sans antialiased selection:bg-[#111318] selection:text-white flex flex-col">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
