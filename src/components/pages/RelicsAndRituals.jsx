// RelicsAndRituals.jsx
import React from 'react';

export default function RelicsAndRituals() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed text-white p-6"
      style={ backgroundImage: "url('/bg-veil.jpg')" }
    >
      <div className="max-w-4xl mx-auto bg-black/50 p-6 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Relics & Rituals</h1>
        <p className="text-gray-300">
          Magical artifacts and rites that alter memory or will.
        </p>
      </div>
    </main>
  );
}
