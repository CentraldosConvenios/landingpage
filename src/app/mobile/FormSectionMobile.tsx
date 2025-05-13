'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FormSectionMobile() {
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
    <section className="flex flex-col items-center justify-center px-4 py-8 gap-8">
      <div id="formulario" className="w-full max-w-[500px] bg-white rounded-[20px] shadow-md border border-black p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full h-[60px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[16px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            className="w-full h-[60px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[16px] font-roboto"
            required
          />
          <input
            type="number"
            placeholder="Quantas Vidas?"
            value={vidas}
            onChange={(e) => setVidas(e.target.value)}
            className="w-full h-[60px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[16px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Quais as Idades?"
            value={idades}
            onChange={(e) => setIdades(e.target.value)}
            className="w-full h-[60px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[16px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Possui CNPJ?"
            value={possuiCNPJ}
            onChange={(e) => setPossuiCNPJ(e.target.value)}
            className="w-full h-[60px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[16px] font-roboto"
            required
          />
          <input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="w-full h-[60px] px-4 rounded-lg border border-gray-300 placeholder:text-black placeholder:font-bold placeholder:text-[16px] font-roboto"
            required
          />

          <label className="flex items-start gap-2 text-[12px] text-black mt-2 font-roboto leading-tight">
            <input
              type="checkbox"
              className="mt-1"
              checked={aceitouPolitica}
              onChange={(e) => setAceitouPolitica(e.target.checked)}
            />
            Li e concordo com a Política de Privacidade. Autorizo o uso das minhas informações
            para contato e cotação.
          </label>

          <button
            type="submit"
            className="h-[60px] bg-[#FBAC0F] text-white text-[24px] font-bold font-roboto rounded-[10px]"
          >
            Solicitar Cotação
          </button>
        </form>
      </div>

      <div className="">
        <Image
          src="/Grupo4.png"
          alt="Imagem ilustrativa"
          width={400}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}
