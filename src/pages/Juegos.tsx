import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AhorcadoDieciochero from '@/components/games/AhorcadoDieciochero';

export default function Juegos() {
  useEffect(() => {
    document.title = 'Juegos de Chile y Fiestas Patrias | Chilenízate';
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', 'Juega Ahorcado Dieciochero y descubre palabras de la cultura y las Fiestas Patrias de Chile.');
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <section className="relative hidden overflow-hidden bg-blue-950 px-6 py-10 text-white sm:block lg:py-12">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-red-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100"><Sparkles className="h-4 w-4 text-red-400" /> Aprende jugando</div>
          <h1 className="mt-4 text-4xl font-black tracking-tight lg:text-5xl">Ahorcado Dieciochero</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-blue-100">Descubre palabras de nuestra cultura, suma empanadas y sopaipillas, y mantén encendida la fonda.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-0 py-0 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <AhorcadoDieciochero />

        <div className="my-8 flex flex-col items-center justify-center gap-3 px-4 text-center sm:mb-0 sm:mt-10 sm:flex-row sm:px-0">
          <Link to="/fiestas-patrias"><Button variant="outline" className="h-11 rounded-xl border-slate-300 text-blue-950"><BookOpen className="h-4 w-4" /> Repasar el Especial 18</Button></Link>
          <p className="text-sm text-slate-500">Aprende nuevas pistas y vuelve por otra ronda.</p>
        </div>
      </section>
    </main>
  );
}
