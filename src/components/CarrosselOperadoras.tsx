'use client';

import { useCallback } from 'react';
import Marquee from 'react-fast-marquee';

interface Operadora {
  nome: string;
  logo: string;
  link: string;
}

const operadoras: Operadora[] = [
  { nome: 'Amil', logo: '/amil-logo-1-2.png', link: 'https://amil.com.br' },
  { nome: 'Bradesco', logo: '/bradesco-saude-logo-0-1.png', link: 'https://bradescosaude.com.br' },
  { nome: 'HapVida', logo: '/hapvida.png', link: 'https://notredameintermedica.com.br' },
  { nome: 'Ameplan', logo: '/Logo-Ameplan-orginal-02-2048x487.png', link: 'https://sulamerica.com.br' },
  { nome: 'GoldenCross', logo: '/golden-cross-logo.png', link: 'https://unimed.com.br' },
  { nome: 'Biovida', logo: '/Logo-Biovida-1024x148.png', link: 'https://unimed.com.br' },
  { nome: 'blueMed', logo: '/logo-bluemed-v4.png', link: 'https://unimed.com.br' },
  { nome: 'Medtuor', logo: '/logo-med-tour-saude-novo.png', link: 'https://unimed.com.br' },
  { nome: 'Omint', logo: '/omint-logo-0.png', link: 'https://unimed.com.br' },
  { nome: 'PortoSeguro', logo: '/porto-seguro-logo-0.png', link: 'https://unimed.com.br' },
  { nome: 'PreventSenior', logo: '/prevent-senior-logo.png', link: 'https://unimed.com.br' },
  { nome: 'Transmontano', logo: '/trasmontano-saude-seeklogo.png', link: 'https://unimed.com.br' },
  // Adicione quantas desejar
];

export default function CarrosselOperadoras() {
  const scrollToForm = useCallback(() => {
    const form = document.getElementById('formulario');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="w-full bg-white py-10">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {operadoras.map((operadora, index) => (
          <button
            key={index}
            onClick={scrollToForm}
            className="mx-8 flex items-center justify-center focus:outline-none"
          >
            <img
              src={operadora.logo}
              alt={operadora.nome}
              className="h-[60px] w-auto transition-transform duration-300 hover:scale-110"
            />
          </button>
        ))}
      </Marquee>
    </section>
  );
}