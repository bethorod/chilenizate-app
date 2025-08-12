import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const letra = `
Puro, Chile, es tu cielo azulado,
Puras brisas te cruzan también,
Y tu campo de flores bordado
Es la copia feliz del Edén.
Majestuosa es la blanca montaña
Que te dio por baluarte el Señor,
Y ese mar que tranquilo te baña
Te promete un futuro esplendor.

Coro:
Dulce Patria, recibe los votos
Con que Chile en tus aras juró
Que, o la tumba serás de los libres
O el asilo contra la opresión.
`;

const audioUrl = 'https://commons.wikimedia.org/wiki/Special:FilePath/United_States_Navy_Band_-_National_Anthem_of_Chile.ogg?download';

const HimnoChile: React.FC = () => {
  useEffect(() => {
    document.title = 'Himno Nacional de Chile | Letra y Audio';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Himno Nacional de Chile
              </h1>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-muted-foreground">
              <Music2 className="h-4 w-4" />
              <span>Letra y audio</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <article className="bg-white/70 rounded-xl shadow-sm p-6 border animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Letra</h2>
          <pre className="whitespace-pre-wrap leading-7 text-lg text-foreground/90">{letra}</pre>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Audio</h2>
            <audio controls className="w-full">
              <source src={audioUrl} type="audio/ogg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
            <p className="text-xs text-muted-foreground mt-2">
              Fuente: Wikimedia Commons (United States Navy Band — dominio público).
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default HimnoChile;
