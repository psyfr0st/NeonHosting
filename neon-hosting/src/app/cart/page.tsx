"use client";

import React, { useState } from "react";
import Stepper from "@/components/ui/stepper";
import {
  FaDatabase,
  FaLock,
  FaHeadset,
  FaGlobeAmericas,
  FaHdd,
  FaNetworkWired,
  FaChartLine,
  FaShieldAlt,
  FaServer,
  FaMapMarkerAlt,
  FaAddressCard,
  FaPlusCircle,
  FaShoppingBag,
  FaLock as FaLockIcon,
  FaMoneyCheckAlt,
  FaCheck,
  FaUser,
  FaShoppingCart,
  FaCreditCard,
} from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiFillBank } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";

import CartElement from "@/pages/Cart/cart";
import CartSummary from "@/pages/Cart/details";

const servicesData = [
  {
    id: "backup",
    title: "Backup Diário",
    Icon: <FaDatabase />,
    period: "/mês",
    price: 9.99,
    desc: "Backup automático diário com retenção de 30 dias",
  },
  {
    id: "ssl",
    title: "SSL",
    Icon: <FaLock />,
    desc: "Adicione certificados para seus domínios",
    options: [
      {
        name: "Mensal",
        price: 9.99,
        desc: "Certificado SSL para todos os seus domínios (renovação mensal)",
        period: "/mês",
      },
      {
        name: "Anual",
        price: 49.99,
        desc: "Certificado SSL para todos os seus domínios (renovação anual)",
        period: "/ano",
      },
      {
        name: "Lifetime",
        price: 99.99,
        desc: "Certificado SSL para todos os seus domínios (Pague apenas 1x)",
        period: "/lifetime",
      },
    ],
  },
  {
    id: "support",
    title: "Suporte",
    Icon: <FaHeadset />,
    options: [
      {
        name: "Standard",
        price: 19.99,
        desc: "Atendimento 24/7 em fila de espera",
        period: "/mês",
      },
      {
        name: "Premium",
        price: 39.99,
        desc: "Atendimento prioritário 24/7 com tempo de resposta garantido",
        period: "/mês",
      },
    ],
  },
  {
    id: "email",
    title: "Email",
    Icon: <FaGlobeAmericas />,
    options: [
      {
        name: "Standard",
        price: 9.99,
        quantity: "1",
        desc: "1 conta de email com o seu domínio",
        period: "/mês",
      },
      {
        name: "Profissional",
        price: 24.99,
        quantity: "5",
        desc: "5 contas de email com o seu domínio",
        period: "/mês",
      },
      {
        name: "Enterprise",
        price: 39.99,
        quantity: "20",
        desc: "20 contas de email com o seu domínio",
        period: "/mês",
      },
    ],
  },
  {
    id: "storage.extra",
    title: "Armazenamento Extra",
    Icon: <FaHdd />,
    desc: "Espaço adicional para o seu projeto",
    options: [
      {
        name: "Standard",
        price: 9.99,
        quantity: "+25GB",
        desc: "Adição de +25GB de espaço interno do projeto",
        period: "/mês",
      },
      {
        name: "Profissional",
        price: 19.99,
        quantity: "+50Gb",
        desc: "Adição de +50GB de espaço interno do projeto",
        period: "/mês",
      },
      {
        name: "Enterprise",
        price: 39.99,
        quantity: "+20Gb",
        desc: "Adição de +100GB de espaço interno do projeto",
        period: "/mês",
      },
    ],
  },
  {
    id: "traffic.upgrade",
    title: "Upgrade de Tráfego",
    price: 29.99,
    Icon: <FaNetworkWired />,
    desc: "Aumento permanente no limite mensal de banda",
    period: "/lifetime", // upgrade vitalício
  },
  {
    id: "monitoring",
    title: "Monitoramento Básico",
    price: 7.99,
    Icon: <FaChartLine />,
    desc: "Alertas de uptime e relatórios semanais",
    period: "/mês",
  },
  {
    id: "security.basic",
    title: "Segurança Básica",
    price: 49.99,
    Icon: <FaShieldAlt />,
    desc: "Proteção vitalícia contra ataques comuns (DDoS, brute force)",
    period: "/lifetime", // segurança pode ser setup único
  },
  {
    id: "database",
    title: "Database",
    Icon: <FaDatabase />,
    options: [
      {
        name: "Standard",
        price: 1.99,
        quantity: "100Mb",
        desc: "1 conta de email com o seu domínio",
        period: "/mês",
      },
      {
        name: "Profissional",
        price: 9.99,
        quantity: "5Gb",
        desc: "Base de dados profissional para projetos médios",
        period: "/mês",
      },
      {
        name: "Enterprise",
        price: 24.99,
        quantity: "20Gb",
        desc: "Base de dados empresarial para projetos de grande escala",
        period: "/mês",
      },
    ],
  },
];

const product = {
  name: "Plano Starter",
  price: 9.99,
};

const discountPreset = .0;

const calculateCart = (baseProduct: any, selectedServices: any[]) => {
  // subtotal começa com o preço do produto principal
  let subtotal = baseProduct?.price || 0;

  // soma os adicionais
  let additionalTotal = 0;
  selectedServices.forEach((s) => {
    additionalTotal += s.price || 0;
  });

  const discount = (subtotal + additionalTotal) * discountPreset; // exemplo: 10%
  const total = subtotal + additionalTotal - discount;

  return { subtotal, additionalTotal, discount, total };
};

function CartPage() {
  const [selectedServices, setSelectedServices] = useState<
    Record<string, number>
  >({});
  const { subtotal, additionalTotal, discount, total } = calculateCart(
    product,
    Object.values(selectedServices)
  );

  const selectedServicesArray = Object.values(selectedServices).map(
    (s: any) => ({
      name: s.name,
      price: s.price,
    })
  );

  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  const steps = [
    {
      id: 1,
      Icon: FaShoppingCart,
      title: "Carrinho",
      component: (
        <CartElement
          services={servicesData}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          CardElement={
            <CartSummary
              product={product}
              subtotal={subtotal}
              additionalTotal={additionalTotal}
              discount={discount}
              total={total}
              selectedServices={selectedServicesArray} // se quiser mostrar os serviços selecionados
              discountPreset={discountPreset}
            />
          }
        />
      ),
    },
    {
      id: 2,
      Icon: FaAddressCard,
      title: "Dados Pessoais",
      component: <h1>DADOS</h1>,
    },
    {
      id: 3,
      Icon: FaCreditCard,
      title: "Pagamento",
      component: <h1>PAGAMENTO</h1>,
    },
    {
      id: 4,
      Icon: GiConfirmed,
      title: "Confirmação",
      component: <FaMagnifyingGlass />,
    },
  ];
  return <Stepper steps={steps} step={step} setStep={setStep}></Stepper>;
}

export default CartPage;
