import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface FooterProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Footer({ setOpen }: FooterProps) {
  return (
    <section id="footer" className="bg-black/100 border-t border-red-900/100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-server text-2xl neon-text"></i>
              <h3 className="text-xl font-bold neon-text">NeonHost</h3>
            </div>
            <p className="text-gray-400">
              Hospedagem web de alta performance para o seu negócio decolar.
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Planos WebHosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Planos WebMail
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Planos Servers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Planos Databases
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="font-bold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-red-600 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-red-600 transition-colors">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-red-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-red-600 transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="text-2xl hover:text-red-600 transition-colors">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-900/100 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 NeonHost. Todos os direitos reservados. |{" "}
            <a href="#" className="hover:text-red-400 transition-colors" onClick={(e) => {e.preventDefault(); setOpen(true)}}>
              Termos de Uso
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-red-400 transition-colors">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
