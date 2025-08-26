// pages/checkout.tsx
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaServer, FaUser, FaMapMarkerAlt, FaCreditCard, FaShoppingBag, FaPlusCircle, FaPlus, FaMinus, FaCheckCircle, FaLock, FaMoneyCheckAlt, FaQrcode, FaBarcode, FaShieldAlt, FaHeadset, FaGlobe, FaGlobeAmericas, FaDatabase } from "react-icons/fa";

// ===== Styled Components =====

const darkBg = "#0a0a0a";
const neonRed = "#ff0000";
const neonRedLight = "#ff3333";
const cardBg = "#1a1a1a";

// Neon text
const NeonText = styled.span`
  color: ${neonRed};
  text-shadow: 0 0 10px ${neonRed},
               0 0 20px ${neonRed},
               0 0 30px ${neonRed},
               0 0 40px ${neonRed};
`;

// Neon border card
const NeonCard = styled.div`
  border: 2px solid ${neonRed};
  box-shadow: 0 0 10px ${neonRed}, inset 0 0 10px rgba(255,0,0,0.2);
  border-radius: 1rem;
  padding: 2rem;
  background: rgba(30,30,30,0.6);
`;

// Animated background
const bgMove = keyframes`
  0%, 100% { transform: translate(0,0) scale(1); }
  50% { transform: translate(-20px,-20px) scale(1.1); }
`;

const AnimatedBg = styled.div`
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  z-index: -1;
  background: radial-gradient(circle at 20% 50%, rgba(255,0,0,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,51,51,0.1) 0%, transparent 50%);
  animation: ${bgMove} 20s ease-in-out infinite;
`;

// Loader animation
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
`;

// Service Card
const ServiceCard = styled.div<{ selected?: boolean }>`
  background: ${({ selected }) => selected ? "rgba(255,0,0,0.15)" : "rgba(255,255,255,0.03)"};
  border: 1px solid ${({ selected }) => selected ? neonRed : "rgba(255,0,0,0.2)"};
  border-radius: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  gap: 1rem;

  &:hover {
    background: rgba(255,0,0,0.1);
    border-color: ${neonRed};
    transform: translateX(-5px);
  }

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ selected }) => selected ? "white" : neonRed};
    background: ${({ selected }) => selected ? neonRed : "rgba(255,0,0,0.1)"};
    transition: all 0.3s ease;
  }

  .check-icon {
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    color: #4ade80;
    opacity: ${({ selected }) => selected ? 1 : 0};
    transition: opacity 0.3s ease;
    font-size: 1.25rem;
  }
`;

// Payment method card
const PaymentCard = styled.div<{ selected?: boolean }>`
  background: ${({ selected }) => selected ? "rgba(255,0,0,0.15)" : "rgba(255,255,255,0.03)"};
  border: 1px solid ${({ selected }) => selected ? neonRed : "rgba(255,0,0,0.2)"};
  border-radius: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,0,0,0.05);
    border-color: ${neonRed};
  }

  input[type="radio"] {
    accent-color: ${neonRed};
  }
`;

// ===== React Component =====

interface Service {
  id: string;
  name: string;
  price: number;
  icon: JSX.Element;
}

export default function Checkout() {
  const [selectedServices, setSelectedServices] = useState<Record<string, number>>({});
  const [servicesPanelOpen, setServicesPanelOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("credit");

  const services: Service[] = [
    { id: "backup", name: "Backup Diário", price: 15, icon: <FaDatabase /> },
    { id: "ssl", name: "SSL Wildcard", price: 25, icon: <FaLock /> },
    { id: "cdn", name: "CDN Global", price: 20, icon: <FaGlobe /> },
    { id: "support", name: "Suporte Premium", price: 50, icon: <FaHeadset /> },
    { id: "domain", name: "Registro de Domínio", price: 35, icon: <FaGlobeAmericas /> },
  ];

  const basePrice = 49;

  const toggleService = (id: string, price: number) => {
    setSelectedServices(prev => {
      const newServices = { ...prev };
      if (newServices[id]) delete newServices[id];
      else newServices[id] = price;
      return newServices;
    });
  };

  const additionalTotal = Object.values(selectedServices).reduce((sum, p) => sum + p, 0);
  const subtotal = basePrice + additionalTotal;
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  return (
    <div className="relative text-white font-sans bg-black min-h-screen">
      <AnimatedBg />
      
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-red-900/30 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaServer className="text-3xl text-red-500" />
            <h1 className="text-2xl font-bold"><NeonText>NeonHostsgsdg</NeonText></h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Checkout</span>
            <i className="fas fa-shopping-cart text-xl neon-text"></i>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Personal Info */}
          <NeonCard>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaUser /><span>Informações Pessoais</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label>Nome Completo *</label>
                <input className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white" type="text" placeholder="João Silva" />
              </div>
              <div className="flex flex-col">
                <label>E-mail *</label>
                <input className="form-input px-3 py-2 rounded bg-gray-800/50 border border-red-700 text-white" type="email" placeholder="joao@exemplo.com" />
              </div>
            </div>
          </NeonCard>

          {/* Payment Method */}
          <NeonCard>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaCreditCard /><span>Forma de Pagamento</span></h2>
            <div className="space-y-4">
              <PaymentCard selected={selectedPayment === "credit"} onClick={() => setSelectedPayment("credit")}>
                <input type="radio" name="payment" value="credit" checked={selectedPayment === "credit"} readOnly />
                <FaCreditCard className="text-2xl" />
                <div>
                  <div className="font-semibold">Cartão de Crédito</div>
                  <div className="text-sm text-gray-400">Pague em até 12x</div>
                </div>
              </PaymentCard>
              <PaymentCard selected={selectedPayment === "debit"} onClick={() => setSelectedPayment("debit")}>
                <input type="radio" name="payment" value="debit" checked={selectedPayment === "debit"} readOnly />
                <FaMoneyCheckAlt className="text-2xl" />
                <div>
                  <div className="font-semibold">Cartão de Débito</div>
                  <div className="text-sm text-gray-400">Pagamento à vista</div>
                </div>
              </PaymentCard>
            </div>
          </NeonCard>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-8">
          {/* Cart Summary */}
          <NeonCard>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaShoppingBag /><span>Resumo do Pedido</span></h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Desconto (10%)</span>
              <span>- R$ {discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-700 font-bold text-lg">
              <span>Total</span>
              <NeonText>R$ {total.toFixed(2)}</NeonText>
            </div>

            <button 
              onClick={() => alert(`Pagamento com ${selectedPayment} confirmado!`)} 
              className="mt-6 w-full py-3 bg-red-600 hover:bg-red-700 rounded font-bold text-white transition-all"
            >
              Finalizar Pedido
            </button>
          </NeonCard>

          {/* Additional Services */}
          <NeonCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Serviços Adicionais</h3>
              <button onClick={() => setServicesPanelOpen(!servicesPanelOpen)}>
                {servicesPanelOpen ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {servicesPanelOpen && (
              <div className="space-y-4">
                {services.map(service => (
                  <ServiceCard
                    key={service.id}
                    selected={!!selectedServices[service.id]}
                    onClick={() => toggleService(service.id, service.price)}
                  >
                    <div className="icon">{service.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{service.name}</div>
                      <div className="text-gray-400">R$ {service.price.toFixed(2)}</div>
                    </div>
                    <FaCheckCircle className="check-icon" />
                  </ServiceCard>
                ))}
              </div>
            )}
          </NeonCard>
        </div>
      </main>
    </div>
  );
}