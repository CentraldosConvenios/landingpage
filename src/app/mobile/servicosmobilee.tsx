'use client';

import { useCallback } from 'react';
import { FaUser, FaUsers, FaClipboardCheck, FaBuilding } from 'react-icons/fa';

const servicos = [
  {
    titulo: 'Individual',
    subtitulo: 'Planos de Saúde <br /> Individuais',
    icon: <FaUser size={80} color="#FBAC0F" />,
  },
  {
    titulo: 'Familiar',
    subtitulo: 'Planos de Saúde <br /> familiares',
    icon: <FaUsers size={80} color="#FBAC0F" />,
  },
  {
    titulo: 'Adesão',
    subtitulo: 'Planos de Saúde <br /> Adesão',
    icon: <FaClipboardCheck size={80} color="#FBAC0F" />,
  },
  {
    titulo: 'Empresarial',
    subtitulo: 'Planos de Saúde <br /> para Empresas & MEI',
    icon: <FaBuilding size={80} color="#FBAC0F" />,
  },
];

export default function Servicos() {
  const scrollToForm = useCallback(() => {
    const form = document.getElementById('formulario');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="w-full px-4 md:px-[140px] py-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
      {servicos.map((servico, index) => (
        <button
          key={index}
          onClick={scrollToForm}
          className="w-full h-[280px] bg-white shadow-md rounded-[30px] flex flex-col items-center justify-center text-center gap-4 transition-transform duration-300 hover:scale-105"
        >
          {servico.icon}
          <h3 className="text-[22px] md:text-[32px] font-bold text-black">{servico.titulo}</h3>
          <p
            className="text-[14px] md:text-[18px] font-medium text-[#848484]"
            dangerouslySetInnerHTML={{ __html: servico.subtitulo }}
          />
        </button>
      ))}
    </section>
  );
}