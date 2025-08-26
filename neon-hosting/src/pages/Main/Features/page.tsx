"use client";
import { 
  FaTachometerAlt, 
  FaShieldAlt, 
  FaExpandArrowsAlt, 
  FaChartLine, 
  FaLeaf, 
  FaHeadset 
} from "react-icons/fa";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  background: transparent;
  text-align: center;
`;

export default function Features() {
  const features = [
    {
      icon: <FaTachometerAlt />,
      title: "Ultra Rápido",
      desc: "Servidores SSD NVMe com cache avançado para carregamento instantâneo.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Segurança Máxima",
      desc: "Firewall avançado, proteção DDoS e monitoramento 24/7.",
    },
    {
      icon: <FaExpandArrowsAlt />,
      title: "Escalável",
      desc: "Aumente recursos conforme seu negócio cresce, sem interrupções.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Avançado",
      desc: "Painel completo com métricas detalhadas do seu site.",
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      desc: "Data centers movidos a energia renovável e carbono neutro.",
    },
    {
      icon: <FaHeadset />,
      title: "Suporte Premium",
      desc: "Equipe especializada disponível 24/7 via chat, telefone e e-mail.",
    },
  ];

  return (
    <Section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Recursos <span className="text-red-500 drop-shadow-[0_0_10px_red]">Exclusivos</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Tecnologia de ponta para garantir o melhor desempenho do seu site.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/50 hover:bg-red-500/10 transition-all"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-red-500/10 text-red-500 drop-shadow-[0_0_10px_red] text-4xl">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}