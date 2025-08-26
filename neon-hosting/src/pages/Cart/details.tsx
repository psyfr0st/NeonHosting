"use client";
import React from "react";
import styled from "styled-components";
import {
  FaShoppingBag,
  FaLock,
  FaShieldAlt,
  FaLock as FaLockIcon,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { MediumButton } from "@/components/ui/buttons";

interface CartSummaryProps {
  subtotal: number;
  additionalTotal: number;
  discount: number;
  total: number;
  selectedServices?: { name: string; price: number }[];
  discountPreset: number;
  product: any;
  next: () => void;
  type: string;
}

const neonText = "text-red-500 drop-shadow-[0_0_10px_#ff0000]";

const NeonButton = styled.button`
  background: linear-gradient(45deg, #ff0000, #ff3333);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 0, 0, 0.5);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }
  &:hover::before {
    left: 100%;
  }
`;

const NeonBorderDiv = styled.div`
  border: 2px solid #ff0000;
  box-shadow: 0 0 10px #ff0000, inset 0 0 10px rgba(255, 0, 0, 0.2);
`;

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal = 0,
  additionalTotal = 0,
  discount = 0,
  total = 0,
  selectedServices = [],
  discountPreset = 0,
  product = { name: "", price: 0 },
  next,
  type,
}) => {
  const discountPercentage = discountPreset * 100; // 0.1 → 10%

  if (!product || total === undefined) {
    return null; // ou um skeleton/loading
  }

  return (
    <>
      <div className="lg:col-span-1 space-y-6">
        <NeonBorderDiv className="bg-gray-900/50 rounded-2xl p-8 sticky top-24">
          <h2
            className={`text-2xl font-bold mb-6 flex items-center gap-3 ${neonText}`}
          >
            <FaShoppingBag /> Resumo do Pedido
          </h2>

          <div className="space-y-2 border-t border-gray-700 pt-4 pb-4">
            <h3 className="text-lg font-semibold mb-2 text-red-400">Plano:</h3>
            <div className="flex justify-between">
              <span>{product?.name}</span>
              <span>{product?.price?.toFixed(2).replace(".", ",")}€</span>
            </div>
          </div>

          {selectedServices.length > 0 && (
            <div className="space-y-2 border-t border-gray-700 pt-4 pb-4">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                Serviços Selecionados
              </h3>
              {selectedServices.map((s) => (
                <div key={s.name} className="flex justify-between">
                  <span>{s.name}</span>
                  <span>{(s.price ?? 0).toFixed(2).replace(".", ",")}€</span>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-2 border-t border-gray-700 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2).replace(".", ",")}€</span>
            </div>
            <div className="flex justify-between">
              <span>Serviços Adicionais</span>
              <span>{additionalTotal.toFixed(2).replace(".", ",")}€</span>
            </div>
            {discount !== 0 && (
              <div className="flex justify-between text-green-400">
                <span>Desconto ({discountPercentage}%)</span>
                <span>- {discount.toFixed(2).replace(".", ",")}€</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold pt-4">
              <span>Total</span>
              <span className="text-red-500 drop-shadow-[0_0_10px_#ff0000]">
                {total.toFixed(2).replace(".", ",")}€
              </span>
            </div>
          </div>
        </NeonBorderDiv>
      </div>

      <div className="flex items-center justify-between mt-6 py-3 px-5 text-white text-start rounded-full bg-red-600/20 w-full border border-red-600">
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
          placeholder="Discount code"
        />
        <FaArrowRight className="ml-3 cursor-pointer" />
      </div>

      <MediumButton
        left={false}
        Icon={type === "buy" ? FaShoppingCart : FaArrowRight}
        onClick={() => {
          next();
        }}
        value={type === "buy" ? "Comprar agora" : "Próximo passo"}
        className="cursor-pointer w-full py-4 rounded-full text-lg font-semibold bg-red-600 text-white shadow-[0_0_15px_rgba(255,0,0,0.7)] hover:bg-red-700 transition flex items-center justify-center gap-2 mt-6"
      />

      {/* Security Badge */}
      <div className="mt-6 text-center bg-green-900 py-4 rounded-full border border-green-400">
        <div className="flex items-center justify-center gap-2 text-green-400">
          <FaShieldAlt />
          <span className="text-sm">Pagamento 100% seguro</span>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
