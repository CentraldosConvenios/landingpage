'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh]">
      {/* Fundo de imagem */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-header-central.webp"
          alt="Plano de Saúde"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Conteúdo geral */}
      <div className="flex flex-col justify-between h-full">
        {/* BLOCOS 1 E 2 */}
        <div className="flex-1 max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 px-4 pt-10">
          {/* BLOCO 1 */}
          <div className="max-w-xl text-center lg:text-left mt-[50px]">
            <Image
              src="/logocdv.webp"
              alt="Logo"
              width={247}
              height={128}
              className="mx-auto lg:mx-0 mb-4"
            />
            <h1 className="text-[40px] text-[#111827] leading-tight">
              A Proteção <span className="font-bold">Completa</span> <br />
              com o <span className="font-bold">Plano de Saúde Ideal</span>
            </h1>
            <p className="text-[#6b7280] text-[20px] font-medium mt-4">
              Planos acessíveis, cobertura completa e atendimento de qualidade para cuidar do que mais importa: você e sua família.
            </p>
            <button className="mt-6 bg-[#FBAC0F] text-white text-[18px] font-medium py-[14px] px-[24px] rounded hover:opacity-90 transition">
              <a href="#forms" className="block flex-shrink-0">
                Fazer uma Cotação Gratuita
              </a>
            </button>
          </div>

          {/* BLOCO 2 */}
          <div className="w-full lg:w-[500px] self-end flex justify-center lg:justify-end">
            <Image
              src="/Grupo-17.webp"
              alt="Família protegida"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        {/* BLOCO 3 */}
        <div className="bg-[#FBAC0F] w-full text-center py-6 px-4">
          <p className="text-[25px] text-white font-bold leading-snug max-w-7xl mx-auto">
            <span className="text-[#111827]">Ter um bom plano de saúde é mais do que cuidado —</span> é liberdade para viver tranquilo.
          </p>
        </div>
      </div>
    </section>
  )
}
