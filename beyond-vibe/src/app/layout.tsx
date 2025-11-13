import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beyond Vibe Coding | Leverage AI-Assisted Development",
  description:
    "Discover Beyond Vibe Coding, a practical guide by Jason Bloom that shows software teams how to integrate AI into their development workflows with clarity, guardrails, and measurable impact.",
  openGraph: {
    title: "Beyond Vibe Coding",
    description:
      "Practical frameworks, playbooks, and tooling suggestions to help your team build software with AI—without sinking into chaos.",
    url: "https://agentic-74b984d2.vercel.app",
    siteName: "Beyond Vibe Coding",
    images: [
      {
        url: "/beyond-vibe-cover.jpg",
        width: 1200,
        height: 1800,
        alt: "Beyond Vibe Coding hardcover by Jason Bloom.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://agentic-74b984d2.vercel.app"),
  alternates: {
    canonical: "https://agentic-74b984d2.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Vibe Coding",
    description:
      "A pragmatic handbook for engineering leaders integrating AI-assisted development.",
    images: ["/beyond-vibe-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
