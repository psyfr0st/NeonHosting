"use client";

import Link from "next/link";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaServer,
  FaExclamationTriangle,
  FaHome,
  FaArrowLeft,
  FaSearch,
  FaCogs,
  FaHeadset,
  FaRobot,
  FaExternalLinkAlt,
} from "react-icons/fa";
import NavBar from "@/components/ui/navBar";
import { DefaultButton, LargeLink } from "@/components/ui/buttons";

// === 🔥 Keyframes para neon, glitch, etc ===
const glitch = keyframes`
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(40px) rotate(0deg); }
  50% { transform: translateY(80px) rotate(5deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

// === 🔥 Styled Components customizados ===
const NeonText = styled.span`
  color: #ff0000;
  -webkit-text-stroke: 1px #ffffff;
  text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000,
    0 0 40px #ff0000;
`;

const ErrorCode = styled.div`
  font-size: clamp(8rem, 20vw, 15rem);
  font-weight: 900;
  line-height: 1;
  position: relative;
  display: inline-block;
  color: #ff0000;
  -webkit-text-stroke: 1px #ffffff;
  text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000,
    0 0 40px #ff0000;
  animation: ${glitch} 2s infinite;
`;

const FloatIcon = styled.div`
  animation: ${float} 6s ease-in-out infinite;
`;

const Pulse = styled.div`
  animation: ${pulse} 2s ease-in-out infinite;
`;

export default function NotFound() {
  useEffect(() => {
    const binaryRain = document.getElementById("binaryRain");
    if (!binaryRain) return;
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
      const column = document.createElement("div");
      column.style.position = "absolute";
      column.style.top = "-100%";
      column.style.left = `${i * 20}px`;
      column.style.color = "rgba(255,0,0,0.3)";
      column.style.fontFamily = "monospace";
      column.style.fontSize = "14px";
      column.style.animation = `rain ${Math.random() * 3 + 2}s linear ${
        Math.random() * 2
      }s infinite`;

      let binary = "";
      for (let j = 0; j < 20; j++) {
        binary += Math.random() > 0.5 ? "1" : "0";
        binary += j < 19 ? "\n" : "";
      }
      column.textContent = binary;
      binaryRain.appendChild(column);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,0,0,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,51,51,0.1)_0%,transparent_50%)] -z-10" />
      <div
        id="binaryRain"
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      />

      {/* Header */}
      <NavBar />

      {/* Main */}
      <main className="flex-1 flex items-center justify-center pt-20 pb-12">
        <div className="container mx-auto px-6 text-center">
          <FloatIcon className="mb-8">
            <FaExclamationTriangle className="text-8xl text-red-500 drop-shadow-[0_0_20px_#ff0000]" />
          </FloatIcon>

          <ErrorCode>404</ErrorCode>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            💥 Ops! Parece que a internet{" "}
            <NeonText>comeu essa página ☠️</NeonText>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ela desapareceu, se escondeu ou decidiu nunca existir. Hora de
            voltar para a superfície digital!
          </p>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <LargeLink Icon={FaHome} value="Voltar ao Início" href="/"/>
            <button
              onClick={() => window.history.back()}
              className="border-2 border-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500/10 transition-all inline-flex items-center justify-center"
            >
              <FaArrowLeft className="mr-2" /> Voltar à Página Anterior
            </button>
          </div>

          {/* Suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              onClick={() => (window.location.href = "/planos")}
              className="relative bg-white/5 border border-red-500/30 rounded-xl p-6 hover:bg-red-500/10 transition cursor-pointer"
            >
              <FaExternalLinkAlt className="absolute top-4 right-4 text-white-500" />
              <FaServer className="text-3xl text-red-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Planos de Hospedagem</h4>
              <p className="text-gray-400">Conheça nossos planos flexíveis</p>
            </div>
            <div
              onClick={() => (window.location.href = "/recursos")}
              className="relative bg-white/5 border border-red-500/30 rounded-xl p-6 hover:bg-red-500/10 transition cursor-pointer"
            >
              <FaExternalLinkAlt className="absolute top-4 right-4 text-white-500" />
              <FaCogs className="text-3xl text-red-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Recursos</h4>
              <p className="text-gray-400">
                Descubra todos os recursos exclusivos
              </p>
            </div>
            <div
              onClick={() => (window.location.href = "/suporte")}
              className="relative bg-white/5 border border-red-500/30 rounded-xl p-6 hover:bg-red-500/10 transition cursor-pointer"
            >
              <FaExternalLinkAlt className="absolute top-4 right-4 text-white-500" />
              <FaHeadset className="text-3xl text-red-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Suporte</h4>
              <p className="text-gray-400">
                Fale com nossa equipe especializada
              </p>
            </div>
          </div>

          {/* Fun animation */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <Pulse>
              <FaRobot className="text-6xl text-red-500 drop-shadow-[0_0_20px_#ff0000]" />
            </Pulse>
            <p className="text-gray-400 text-lg">
              Nosso robô está trabalhando para consertar isso...{" "}
              <span className="animate-pulse">🔧</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-red-900/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaServer className="text-2xl text-red-500 drop-shadow-[0_0_10px_#ff0000]" />
            <h3 className="text-xl font-bold">
              <NeonText>NeonHost</NeonText>
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            Hospedagem web de alta performance para o seu negócio decolar.
          </p>
          <p className="text-gray-500 text-sm mt-6">
            &copy; 2024 NeonHost. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
