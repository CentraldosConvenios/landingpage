'use client';

import useScrollToForm from '@/hooks/useScrollToForm'

export default function QuemSomos() {
  const scrollToForm = useScrollToForm();

  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-[40px] gap-10 px-4 md:px-[140px]">
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="font-roboto font-bold text-[32px] md:text-[58px] text-black leading-tight">
          Cada Operadora Tem <br className="hidden md:block" /> As Suas Características
        </h2>

        <p className="font-roboto font-medium text-[16px] md:text-[20px] text-[#6B7280] mt-6 md:mt-[40px] max-w-[650px]">
          E O Nosso Trabalho É Ajudar Você A Compreender Os Detalhes De Cada Uma. Vamos Refletir E Avaliar Juntos
          Qual Delas Poderá Atender Melhor A Rotina Médica Da Sua Família. Nosso Portfólio É Abrangente Para Que A
          Sua Escolha Atenda Às Expectativas.
        </p>

        <button
          onClick={scrollToForm}
          className="mt-6 md:mt-[40px] px-6 py-3 bg-[#FBAC0F] text-white font-roboto font-bold text-[16px] md:text-[18px] rounded-[43px] border border-[#FBAC0F] hover:bg-transparent hover:text-[#FBAC0F] transition-all"
        >
          Fazer uma Cotação Gratuita
        </button>
      </div>

      {/* Imagem (só no desktop) */}
      <div className="hidden md:block w-1/2">
        <img
          src="/quem-somos.png"
          alt="Quem Somos"
          className="w-full h-auto object-cover rounded-[43px]"
        />
      </div>
    </section>
  );
}

