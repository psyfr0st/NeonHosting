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
  title: "Neon Hosting - Web Hosting",
  description: "Hospedagem rápida, segura e escalável. Pague apenas pelo uso ou Planos Fixos.",
  keywords: ["web hosting", "servidor barato", "hospedagem"],
  authors: [{ name: "NeonCore" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Neon Hosting",
    description: "Hospedagem escalável com performance de topo 🚀",
    url: "https://neoncore.xyz",
    siteName: "Neon Hosting",
    images: [
      {
        url: "https://neoncore.xyz/sample.png",
        width: 512,
        height: 512,
        alt: "Neon Hosting Preview",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Hosting",
    description: "Hospedagem escalável com performance de topo 🚀",
    images: ["https://neoncore.xyz/sample.png"],
    creator: "@neonforge",
  },
  icons: {
    icon: "/favicon.ico",
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
