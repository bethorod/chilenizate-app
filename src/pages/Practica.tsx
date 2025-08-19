import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Trophy, AlertTriangle, Gamepad2, BookOpen, Map } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted/30">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Practica y Juega
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pon a prueba tus conocimientos sobre Chile con nuestras herramientas interactivas
          </p>
        </section>

        {/* Practice Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quiz & Error Bin Section */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Evaluación</CardTitle>
                    <CardDescription>Prueba tus conocimientos y revisa tus errores</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="quiz" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="quiz" className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      Quiz
                    </TabsTrigger>
                    <TabsTrigger value="errores" className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Bin de errores
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="quiz" className="mt-4">
                    <div className="bg-card/50 rounded-lg p-4 border">
                      <ProtectedRoute>
                        <Quiz />
                      </ProtectedRoute>
                    </div>
                  </TabsContent>

                  <TabsContent value="errores" className="mt-4">
                    <div className="bg-card/50 rounded-lg p-4 border">
                      <ErrorBin />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Pasapalabras Section */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <Gamepad2 className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Pasapalabras</CardTitle>
                    <CardDescription>Juego de palabras sobre Chile</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-card/50 rounded-lg p-4 border">
                  <Pasapalabras />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/history">
            <Button variant="outline" className="flex items-center gap-2 px-6">
              <BookOpen className="h-4 w-4" />
              Volver a aprender
            </Button>
          </Link>
          <Link to="/mapa">
            <Button variant="secondary" className="flex items-center gap-2 px-6">
              <Map className="h-4 w-4" />
              Ver mapa
            </Button>
          </Link>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t bg-card/30">
        <p>Chilenízate · Practica interactiva</p>
      </footer>
    </div>
  );
};

export default Practica;
