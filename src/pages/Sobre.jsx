import React from "react";

export default function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h2 className="text-4xl font-bold mb-6 animate-bounce">Sobre Nós</h2>
      <p className="text-lg max-w-xl text-center animate-fade-in">
        Somos uma equipe dedicada a criar experiências incríveis na web. Nosso
        objetivo é entregar qualidade e inovação para nossos clientes!
      </p>
    </div>
  );
}

// Adicione esta animação personalizada no tailwind.config.js:
// theme: { extend: { animation: { 'fade-in': 'fadeIn 1s ease-in' }, keyframes: { fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } } } }
