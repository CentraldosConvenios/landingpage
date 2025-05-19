    'use client';

import React from 'react';

export default function QuemSomos() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-50">
      <h2 className="text-[30px] font-bold mb-6 text-gray-900">
        Cada Operadora Tem<br />
        As Suas Características
      </h2>
      <p className="max-w-xl text-gray-700 mb-8 text-[16px] leading-relaxed">
        E O Nosso Trabalho É Ajudar Você A Compreender Os Detalhes De Cada Uma. Vamos Refletir E Avaliar Juntos Qual Delas Poderá Atender Melhor A Rotina Médica Da Sua Família. Nosso Portfólio É Abrangente Para Que A Sua Escolha Atenda Às Expectativas.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-[#FBAC0F] text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition"
      >
        <a href="#forms" className="block flex-shrink-0">
                Fazer uma Cotação Gratuita
        </a>
      </button>
    </section>
  );
}
