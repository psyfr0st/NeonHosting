"use client";
import React, { useState } from "react";

// Dados
interface Language {
  code: string;
  label: string;
  flag: string;
  region: string;
}

interface Currency {
  code: string;
  symbol: string;
  name: string;
}

const languages: Language[] = [
  {
    code: "pt",
    label: "Português",
    flag: "https://flagcdn.com/w40/pt.png",
    region: "Portugal",
  },
  {
    code: "br",
    label: "Português BR",
    flag: "https://flagcdn.com/w40/br.png",
    region: "Brasil",
  },
  {
    code: "en",
    label: "English US",
    flag: "https://flagcdn.com/w40/us.png",
    region: "United States",
  },
  {
    code: "uk",
    label: "English UK",
    flag: "https://flagcdn.com/w40/gb.png",
    region: "United Kingdom",
  },
  {
    code: "es",
    label: "Español",
    flag: "https://flagcdn.com/w40/es.png",
    region: "España",
  },
  {
    code: "fr",
    label: "Français",
    flag: "https://flagcdn.com/w40/fr.png",
    region: "France",
  },
];

const currencies: Currency[] = [
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "BRL", symbol: "R$", name: "Real" },
  { code: "GBP", symbol: "£", name: "Libra" },
  { code: "USD", symbol: "$", name: "Dollar" },
];

const LanguageCurrencySelector: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);

  return (
    <div className="flex items-center">
      {/* Language Dropdown */}
      <div className="relative">
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-l-lg bg-white/5 border-t border-b border-l border-red-900/30 hover:bg-red-500/10 hover:border-red-500 transition-all h-10"
        >
          <img
            src={currentLang.flag}
            alt={currentLang.label}
            className="w-6 h-4 object-cover rounded-sm"
          />
          <span className="text-sm font-medium">
            {currentLang.code.toUpperCase()}
          </span>
          <i
            className={`fas fa-chevron-down text-xs transition-transform ${
              langOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`absolute top-full right-0 mt-2 min-w-[200px] bg-[#1a1a1a]/95 backdrop-blur-sm border border-red-900/30 rounded-xl shadow-lg z-50 transition-all ${
            langOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang);
                setLangOpen(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-lg m-1 cursor-pointer transition-all ${
                currentLang.code === lang.code
                  ? "bg-red-900/20 border-l-3 border-red-500"
                  : "hover:bg-red-500/10 hover:translate-x-1"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-6 h-4 object-cover rounded-sm"
              />
              <div>
                <div className="font-medium text-white">{lang.label}</div>
                <div className="text-xs text-gray-400">{lang.region}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currency Dropdown */}
      <div className="relative">
        <button
          onClick={() => setCurrOpen(!currOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-r-lg bg-white/5 border-t border-b border-r border-red-900/30 hover:bg-red-500/10 hover:border-red-500 transition-all h-10"
        >
          <span className="text-sm font-medium">
            {currentCurrency.symbol} ({currentCurrency.code})
          </span>
          <i
            className={`fas fa-chevron-down text-xs transition-transform ${
              currOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`absolute top-full right-0 mt-2 min-w-[150px] bg-[#1a1a1a]/95 backdrop-blur-sm border border-red-900/30 rounded-xl shadow-lg z-50 transition-all ${
            currOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {currencies.map((curr) => (
            <div
              key={curr.code}
              onClick={() => {
                setCurrentCurrency(curr);
                setCurrOpen(false);
              }}
              className={`flex items-center justify-between p-3 rounded-lg m-1 cursor-pointer transition-all ${
                currentCurrency.code === curr.code
                  ? "bg-red-900/20 border-l-3 border-red-500"
                  : "hover:bg-red-500/10 hover:translate-x-1"
              }`}
            >
              <span className="text-white">{curr.symbol}</span>
              <span className="text-xs text-gray-400">{curr.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageCurrencySelector;
