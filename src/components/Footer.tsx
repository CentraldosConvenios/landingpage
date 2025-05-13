'use client';

import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full text-white py-16 px-[140px] mt-[">
      <div className="flex flex-col lg:flex-row justify-between gap-12">

        {/* Coluna 1 - Logo e descrição */}
        <div className="flex flex-col gap-4 max-w-[300px]">
          <img src="/logocdv.png" alt="Logo" className="w-[180px]" />
          <p className="text-sm text-black">
            Cuidando da sua saúde com responsabilidade e dedicação. Conte com a gente!
          </p>
        </div>

        

        {/* Coluna 3 - Contato */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Contato</h3>
          <div className="flex items-center gap-2 text-sm text-black">
            <FaPhoneAlt />
            <span>(11) 97864-1111</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-black">
            <FaEnvelope />
            <span>contato@centraldosconvenios.com.br</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/centraldosconvenios_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-black hover:text-[#FBAC0F]" size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-black hover:text-[#FBAC0F]" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Central dos Convênios. Todos os direitos reservados.
      </div>
    </footer>
  );
}
