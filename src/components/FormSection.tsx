'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FormSection() {
  const [nome, setNome] = useState('')
  const [contato, setContato] = useState('')
  const [vidas, setVidas] = useState('')
  const [idades, setIdades] = useState('')
  const [possuiCNPJ, setPossuiCNPJ] = useState('')
  const [cep, setCep] = useState('')
  const [aceitouPolitica, setAceitouPolitica] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!aceitouPolitica) {
      alert('Você precisa aceitar a política de privacidade.')
      return
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          contato,
          vidas: parseInt(vidas),
          idades,
          possuiCNPJ: possuiCNPJ.toLowerCase() === 'sim',
          cep,
        }),
      })

      if (response.ok) {
        window.location.href = 'https://wa.me/5511978641111'
      } else {
        alert('Erro ao enviar os dados. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar os dados. Tente novamente.')
    }
  }

  return (
    <section className="mt-[90px] px-[140px] w-full flex justify-between items-start">
      {/* Bloco 1 - Formulário */}
      <div
        id="formulario"
        className="w-[655px] h-[797px] bg-white rounded-[43px] shadow-lg border border-black px-8 py-10"
      >
        <form onSubmit={handleSubmit} className="w-[592px] flex flex-col gap-6">
          <input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full h-[74px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[18px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            className="w-full h-[74px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[18px] font-roboto"
            required
          />
          <input
            type="number"
            placeholder="Quantas Vidas?"
            value={vidas}
            onChange={(e) => setVidas(e.target.value)}
            className="w-full h-[74px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[18px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Quais as Idades?"
            value={idades}
            onChange={(e) => setIdades(e.target.value)}
            className="w-full h-[74px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[18px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Possui CNPJ?"
            value={possuiCNPJ}
            onChange={(e) => setPossuiCNPJ(e.target.value)}
            className="w-full h-[74px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[18px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="w-full h-[74px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[18px] font-roboto"
            required
          />

          {/* Checkbox */}
          <label className="flex items-start gap-2 text-[12px] text-black mt-2 font-roboto leading-tight">
            <input
              type="checkbox"
              className="mt-1"
              checked={aceitouPolitica}
              onChange={(e) => setAceitouPolitica(e.target.checked)}
            />
            Li e concordo com a Política de Privacidade. Autorizo o uso das minhas informações
            para que a equipe entre em contato e encontre o plano de saúde mais adequado ao
            meu perfil e às minhas necessidades.
          </label>

          {/* Botão */}
          <button
            type="submit"
            className="h-[74px] bg-[#FBAC0F] text-white text-[38px] font-bold font-roboto rounded-[10px]"
          >
            Solicitar Cotação
          </button>
        </form>
      </div>

      {/* Bloco 2 - Imagem */}
      <div className="h-[797px]">
        <Image
          src="/Grupo4.png"
          alt="Imagem ilustrativa"
          width={812}
          height={797}
          className="object-contain"
        />
      </div>
    </section>
  )
}

