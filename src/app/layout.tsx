import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  themeColor: "#080B12",
  colorScheme: "dark",
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
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080B12] text-[#F3F5FA] font-sans antialiased selection:bg-[#5B8CFF]/30 selection:text-[#F3F5FA] flex flex-col">
        {children}
      </body>
    </html>
  );
}
