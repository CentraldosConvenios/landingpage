'use client'

import Image from 'next/image';
import useScrollToForm from '@/hooks/useScrollToForm'

export default function Header() {

  const scrollToForm = useScrollToForm()

  return (
    <><header className="relative w-full px-[278px] pt-[90px] pb-0 bg-gray-200">
      {/* Fundo da imagem */}
      <div className="absolute inset-0">
        <Image
          src="/bg-header-central.webp" // Substitua com o caminho correto da sua imagem
          alt="Plano de saúde"
          layout="fill"
          objectFit="cover"
          objectPosition="center" />
      </div>

      {/* Contêiner flex para o Bloco 1 e Bloco 2 */}
      <div className="relative z-10 flex items-center justify-between w-full h-full">
        {/* Bloco 1 - Logo, Texto e Botão */}
        <div className="flex flex-col justify-center text-white w-1/2 pr-[130px]">
          {/* Logo */}
          <div className="mb-[14px]">
            <Image
              src="/logocdv.png" // Substitua com o caminho da sua logo
              alt="Logo"
              width={247} // Ajuste a largura conforme necessário
              height={128} // Ajuste a altura conforme necessário
            />
          </div>

          {/* Título e Parágrafo */}
          <h1 className="text-4xl font-bold text-[#111827]">
            A Proteção Completa <br />
            com o Plano de Saúde Ideal
          </h1>
          <p className="text-[20px] font-medium text-[#111827] mt-[40px]">
            Planos acessíveis, cobertura completa e atendimento <br />
            de qualidade para cuidar do que mais importa: você e <br />
            sua família.
          </p>

          {/* Botão */}
          <button onClick={scrollToForm} className="w-[300px] py-[14px] px-[25px] bg-[#fbac0f] text-white text-[18px] font-medium rounded-[27px] shadow-md hover:shadow-lg transition-all mt-[40px]">
            Fazer uma Cotação Gratuita
          </button>
        </div>

        {/* Bloco 2 - Imagem */}
        <div className="w-1/2 flex justify-end items-end h-full">
          <Image
            src="/Grupo-17.webp" // Substitua pelo caminho correto da sua imagem
            alt="Imagem do bloco 2"
            width={724} // Ajuste o tamanho conforme necessário
            height={731} // Ajuste a altura conforme necessário
            className="object-contain" />
        </div>
      </div>
    </header><div className="w-full h-[90px] bg-[#FBAC0F] flex items-center justify-center">
        <p className="text-center text-[30px]">
          <span className="font-regular text-[#000000]">
            Ter um bom plano de saúde é mais do que cuidado —{' '}
          </span>
          <span className="font-bold text-[#ffffff]">
            é liberdade para viver tranquilo.
          </span>
        </p>
      </div></>
  );
}

