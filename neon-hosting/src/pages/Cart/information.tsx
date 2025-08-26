"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

// ===== Styled Components =====
const neonRed = "#ff0000";

const NeonCard = styled.div`
  border: 2px solid ${neonRed};
  box-shadow: 0 0 10px ${neonRed}, inset 0 0 10px rgba(255, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  background: rgba(30, 30, 30, 0.6);
`;

const InfoElement = ({
  CardElement,
  selectedCountry,
  setSelectedCountry,
  formData,
  setFormData,
}: any) => {
  const countries = ["Brasil", "Portugal", "EUA", "Canadá"];

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const formatIdNumber = (value: string) => {
    if (selectedCountry === "Brasil") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else if (selectedCountry === "Portugal") {
      return value.replace(/\D/g, "").slice(0, 9);
    } else if (selectedCountry === "EUA") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(\d{2})(\d)/, "$1-$2")
        .slice(0, 11);
    } else if (selectedCountry === "Canadá") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .slice(0, 11);
    }
    return value;
  };

  return (
    <div className="min-w-[100dvw] min-h-[100dvh] bg-[#0a0a0a] text-white relative overflow-x-hidden flex flex-col lg:flex-row">
      {/* Formulário lado esquerdo */}
      <div className="w-full lg:w-1/1 px-6 py-8">
        <NeonCard>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FaUser /> Informações Pessoais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="flex flex-col">
              <label>Nome Completo *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white"
                placeholder="João Silva"
              />
            </div>
            {/* E-mail */}
            <div className="flex flex-col">
              <label>E-mail *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white"
                placeholder="joao@exemplo.com"
              />
            </div>
            {/* Celphone */}
            <div className="flex flex-col">
              <label>Cellphone *</label>
              <input
                type="celfone"
                value={formData.celNumber}
                onChange={(e) => handleChange("celNumber", e.target.value)}
                className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white"
                placeholder={
                  selectedCountry === "Brasil"
                    ? "(99) 9999-9999"
                    : selectedCountry === "Portugal"
                    ? "999 999 999"
                    : selectedCountry === "EUA"
                    ? "999 999 999"
                    : "999 999 999"
                }
              />
            </div>
            {/* ID / CPF */}
            <div className="flex flex-col">
              <label>
                {selectedCountry === "Brasil"
                  ? "CPF"
                  : selectedCountry === "Portugal"
                  ? "NIF"
                  : selectedCountry === "EUA"
                  ? "SSN"
                  : "SIN"}
              </label>
              <input
                type="text"
                value={formData.idNumber}
                onChange={(e) =>
                  handleChange("idNumber", formatIdNumber(e.target.value))
                }
                className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white"
                placeholder={
                  selectedCountry === "Brasil"
                    ? "000.000.000-00"
                    : selectedCountry === "Portugal"
                    ? "NIF"
                    : selectedCountry === "EUA"
                    ? "SSN"
                    : "SIN"
                }
              />
            </div>
            {/* País */}
            <div className="flex flex-col">
              <label>País *</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="appearance-none w-full px-4 py-2 rounded bg-gray-800/80 border border-red-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              >
                {countries.map((country) => (
                  <option
                    key={country}
                    value={country}
                    className="bg-gray-800 text-white"
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>
            {/* Localidade */}
            <div className="flex flex-col">
              <label>Localidade *</label>
              <input
                type="text"
                value={formData.localidade}
                onChange={(e) => handleChange("localidade", e.target.value)}
                className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white"
                placeholder={
                  selectedCountry === "Brasil"
                    ? "Rio de Janeiro"
                    : selectedCountry === "Portugal"
                    ? "Lisboa"
                    : selectedCountry === "EUA"
                    ? "Los Angeles"
                    : "Coimbra"
                }
              />
            </div>
            {/* CEP */}
            <div className="flex flex-col">
              <label>
                {selectedCountry === "Brasil"
                  ? "CEP *"
                  : selectedCountry === "Portugal"
                  ? "Código Postal *"
                  : selectedCountry === "EUA"
                  ? "CEP *"
                  : "CEP *"}
              </label>
              <input
                type="text"
                value={formData.cep}
                onChange={(e) => handleChange("cep", e.target.value)}
                className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white"
                placeholder="00000-000"
              />
            </div>
            {/* Data de nascimento */}
            <div className="flex flex-col md:col-span-1">
              <label>Data de Nascimento *</label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleChange("birthDate", e.target.value)}
                max={
                  new Date(
                    new Date().setFullYear(new Date().getFullYear() - 18)
                  )
                    .toISOString()
                    .split("T")[0]
                }
                className="w-full px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </NeonCard>
      </div>

      {/* CardElement lado direito */}
      <div className="w-full lg:w-1/2 px-6 py-8">{CardElement}</div>
    </div>
  );
};

export default InfoElement;
