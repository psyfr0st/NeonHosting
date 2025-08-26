"use client";

import styled, { keyframes } from "styled-components";
import { FaBars, FaServer } from "react-icons/fa";
import { useState } from "react";
import Icon from '@/../public/NH.webp'
import Image from "next/image";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-red-900/30">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={Icon} width={50} height={50} alt="logo" className="drop-shadow-[0_0_10px_#ff0000]"/>
            <h1 className="text-2xl font-bold text-red-500 drop-shadow-[0_0_10px_red]">
              NeonHost
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#plans" className="hover:text-red-400 transition-colors">
              Planos
            </a>
            <a
              href="#features"
              className="hover:text-red-400 transition-colors"
            >
              Recursos
            </a>
            <a
              href="#testimonials"
              className="hover:text-red-400 transition-colors"
            >
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-red-400 transition-colors">
              FAQ
            </a>
            <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded-full shadow-[0_0_20px_red] transition-all">
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl hover:text-red-500 hover:cursor-pointer transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md transition-all">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#plans"
              className="block hover:text-red-400 transition-colors"
            >
              Planos
            </a>
            <a
              href="#features"
              className="block hover:text-red-400 transition-colors"
            >
              Recursos
            </a>
            <a
              href="#testimonials"
              className="block hover:text-red-400 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="block hover:text-red-400 transition-colors"
            >
              FAQ
            </a>
            <button className="w-full bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded-full shadow-[0_0_20px_red] transition-all">
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
