'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function formatPhone(value: string) {
  return value.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
}

function formatCEP(value: string) {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3}).*/, '$1-$2')
}

export default function FormularioLead() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    numPeople: '',
    ages: '',
    hasCNPJ: '',
    cep: '',
    consent: false,
  })

  useEffect(() => {
    // Importação dinâmica apenas no cliente
    import('react-facebook-pixel').then((ReactPixel) => {
      ReactPixel.default.init('SEU_PIXEL_ID') // substitua com seu Pixel ID
      ReactPixel.default.pageView()
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      const newValue =
        name === 'phone' ? formatPhone(value) :
        name === 'cep' ? formatCEP(value) :
        value

      setFormData({ ...formData, [name]: newValue })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.consent) {
      alert('Você precisa aceitar a Política de Privacidade.')
      return
    }

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      const whatsappNumber = '5511978641111'
      const message = encodeURIComponent(
        `Olá, meu nome é ${formData.name} e gostaria de mais informações sobre o plano.`
      )

      // Evento de conversão após envio bem-sucedido
      if (typeof window !== 'undefined') {
        import('react-facebook-pixel').then((ReactPixel) => {
          ReactPixel.default.track('Lead')
        })
      }

      router.push(`https://wa.me/${whatsappNumber}?text=${message}`)
    } else {
      alert('Erro ao enviar o formulário. Tente novamente.')
    }
  }

  return (
    <section className="w-full flex justify-center items-center py-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full px-4 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[24px] shadow-md p-6 md:p-8 w-full max-w-[540px]"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nome Completo"
              required
              className="h-14 border border-gray-300 rounded-xl px-4 font-medium"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Contato"
              required
              className="h-14 border border-gray-300 rounded-xl px-4 font-medium"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="number"
              name="numPeople"
              placeholder="Quantas Vidas?"
              required
              className="h-14 border border-gray-300 rounded-xl px-4 font-medium"
              value={formData.numPeople}
              onChange={handleChange}
            />
            <input
              type="text"
              name="ages"
              placeholder="Quais as Idades?"
              required
              className="h-14 border border-gray-300 rounded-xl px-4 font-medium"
              value={formData.ages}
              onChange={handleChange}
            />
            <select
              name="hasCNPJ"
              required
              className="h-14 border border-gray-300 rounded-xl px-4 font-medium text-gray-700"
              value={formData.hasCNPJ}
              onChange={handleChange}
            >
              <option value="">Possui CNPJ?</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              required
              className="h-14 border border-gray-300 rounded-xl px-4 font-medium"
              value={formData.cep}
              onChange={handleChange}
            />
            <label className="text-sm mt-2 flex items-start gap-2 max-w-[70ch]">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1"
                aria-label="Consentimento de Política de Privacidade"
              />
              <span>
                Concordo com a{' '}
                <a href="/politica-de-privacidade" target="_blank" className="underline text-blue-600">
                  Política de Privacidade
                </a>
              </span>
            </label>
            <button
              type="submit"
              className="bg-[#FFB800] text-white font-bold h-14 rounded-2xl w-full mt-4 hover:brightness-110 transition"
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="hidden md:block w-full max-w-[420px]">
          <img
            src="/grup4.webp"
            alt="Imagem ao lado do formulário"
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}




