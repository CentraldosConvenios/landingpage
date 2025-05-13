'use client';

import useScrollToForm from '@/hooks/useScrollToForm'

export default function QuemSomos() {

  const scrollToForm = useScrollToForm() 

  return (
    <section className="flex justify-center items-center mt-20 gap-10 px-[140px]">
      <div className="w-1/2">
        {/* Bloco 1: Título e Parágrafo */}
        <h2 className="font-roboto font-bold text-[58px] text-black">
          Cada Operadora Tem <br /> As Suas Características
        </h2>
        <p className="font-roboto font-medium text-[20px] text-[#6B7280] mt-[40px]">
          E O Nosso Trabalho É Ajudar Você A Compreender Os Detalhes De Cada Uma. Vamos Refletir E Avaliar Juntos
          Qual Delas Poderá Atender Melhor A Rotina Médica Da Sua Família. Nosso Portfólio É Abrangente Para Que A
          Sua Escolha Atenda Às Expectativas.
        </p>

        {/* Botão */}
        <button onClick={scrollToForm} className="mt-[40px] px-8 py-3 bg-[#FBAC0F] text-white font-roboto font-bold text-[18px] rounded-[43px] border border-[#FBAC0F] hover:bg-transparent hover:text-[#FBAC0F] transition-all">
          Fazer uma Cotação Gratuita
        </button>
      </div>

      <div className="w-1/2">
        {/* Imagem */}
        <img
          src="/quem-somos.png" // Substitua pelo caminho correto da imagem
          alt="Quem Somos"
          className="w-full h-auto object-cover rounded-[43px]"
        />
      </div>
    </section>
  );
}

