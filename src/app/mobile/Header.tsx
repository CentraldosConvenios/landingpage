'use client'

import Image from 'next/image';
import useScrollToForm from '@/hooks/useScrollToForm'

export default function Header() {
  const scrollToForm = useScrollToForm()

  return (
    <>
      <header className="relative w-full px-4 pt-[60px] pb-0 bg-gray-200">
        {/* Fundo da imagem */}
        <div className="absolute inset-0">
          <Image
            src="/bg-header-mobile.png" // Substitua com o caminho correto da sua imagem
            alt="Plano de saúde"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        {/* Contêiner flex para o conteúdo centralizado */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/logocdv.png" // Substitua com o caminho da sua logo
              alt="Logo"
              width={180} // Ajuste a largura conforme necessário
              height={90} // Ajuste a altura conforme necessário
            />
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-[#111827] mb-4">
            A Proteção Completa <br />
            com o Plano de Saúde Ideal
          </h1>

          {/* Parágrafo */}
          <p className="text-[16px] font-medium text-[#6B7280] mb-6 px-4">
            Planos acessíveis, cobertura completa e atendimento 
            de qualidade para cuidar do que mais importa: você e sua família.
          </p>

          {/* Botão */}
          <button
            onClick={scrollToForm}
            className="w-[250px] py-[12px] px-[20px] bg-[#fbac0f] text-white text-[16px] font-medium rounded-[27px] shadow-md hover:shadow-lg transition-all"
          >
            Fazer uma Cotação Gratuita
          </button>
          <div className="mt-[40px] w-1/2 flex justify-end items-end h-full">
            <Image
              src="/Grupo-17.webp" // Substitua pelo caminho correto da sua imagem
              alt="Imagem do bloco 2"
              width={428} // Ajuste o tamanho conforme necessário
              height={285} // Ajuste a altura conforme necessário
              className="object-contain" />
          </div>
        </div>
      </header>

      {/* Texto secundário (Rodapé) */}
      <div className="w-full h-[90px] bg-[#FBAC0F] flex items-center justify-center">
        <p className="text-center">
          <span className="text-[14px] font-regular text-[#000000]">
            Ter um bom plano de saúde é mais do que cuidado <br />
          </span>
          <span className="text-[14px] font-bold text-[#ffffff]">
            é liberdade para viver tranquilo.
          </span>
        </p>
      </div>
    </>
  );
}
