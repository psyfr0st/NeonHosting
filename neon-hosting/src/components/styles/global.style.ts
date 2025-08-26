"use client";
import wallpaper from "@/../public/wpp.png";
import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${wallpaper.src});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        scroll-behavior: smooth;
        color: #ffffff;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        overflow-x: hidden;
    }

    /* Scrollbar neon vermelho */
    body::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track {
        background: #000;
        border-radius: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background: #ff0000;
        border-radius: 10px;
        box-shadow: 0 0 8px #ff0000, 0 0 16px #ff0000;
    }

    body::-webkit-scrollbar-thumb:hover {
        background: #ff4d4d;
        box-shadow: 0 0 12px #ff4d4d, 0 0 24px #ff4d4d;
    }
`;

export const ScrollStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth; /* smooth scroll global */
  }
`;

export const ScrollSmooth = createGlobalStyle`
  html, body {
    height: 100%;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    #scroll-container {
      overflow-y: auto;
      height: 100%;
    }
  }

   /* aplica só em telas >= 768px */
  @media screen and (min-width: 768px) {
    #scroll-container {
      height: 100dvh; /* cada página ocupa a tela inteira */
      overflow-y: auto;
      scroll-snap-type: y mandatory; /* snap vertical obrigatório */
      scroll-behavior: smooth; /* scroll suave */
    }
    
    section {
      scroll-snap-align: center; /* centraliza a seção */
      scroll-snap-stop: always; /* garante que sempre para */
    }
  }
`;
