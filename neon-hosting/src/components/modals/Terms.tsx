"use client";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  justSee: boolean;
}

export default function TermsModal({
  isOpen,
  onClose,
  onAccept,
  justSee,
}: TermsModalProps) {
  const [canAccept, setCanAccept] = useState(false);
  const termsRef = useRef(null);

  const handleScroll = () => {
    if (!termsRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setCanAccept(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        {/* Botão fechar */}
        {/* Cabeçalho */}
        <header className="px-6 py-4 border-b border-red-500/30 bg-red-500/5">
          <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2">
            Termos de Uso - NeonHost
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Última atualização: Novembro 2025
          </p>
        </header>

        {/* Conteúdo */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-4 text-gray-300"
          ref={termsRef}
          onScroll={handleScroll}
        >
          <div className="space-y-4 text-white">
            <h1 className="text-2xl font-bold text-red-500">
              Termos de Uso - Neon Hosting
            </h1>

            <p>
              Bem-vindo à{" "}
              <span className="text-red-500 font-semibold">Neon Hosting</span>!
              Ao utilizar nossos serviços de hospedagem web, você concorda com
              estes Termos de Uso. Leia atentamente antes de prosseguir. Se você
              não concordar com qualquer parte destes termos, recomendamos que
              não utilize nossos serviços.
            </p>

            <h2 className="text-xl font-semibold">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar os serviços da Neon Hosting, você declara
              estar de acordo com todas as condições estabelecidas neste
              documento. Estes termos podem ser atualizados periodicamente sem
              aviso prévio.
            </p>

            <h2 className="text-xl font-semibold">2. Serviços Oferecidos</h2>
            <p>
              A Neon Hosting fornece serviços de hospedagem web, incluindo mas
              não se limitando a: hospedagem de sites, bancos de dados,
              certificados SSL e suporte técnico. Reservamo-nos o direito de
              alterar, suspender ou encerrar qualquer serviço a qualquer
              momento, mediante aviso prévio sempre que possível.
            </p>

            <h2 className="text-xl font-semibold">
              3. Responsabilidades do Usuário
            </h2>
            <ul className="list-disc list-inside">
              <li>Manter a confidencialidade de suas credenciais de acesso;</li>
              <li>
                Não utilizar os serviços para fins ilegais, fraudulentos ou que
                violem direitos de terceiros;
              </li>
              <li>
                Garantir que os conteúdos hospedados estejam em conformidade com
                as legislações aplicáveis;
              </li>
              <li>
                Efetuar os pagamentos devidos dentro dos prazos estabelecidos.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">
              4. Limitação de Responsabilidade
            </h2>
            <p>
              A Neon Hosting não se responsabiliza por perdas, danos ou
              prejuízos decorrentes de falhas no serviço, interrupções
              temporárias, ataques de terceiros ou mau uso da plataforma pelo
              usuário.
            </p>

            <h2 className="text-xl font-semibold">
              5. Política de Pagamento e Cancelamento
            </h2>
            <p>
              Os valores referentes aos serviços contratados devem ser pagos
              antecipadamente, conforme plano escolhido. O cancelamento pode ser
              solicitado a qualquer momento, mas não haverá reembolso
              proporcional de valores já pagos.
            </p>

            <h2 className="text-xl font-semibold">6. Alterações nos Termos</h2>
            <p>
              A Neon Hosting poderá modificar estes Termos de Uso a qualquer
              momento. Alterações significativas serão comunicadas através do
              site oficial ou por e-mail. O uso contínuo da plataforma após as
              alterações constitui aceitação dos novos termos.
            </p>

            <h2 className="text-xl font-semibold">
              7. Foro e Legislação Aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis de Portugal. Qualquer
              disputa será resolvida no foro da comarca de Lisboa, salvo
              disposição legal em contrário.
            </p>

            <p className="mt-6">
              Ao continuar a utilizar os serviços da
              <span className="text-red-500 font-semibold"> Neon Hosting</span>,
              você confirma que leu, entendeu e concorda com estes Termos de
              Uso.
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="px-6 py-4 border-t border-red-500/30 bg-red-500/5 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            {justSee ? "Fechar" : "Cancelar" }
          </button>
          {!justSee && (
            <button
              onClick={() => {
                onAccept(); // chama a função
                termsRef.current = null; // depois limpa a referência
              }}
              disabled={!canAccept}
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition hover:cursor-pointer"
            >
              Aceitar
            </button>
          )}
        </footer>
      </Container>
    </Overlay>
  );
}

// styled-components
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(6px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: scale(1);
  transition: transform 0.3s ease;
`;
