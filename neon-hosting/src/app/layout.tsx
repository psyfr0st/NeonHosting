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
  title: "Neon Hosting - Hospedagem Premium e Escalável",
  description:
    "Hospedagem ultra rápida, segura e com tecnologia de ponta. Planos flexíveis ou pay-as-you-go — só paga pelo que usa. Escale seu projeto sem limites 🚀",
  keywords: [
    "hospedagem de sites",
    "web hosting rápido",
    "servidor dedicado",
    "cloud barato",
    "hospedagem segura",
    "neon hosting",
  ],
  authors: [{ name: "NeonCore Studios" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Neon Hosting - Escale Seu Projeto Sem Limites 🚀",
    description:
      "Velocidade, segurança e performance de topo. Escolha entre planos fixos ou flexíveis e tenha a liberdade de crescer quando precisar.",
    url: "https://host.neoncore.xyz",
    siteName: "Neon Hosting",
    images: [
      {
        url: "https://host.neoncore.xyz/sample.png",
        width: 1726,
        height: 1065,
        alt: "Prévia da Neon Hosting - Hospedagem Premium",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Hosting ⚡ Hospedagem Rápida e Segura",
    description:
      "Hospedagem escalável com performance profissional. Pague apenas pelo uso ou escolha um plano fixo sob medida para o seu projeto.",
    images: ["https://host.neoncore.xyz/sample.png"],
    creator: "@neoncorestudios",
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
