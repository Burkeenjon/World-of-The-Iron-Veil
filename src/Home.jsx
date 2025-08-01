import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4">
      <section className="text-center py-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Before the Word, there was the Wound
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Enter the fractured world of glyphs, memory, and rebellion.
        </p>
        <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black">
          Explore the Veil
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">📜 World of the Veil</h2>
          <p className="text-gray-300">
            Discover the Realms—from the Spires of the Towers to the shattered Veilscar Basin.
          </p>
        </div>
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">🩸 Characters & Echoes</h2>
          <p className="text-gray-300">
            Read the memorylines of Elenya, Ashen, and others hunted by the Tower.
          </p>
        </div>
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">🧠 Glyphcraft</h2>
          <p className="text-gray-300">
            Browse the forbidden, the sanctified, and the spiraled glyphs that shape fate.
          </p>
        </div>
      </section>
    </main>
  );
}
