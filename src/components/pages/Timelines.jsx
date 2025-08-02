// Timelines.jsx
import React from 'react';

export default function Timelines() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed text-white p-6"
      style={{ backgroundImage: "url('/bg-veil.jpg')" }}
    >
      <div className="max-w-4xl mx-auto bg-black/50 p-6 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Timelines</h1>
        <p className="text-gray-300">
          Chronicles of the Spiral's turning, from Lexarch rise to Veilfall.
        </p>
      </div>
    </main>
  );
}
