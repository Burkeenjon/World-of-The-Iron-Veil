// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Cosmology from './components/pages/Cosmology';
import Glyphcraft from './components/pages/Glyphcraft';
import ForbiddenGlyphs from './components/pages/ForbiddenGlyphs';
import Characters from './components/pages/Characters';
import Factions from './components/pages/Factions';
import Veilscars from './components/pages/Veilscars';
import SpiralSanctuaries from './components/pages/SpiralSanctuaries';
import WorldMap from './components/pages/WorldMap';
import RelicsAndRituals from './components/pages/RelicsAndRituals';
import Scriptures from './components/pages/Scriptures';
import Timelines from './components/pages/Timelines';
import TheSpiral from './components/pages/TheSpiral';


export default function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Router>
      <div
        className={`min-h-screen bg-cover bg-center bg-fixed text-white transition-opacity duration-1000 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: "url('/bg-veil.jpg')" }}
      >
        <nav className="bg-black bg-opacity-70 p-4 flex flex-wrap gap-4 justify-center shadow-md">
          <Link to="/homepage" className="text-blue-300 hover:underline">Homepage</Link>
          <Link to="/cosmology" className="text-blue-300 hover:underline">Cosmology</Link>
          <Link to="/glyphcraft" className="text-blue-300 hover:underline">Glyphcraft</Link>
          <Link to="/forbiddenglyphs" className="text-blue-300 hover:underline">Forbidden Glyphs</Link>
          <Link to="/characters" className="text-blue-300 hover:underline">Characters</Link>
          <Link to="/factions" className="text-blue-300 hover:underline">Factions</Link>
          <Link to="/veilscars" className="text-blue-300 hover:underline">Veilscars</Link>
          <Link to="/spiralsanctuaries" className="text-blue-300 hover:underline">Spiral Sanctuaries</Link>
          <Link to="/worldmap" className="text-blue-300 hover:underline">World Map</Link>
          <Link to="/relicsandrituals" className="text-blue-300 hover:underline">Relics & Rituals</Link>
          <Link to="/scriptures" className="text-blue-300 hover:underline">Scriptures</Link>
          <Link to="/timelines" className="text-blue-300 hover:underline">Timelines</Link>
          <Link to="/thespiral" className="text-blue-300 hover:underline">The Spiral</Link>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
          <Route path="/cosmology" element={<Cosmology />} />
          <Route path="/glyphcraft" element={<Glyphcraft />} />
          <Route path="/forbiddenglyphs" element={<ForbiddenGlyphs />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/factions" element={<Factions />} />
          <Route path="/veilscars" element={<Veilscars />} />
          <Route path="/spiralsanctuaries" element={<SpiralSanctuaries />} />
          <Route path="/worldmap" element={<WorldMap />} />
          <Route path="/relicsandrituals" element={<RelicsAndRituals />} />
          <Route path="/scriptures" element={<Scriptures />} />
          <Route path="/timelines" element={<Timelines />} />
          <Route path="/thespiral" element={<TheSpiral />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
