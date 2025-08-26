"use client";

import { FaStar } from "react-icons/fa";
import Image from 'next/image';
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

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      img: "https://picsum.photos/seed/user1/50/50.jpg",
      text: 'A velocidade do meu site aumentou 300% após migrar para a NeonHost. O suporte é incrível e sempre resolve minhas dúvidas rapidamente!',
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      img: "https://picsum.photos/seed/user2/50/50.jpg",
      text: 'Como desenvolvedor, preciso de uma hospedagem confiável. A NeonHost superou todas as minhas expectativas. Recomendo!',
      rating: 5,
    },
    {
      name: "Mariana Santos",
      img: "https://picsum.photos/seed/user3/50/50.jpg",
      text: 'Meu e-commerce nunca parou desde que migrei. O uptime é fantástico e a segurança me dá total tranquilidade.',
      rating: 5,
    },
  ];

  return (
    <Section id="testimonials" className="py-20 bg-black 100w 100h">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          O que nossos
          <span className="text-red-500 drop-shadow-[0_0_10px_red]">
            {" "}clientes dizem
          </span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Milhares de clientes confiam na NeonHost para seus projetos online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 p-6 rounded-2xl border border-red-900/30"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={t.img}
                  width={100}
                  height={100}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <div className="flex text-yellow-400">
                    {Array(t.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{`"${t.text}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
