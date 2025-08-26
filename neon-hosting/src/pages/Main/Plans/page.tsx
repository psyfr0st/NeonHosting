"use client";

import { useState, useMemo } from "react";
import styled from "styled-components";
import { MediumButton } from "@/components/ui/buttons";
import PlanCard from "./plancard";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  background: black;
  text-align: center;
`;

export const defaultPlan = 1;

type DataPlans<S = string> = Record<string, {
  id: number,
  colorDesc: S,
  textColorDesc: S,
  content: Record<"fixed" | "payg", {
    title: S,
    price: S,
    period: S,
    desc: S,
    extraInfo: S | false,
    list: Array<S>
  }>
}>

const dataPlans: DataPlans = { // provisório (deve estar armazenado no banco de dados)
  standart: {
    id: 0, //Id para para definir as opções na página de carrinho
    colorDesc: "bg-zinc-700",
    textColorDesc: "text-white",
    content: {
      fixed: {
        title: "Básico",
        price: "9,99€",
        extraInfo: false,
        period: "mês",
        desc: "Recomendado para projetos pequenos",
        list: [
          "✅ 1 GB Espaço em Disco",
          "✅ 100 GB Tráfego Mensal",
          "✅ 1 Domínio",
          "❌ Suporte por email (limitado)"
        ]
      },
      payg: {
        title: "Starter",
        desc: "Mais Econômico",
        price: "0,25€",
        extraInfo: "~180€/mês (24/7)",
        period: "hora",
        list: [
          "✅ 1 vCPU",
          "✅ 2 GB RAM",
          "✅ 40 GB SSD",
          "✅ 2 TB Transferência",
          "✅ Pague apenas pelo uso",
        ]
      }
    }
  },
  profissional: {
    id: 1, //Id para para definir as opções na página de carrinho
    colorDesc: "bg-red-500",
    textColorDesc: "text-black",
    content: {
      fixed: {
        title: "Profissional",
        price: "29,99€",
        period: "mês",
        desc: "Mais Popular",
        extraInfo: false,
        list: [
          "✅ 50 GB Espaço em Disco",
          "✅ 1 TB Tráfego Mensal",
          "✅ 10 Domínios",
          "✅ 100 E-mails",
          "✅ Backup Diário",
          "✅ Suporte 24/7 por email/chat"
        ]
      },
      payg: {
        title: "Standard",
        price: "0,50€",
        period: "hora",
        desc: "Equilíbrio Perfeito",
        extraInfo: "~360€/mês (24/7)",
        list: [
          "✅ 2 vCPU",
          "✅ 4 GB RAM",
          "✅ 80 GB SSD",
          "✅ 4 TB Transferência",
          "✅ Auto-scaling",
          "✅ Monitoramento Avançado",
        ]
      }
    }
  },
  enterprise: {
    id: 2, //Id para para definir as opções na página de carrinho
    colorDesc: "bg-red-700",
    textColorDesc: "text-white",
    content: {
      fixed: {
        title: "Enterprise",
        period: "mês",
        price: "69,99€",
        desc: "Recomendado para empresas",
        extraInfo: false,
        list: [
          "✅ 100 GB Espaço",
          "✅ Tráfego Ilimitado",
          "✅ Domínios Ilimitados",
          "✅ E-mails Ilimitados",
          "✅ SSL + Firewall Avançado",
          "✅ Backups horários + retenção de 30 dias",
          "✅ Gestor de conta dedicado + suporte 24/7",
        ]
      },
      payg: {
        title: "Performance",
        period: "ano",
        price: "1,00€",
        desc: "Alto Desempenho",
        extraInfo: "~1.080€/mês (24/7)",
        list: [
          "✅ 4 vCPU",
          "✅ 8 GB RAM",
          "✅ 160 GB SSD NVMe",
          "✅ 8 TB Transferência",
          "✅ Load Balancer",
          "✅ Suporte 24/7 Prioritário",
        ]
      }
    }
  }
};

const planButtons = {
  fixed: "Selecionar Plano",
  payg: "Começar Agora"
}

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
          {Object.entries(dataPlans).map(([_, { id, colorDesc, textColorDesc, content }]) => {
            const data = useMemo(() => content[planType], [planType]);

            return (<PlanCard 
              key={`plan.${id}`}
              {...{ id, colorDesc, textColorDesc, ...data, planType}}
            />);
          })}
        </div>
      </div>
    </Section>
  );
}
