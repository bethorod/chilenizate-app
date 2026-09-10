import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Gamepad2, Sparkles } from 'lucide-react';
// import { Trophy } from 'lucide-react'; // TODO(auth): reactivar junto con el tab Quiz Chile.
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Pasapalabras from '@/components/games/Pasapalabras';
import FondaChallenge from '@/components/games/FondaChallenge';
import AhorcadoDieciochero from '@/components/games/AhorcadoDieciochero';

export default function Practica() {
  useEffect(() => {
    document.title = 'Juegos de Chile y Fiestas Patrias | Chilenízate';
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', 'Aprende jugando con Ahorcado Dieciochero, Ruta del 18 y Pasapalabras sobre Chile.');
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <section className="relative overflow-hidden bg-blue-950 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-red-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100"><Sparkles className="h-4 w-4 text-red-400" /> Aprende jugando</div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Desafíos con sabor a Chile</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">Elige tu juego, supera cada ronda y descubre datos que te ayudarán a conocer mejor nuestra historia y cultura.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Tabs defaultValue="ahorcado" className="w-full">
          <TabsList className="mb-8 grid h-auto w-full grid-cols-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
            <TabsTrigger value="ahorcado" className="min-h-12 gap-2 rounded-xl px-1 text-xs data-[state=active]:bg-red-600 data-[state=active]:text-white sm:px-2 sm:text-sm">
              <Sparkles className="h-4 w-4" /> Ahorcado
            </TabsTrigger>
            <TabsTrigger value="ruta18" className="min-h-12 gap-2 rounded-xl px-2 text-xs data-[state=active]:bg-red-600 data-[state=active]:text-white sm:text-sm">
              <Gamepad2 className="h-4 w-4" /><span className="hidden sm:inline">Ruta del </span>18
            </TabsTrigger>
            <TabsTrigger value="pasapalabras" className="min-h-12 gap-2 rounded-xl px-2 text-xs data-[state=active]:bg-blue-950 data-[state=active]:text-white sm:text-sm">
              <Brain className="h-4 w-4" /><span className="hidden sm:inline">Pasa</span>palabras
            </TabsTrigger>
            {/* TODO(auth): reactivar cuando el nuevo flujo de autenticación esté listo.
            <TabsTrigger value="quiz" className="min-h-12 gap-2 rounded-xl px-2 text-xs data-[state=active]:bg-blue-950 data-[state=active]:text-white sm:text-sm">
              <Trophy className="h-4 w-4" /> Quiz Chile
            </TabsTrigger>
            */}
          </TabsList>

          <TabsContent value="ahorcado" className="mt-0"><AhorcadoDieciochero /></TabsContent>
          <TabsContent value="ruta18" className="mt-0"><FondaChallenge /></TabsContent>
          <TabsContent value="pasapalabras" className="mt-0"><Pasapalabras /></TabsContent>
          {/* TODO(auth): reactivar el contenido del Quiz Chile junto con su tab.
          <TabsContent value="quiz" className="mt-0">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-950/5">
              <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Evaluación completa</p>
                  <h2 className="mt-2 text-3xl font-black text-blue-950">30 preguntas sobre Chile</h2>
                  <p className="mt-3 max-w-xl leading-7 text-slate-600">Repasa historia, geografía y cultura. Inicia sesión para guardar tu resultado y volver a practicar tus errores.</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1.5">30 preguntas</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5">Progreso guardado</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5">Explicaciones</span>
                  </div>
                </div>
                <Link to="/quiz"><Button className="h-12 w-full rounded-xl bg-red-600 px-6 font-bold hover:bg-red-700">Comenzar quiz <Trophy className="h-4 w-4" /></Button></Link>
              </div>
            </section>
          </TabsContent>
          */}
        </Tabs>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <Link to="/fiestas-patrias"><Button variant="outline" className="h-11 rounded-xl border-slate-300 text-blue-950"><BookOpen className="h-4 w-4" /> Repasar el Especial 18</Button></Link>
          <p className="text-sm text-slate-500">Aprende primero o lánzate directo al desafío.</p>
        </div>
      </section>
    </main>
  );
}
