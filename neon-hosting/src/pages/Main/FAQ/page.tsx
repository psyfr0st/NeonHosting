"use client";
import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaServer, FaClock, FaLock, FaDatabase } from "react-icons/fa";

const FAQItem = styled.div`
  .faq-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.3s ease;
    opacity: 0;
  }

  &.open .faq-content {
    max-height: 500px; /* valor grande o suficiente */
    opacity: 1;
  }

  .chevron {
    transition: transform 0.3s ease;
  }

  &.open .chevron {
    transform: rotate(180deg);
  }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  background: transparent;
  text-align: center;
`;

const faqs = [
    {
      question: "Como funciona a migração do meu site?",
      answer:
        "Oferecemos migração gratuita para todos os novos clientes. Nossa equipe especializada cuida de todo o processo, garantindo zero downtime e integridade total dos seus dados.",
      icon: <FaServer className="text-red-500 w-5 h-5 mr-2" />,
    },
    {
      question: "Qual é o tempo de ativação da conta?",
      answer:
        "Sua conta é ativada instantaneamente após a confirmação do pagamento. Você receberá todos os dados de acesso por e-mail em menos de 30 segundos.",
      icon: <FaClock className="text-red-500 w-5 h-5 mr-2" />,
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim! Você pode cancelar seu plano a qualquer momento sem taxas adicionais. Oferecemos garantia de 30 dias para reembolso total caso não fique satisfeito.",
      icon: <FaLock className="text-red-500 w-5 h-5 mr-2" />,
    },
    {
      question: "Vocês oferecem backup dos meus dados?",
      answer:
        "Sim! Realizamos backups automáticos diários de todos os planos. Nos planos Profissional e Enterprise, você também pode restaurar backups diretamente do painel de controle.",
      icon: <FaDatabase className="text-red-500 w-5 h-5 mr-2" />,
    },
  ];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Perguntas <span className="neon-text">Frequentes</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              className={`faq-item bg-gray-900/50 rounded-lg overflow-hidden ${
                openIndex === index ? "open" : ""
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-red-500/10 transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  {faq.icon}
                  <span className="font-semibold">{faq.question}</span>
                </div>
                <FaChevronDown className="chevron w-4 h-4" />
              </button>
              <div className="faq-content px-6 pb-4">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </FAQItem>
          ))}
        </div>
      </div>
    </Section>
  );
}