'use client';

import { useCallback } from 'react';
import Marquee from 'react-fast-marquee';

interface Operadora {
  nome: string;
  logo: string;
  // link removido pois vamos rolar para o form, não abrir link externo
}

const operadoras: Operadora[] = [
  { nome: 'Amil', logo: '/amil-logo-1-2.png' },
  { nome: 'Bradesco', logo: '/bradesco-saude-logo-0-1.png' },
  { nome: 'HapVida', logo: '/Grupo de máscara 1.png' },
  { nome: 'Ameplan', logo: '/Logo-Ameplan-orginal-02-2048x487.png' },
  { nome: 'GoldenCross', logo: '/golden-cross-logo.png' },
  { nome: 'Biovida', logo: '/Logo-Biovida-1024x148.png.png' },
  { nome: 'BlueMed', logo: '/logo-bluemed-v4.png' },
  { nome: 'Medtuor', logo: '/logo-med-tour-saude-novo.png' },
  { nome: 'Omint', logo: '/omint-logo-0.png' },
  { nome: 'PortoSeguro', logo: '/porto-seguro-logo-0.png' },
  { nome: 'PreventSenior', logo: '/prevent-senior-logo.png' },
  { nome: 'Transmontano', logo: '/trasmontano-saude-seeklogo.png' },
];

export default function CarrosselOperadoras() {
  const scrollToForm = useCallback(() => {
    const form = document.getElementById('forms');
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
            aria-label={`Ir para formulário - ${operadora.nome}`}
          >
            <img
              src={operadora.logo}
              alt={operadora.nome}
              className="h-[60px] w-auto transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
          </button>
        ))}
      </Marquee>
    </section>
  );
}


