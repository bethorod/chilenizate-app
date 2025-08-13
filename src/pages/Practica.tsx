import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import Quiz from './Quiz';
import ErrorBin from './ErrorBin';
import Pasapalabras from '@/components/games/Pasapalabras';

const Practica: React.FC = () => {
  useEffect(() => {
    document.title = 'Pon a prueba lo aprendido | Chilenízate';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Practica con Quiz, Bin de errores y el juego Pasapalabras sobre historia y cultura de Chile.';
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-6">
          <p className="text-gray-700">Reúne tus conocimientos con estas herramientas de práctica.</p>
        </section>

        <Tabs defaultValue="quiz" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6">
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
            <TabsTrigger value="errores">Bin de errores</TabsTrigger>
            <TabsTrigger value="pasapalabras">Pasapalabras</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <div className="bg-white/70 rounded-xl shadow-sm p-4 border">
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            </div>
          </TabsContent>

          <TabsContent value="errores">
            <div className="bg-white/70 rounded-xl shadow-sm p-4 border">
              <ErrorBin />
            </div>
          </TabsContent>

          <TabsContent value="pasapalabras">
            <div className="bg-white/70 rounded-xl shadow-sm p-4 border">
              <Pasapalabras />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 flex gap-3">
          <Link to="/history"><Button variant="outline">Volver a aprender</Button></Link>
          <Link to="/mapa"><Button variant="secondary">Ver mapa</Button></Link>
        </div>
      </main>

      <footer className="py-10 text-center text-xs text-gray-500">
        <p>Chilenízate · Practica interactiva</p>
      </footer>
    </div>
  );
};

export default Practica;
