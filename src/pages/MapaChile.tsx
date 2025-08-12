import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RegionTileMap from '@/components/mapa/RegionTileMap';
import comunas from '@/data/comunas.json';

const MapaChile: React.FC = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Mapa interactivo de Chile | Regiones y Comunas';
  }, []);

  const filteredComunas = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return comunas.slice(0, 60); // limitar por rendimiento
    return comunas.filter((c) => c.toLowerCase().includes(s)).slice(0, 100);
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🇨🇱</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Mapa interactivo de Chile
              </h1>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-muted-foreground">
              <Map className="h-4 w-4" />
              <span>Regiones y comunas</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <article className="lg:col-span-2">
            <RegionTileMap />
            <p className="mt-4 text-sm text-muted-foreground">
              Pasa el cursor por cada región para ver su nombre. Próximamente: mapa por comunas.
            </p>
          </article>

          <aside className="lg:col-span-1">
            <div className="bg-white/70 rounded-xl shadow-sm p-4 border animate-fade-in">
              <h2 className="text-lg font-semibold mb-2">Explora comunas</h2>
              <p className="text-sm text-muted-foreground mb-4">Busca y descubre comunas de Chile.</p>

              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Buscar comuna..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label="Buscar comuna"
                />
              </div>

              <ul className="max-h-[420px] overflow-auto pr-1 space-y-1">
                {filteredComunas.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-2 rounded-md hover:bg-primary/10 hover-scale cursor-default story-link"
                    title={c}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default MapaChile;
