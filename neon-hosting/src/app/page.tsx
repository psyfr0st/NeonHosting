"use client";

import react, { useState } from 'react'
import {
  GlobalStyle,
  ScrollStyle,
  ScrollSmooth,
} from "@/components/styles/global.style";
import NavBar from "@/components/ui/navBar";
import Footer from "@/components/ui/footer";
import Hero from "@/pages/Main/Hero/page";
import Plans from "@/pages/Main/Plans/page";
import Features from "@/pages/Main/Features/page";
import Testimonials from "@/pages/Main/Testimonials/page";
import FAQ from "@/pages/Main/FAQ/page";
import CTA from "@/pages/Main/CTA/page";
import TermsModal from '@/components/modals/Terms';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ScrollStyle />
      <ScrollSmooth />
      <NavBar />
      <div id="scroll-container">
        <Hero />
        <Plans />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer setOpen={setOpen} />
      </div>
      <TermsModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onAccept={() => {
          setOpen(false);
        }}
        justSee={true}
      />
    </>
  );
}
