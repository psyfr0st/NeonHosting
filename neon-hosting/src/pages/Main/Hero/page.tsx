"use client";

import styled, { keyframes } from "styled-components";
import { FaRocket, FaBolt, FaPlay } from "react-icons/fa";

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000; -webkit-text-stroke: 1px #ff0000; }
  50% { text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; -webkit-text-stroke: 1px #ffffff; }
`;

const Section = styled.section`
  min-height: 100dvh;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  background: transparent;
  text-align: center;
`;

const FloatIcon = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  animation: ${float} 3s ease-in-out infinite;
`;

const NeonText = styled.span`
  color: #ff0000;
  text-shadow: 0 0 2px #ff0000, 0 0 5px #ff0000, 0 0 8px #ff0000,
    0 0 15px #ff0000;
  -webkit-text-stroke: 1px #ffffff;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const SubText = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 48rem;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NeonButton = styled.button`
  background: #ff0000;
  box-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }
`;

const OutlineButton = styled.button`
  border: 2px solid #ff0000;
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    background: rgba(255, 0, 0, 1);
    cursor: pointer;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureItem = styled.div`
  text-align: center;
`;

const FeatureValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff0000;
  animation: ${pulse} 2s infinite;
`;

const FeatureLabel = styled.div`
  color: #9ca3af;
`;

const NeonRocket = styled(FaRocket)`
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 0 2px #fff)
          drop-shadow(0 0 5px #ff0000);
`;

function Hero() {
  return (
    <Section id="hero">
      <div>
        <FloatIcon>
          <NeonRocket size={48} color="#ff0000" />
        </FloatIcon>
        <Heading>
          Hospedagem Web <NeonText>Ultra Rápida</NeonText>
        </Heading>
        <SubText>
          Potencialize seu site com nossa infraestrutura de última geração.
          99.9% de uptime, suporte 24/7 e velocidade impressionante.
        </SubText>

        <ButtonGroup>
          <NeonButton
            onClick={() => {
              const el = document.getElementById("plans");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <FaBolt /> Ver Planos
          </NeonButton>
          <OutlineButton>
            <FaPlay /> Assistir Demonstração
          </OutlineButton>
        </ButtonGroup>

        <FeatureGrid>
          <FeatureItem>
            <FeatureValue>99.9%</FeatureValue>
            <FeatureLabel>Uptime Garantido</FeatureLabel>
          </FeatureItem>
          <FeatureItem>
            <FeatureValue>24/7</FeatureValue>
            <FeatureLabel>Suporte Especializado</FeatureLabel>
          </FeatureItem>
          <FeatureItem>
            <FeatureValue>30s</FeatureValue>
            <FeatureLabel>Ativação Instantânea</FeatureLabel>
          </FeatureItem>
        </FeatureGrid>
      </div>
    </Section>
  );
}

export default Hero;
