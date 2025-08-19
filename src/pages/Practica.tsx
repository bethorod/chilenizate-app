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
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Practica y Juega
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Pon a prueba tus conocimientos sobre Chile con nuestras herramientas interactivas
          </p>
        </section>

        {/* Main Selection Tabs */}
        <Tabs defaultValue="evaluacion" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 h-12 sm:h-14">
            <TabsTrigger value="evaluacion" className="flex items-center gap-2 text-sm sm:text-base px-2 sm:px-4">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden xs:inline">Evaluación</span>
              <span className="xs:hidden">Quiz</span>
            </TabsTrigger>
            <TabsTrigger value="pasapalabras" className="flex items-center gap-2 text-sm sm:text-base px-2 sm:px-4">
              <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5" />
              Pasapalabras
            </TabsTrigger>
          </TabsList>

          {/* Evaluación Content */}
          <TabsContent value="evaluacion" className="space-y-0">
            <Card className="w-full">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 w-fit">
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl mb-1 sm:mb-2">Evaluación de Conocimientos</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Prueba tus conocimientos con quiz y revisa tus errores frecuentes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Tabs defaultValue="quiz" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6">
                    <TabsTrigger value="quiz" className="flex items-center gap-2 text-sm sm:text-base">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4" />
                      Quiz
                    </TabsTrigger>
                    <TabsTrigger value="errores" className="flex items-center gap-2 text-sm sm:text-base">
                      <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Bin de errores</span>
                      <span className="sm:hidden">Errores</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="quiz">
                    <div className="bg-card/50 rounded-lg p-3 sm:p-4 border min-h-[400px] sm:min-h-[500px]">
                      <ProtectedRoute>
                        <Quiz />
                      </ProtectedRoute>
                    </div>
                  </TabsContent>

                  <TabsContent value="errores">
                    <div className="bg-card/50 rounded-lg p-3 sm:p-4 border min-h-[400px] sm:min-h-[500px]">
                      <ErrorBin />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pasapalabras Content */}
          <TabsContent value="pasapalabras" className="space-y-0">
            <Card className="w-full">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-secondary/20 w-fit">
                    <Gamepad2 className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl mb-1 sm:mb-2">Pasapalabras Chile</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Juego de palabras sobre historia, cultura y geografía chilena
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-card/50 rounded-lg p-3 sm:p-4 border min-h-[400px] sm:min-h-[500px]">
                  <Pasapalabras />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation Actions */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link to="/history" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3">
              <BookOpen className="h-4 w-4" />
              Volver a aprender
            </Button>
          </Link>
          <Link to="/mapa" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3">
              <Map className="h-4 w-4" />
              Ver mapa
            </Button>
          </Link>
        </div>
      </main>

      <footer className="py-6 sm:py-8 text-center text-sm text-muted-foreground border-t bg-card/30 mt-8">
        <p>Chilenízate · Practica interactiva</p>
      </footer>
    </div>
  );
};

export default Practica;
