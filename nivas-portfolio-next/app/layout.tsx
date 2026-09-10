import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecruiterMode from "@/components/RecruiterMode";
import AIAssistant from "@/components/AIAssistant";
import LoadingScreen from "@/components/LoadingScreen";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Shanaboina Nivas — Building AI, Educational & Productivity Platforms",
  description:
    "Nivas — Computer Science Engineering (AI & ML) student building AI, educational and productivity platforms with Flutter, Python and Full Stack technologies.",
  metadataBase: new URL("https://nivas.dev"),
  openGraph: {
    title: "Shanaboina Nivas — Developer Portfolio",
    description: "Building AI, Educational & Productivity Platforms Through Modern Technologies",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-bg-primary text-white antialiased">
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
        <RecruiterMode />
        <AIAssistant />
      </body>
    </html>
  );
}
