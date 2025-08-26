"use client";

import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  background: black;
  text-align: center;
`;

export default function Plans() {
  const [planType, setPlanType] = useState<"fixed" | "payg">("fixed");

  return (
    <Section id="plans" className="py-20">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Escolha seu{" "}
          <span className="text-red-500 drop-shadow-[0_0_8px_#ff0000]">
            Plano
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Planos flexíveis para todos os tipos de necessidades. <br />
          Comece pequeno e cresça conosco.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`cursor-pointer font-semibold ${
              planType === "fixed" ? "text-red-500" : "text-gray-400"
            }`}
            onClick={() => setPlanType("fixed")}
          >
            Plano Fixo
          </span>

          <div
            className="w-14 h-7 bg-gray-700 rounded-full flex items-center cursor-pointer relative"
            onClick={() => setPlanType(planType === "fixed" ? "payg" : "fixed")}
          >
            <div
              className={`w-6 h-6 rounded-full bg-red-500 absolute transition-all ${
                planType === "fixed" ? "left-1" : "left-7"
              }`}
            ></div>
          </div>

          <span
            className={`cursor-pointer font-semibold ${
              planType === "payg" ? "text-red-500" : "text-gray-400"
            }`}
            onClick={() => setPlanType("payg")}
          >
            Pay-as-you-go
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planType === "fixed" ? (
            <>
              {/* Plano Básico */}
              <div className="relative rounded-2xl p-8 bg-zinc-900 border border-zinc-800 flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-700 text-white text-xs px-3 py-1 rounded-full">
                  Recomendado para projetos pequenos
                </div>
                <h3 className="text-2xl font-bold mb-4">Básico</h3>
                <div className="text-4xl font-bold mb-6">
                  9,99€ <span className="text-lg text-gray-400">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✅ 1 GB Espaço em Disco</li>
                  <li>✅ 100 GB Tráfego Mensal</li>
                  <li>✅ 1 Domínio</li>
                  <li>❌ Suporte por email (limitado)</li>
                </ul>
                <button className="hover:cursor-pointer mt-auto w-full border-2 border-red-500 py-3 rounded-full hover:bg-red-500/50 transition-all">
                  Selecionar Plano
                </button>
              </div>

              {/* Profissional */}
              <div className="rounded-2xl p-8 bg-zinc-900 border border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.4)] relative flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-black text-xs px-3 py-1 rounded-full">
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Profissional</h3>
                <div className="text-4xl font-bold mb-6">
                  29,99€ <span className="text-lg text-gray-400">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✅ 50 GB Espaço em Disco</li>
                  <li>✅ 1 TB Tráfego Mensal</li>
                  <li>✅ 10 Domínios</li>
                  <li>✅ 100 E-mails</li>
                  <li>✅ Backup Diário</li>
                  <li>✅ Suporte 24/7 por email/chat</li>
                </ul>
                <button className="hover:cursor-pointer mt-auto w-full bg-red-500 py-3 rounded-full text-black font-semibold hover:bg-red-700 transition-all">
                  Selecionar Plano
                </button>
              </div>

              {/* Enterprise */}
              <div className="relative rounded-2xl p-8 bg-zinc-900 border border-zinc-800 flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-700 text-white text-xs px-3 py-1 rounded-full">
                  Recomendado para empresas
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold mb-6">
                  69,99€ <span className="text-lg text-gray-400">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✅ 100 GB Espaço</li>
                  <li>✅ Tráfego Ilimitado</li>
                  <li>✅ Domínios Ilimitados</li>
                  <li>✅ E-mails Ilimitados</li>
                  <li>✅ SSL + Firewall Avançado</li>
                  <li>✅ Backups horários + retenção de 30 dias</li>
                  <li>✅ Gestor de conta dedicado + suporte 24/7</li>
                </ul>
                <button className="hover:cursor-pointer mt-auto w-full border-2 border-red-500 py-3 rounded-full hover:bg-red-500/50 transition-all">
                  Selecionar Plano
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Starter */}
              <div className="rounded-2xl p-8 bg-zinc-900 border border-zinc-800 shadow-lg shadow-zinc-800/40 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-700 text-white text-xs px-3 py-1 rounded-full">
                  Mais Econômico
                </div>
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold mb-2">
                  0,25€ <span className="text-lg text-gray-400">/hora</span>
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  ~180€/mês (24/7)
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✅ 1 vCPU</li>
                  <li>✅ 2 GB RAM</li>
                  <li>✅ 40 GB SSD</li>
                  <li>✅ 2 TB Transferência</li>
                  <li>✅ Pague apenas pelo uso</li>
                </ul>
                <button className="hover:cursor-pointer mt-auto w-full border-2 border-red-500 py-3 rounded-full hover:bg-red-500/50 transition-all">
                  Começar Agora
                </button>
              </div>

              {/* Standard */}
              <div className="rounded-2xl p-8 bg-zinc-900 border border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.5)] relative flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-black text-xs px-3 py-1 rounded-full">
                  Equilíbrio Perfeito
                </div>
                <h3 className="text-2xl font-bold mb-4">Standard</h3>
                <div className="text-4xl font-bold mb-2">
                  0,50€ <span className="text-lg text-gray-400">/hora</span>
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  ~360€/mês (24/7)
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✅ 2 vCPU</li>
                  <li>✅ 4 GB RAM</li>
                  <li>✅ 80 GB SSD</li>
                  <li>✅ 4 TB Transferência</li>
                  <li>✅ Auto-scaling</li>
                  <li>✅ Monitoramento Avançado</li>
                </ul>
                <button className="hover:cursor-pointer mt-auto w-full bg-red-500 py-3 rounded-full text-black font-semibold hover:bg-red-700 transition-all">
                  Começar Agora
                </button>
              </div>

              {/* Performance */}
              <div className="rounded-2xl p-8 bg-zinc-900 border border-zinc-800 shadow-lg shadow-zinc-800/40 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-700 text-white text-xs px-3 py-1 rounded-full">
                  Alto Desempenho
                </div>
                <h3 className="text-2xl font-bold mb-4">Performance</h3>
                <div className="text-4xl font-bold mb-2">
                  1,00€ <span className="text-lg text-gray-400">/hora</span>
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  ~1.080€/mês (24/7)
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✅ 4 vCPU</li>
                  <li>✅ 8 GB RAM</li>
                  <li>✅ 160 GB SSD NVMe</li>
                  <li>✅ 8 TB Transferência</li>
                  <li>✅ Load Balancer</li>
                  <li>✅ Suporte 24/7 Prioritário</li>
                </ul>
                <button className="hover:cursor-pointer mt-auto w-full border-2 border-red-500 py-3 rounded-full hover:bg-red-500/50 transition-all">
                  Começar Agora
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
