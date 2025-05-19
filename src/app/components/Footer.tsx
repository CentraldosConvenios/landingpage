'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black  text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo esquerda */}
        <div className="mb-4 md:mb-0">
          <img src="/logocdv.webp" alt="Logo da Empresa" className="h-[100px]" />
        </div>

        {/* Redes sociais direita */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {/* Ícone do Facebook */}
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {/* Ícone do Instagram */}
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 3a1 1 0 110 2 1 1 0 010-2zm-5 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {/* Ícone do LinkedIn */}
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7.5 0h3.8v1.71h.05c.53-1 1.82-2.06 3.75-2.06 4.02 0 4.77 2.65 4.77 6.08V20H16v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93V20H7.99V8z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Central dos Convênios. Todos os direitos reservados.
      </div>
    </footer>
  );
}
