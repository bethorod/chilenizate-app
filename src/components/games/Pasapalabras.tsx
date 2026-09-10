import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Clock3, Lightbulb, RotateCcw, SkipForward, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

type Status = 'pendiente' | 'acierto' | 'error' | 'pasapalabra';

const rosco = [
  { letter: 'A', clue: 'Con la A: brocheta con carne y verduras preparada a la parrilla.', answer: 'anticucho', category: 'Sabores' },
  { letter: 'B', clue: 'Con la B: emblema tricolor que se luce durante Fiestas Patrias.', answer: 'bandera', category: 'Símbolos' },
  { letter: 'C', clue: 'Con la C: danza nacional que se baila con pañuelo.', answer: 'cueca', category: 'Bailes' },
  { letter: 'D', clue: 'Con la D: forma popular de llamar al 18 de septiembre.', answer: 'dieciocho', category: 'Tradiciones' },
  { letter: 'E', clue: 'Con la E: juguete de madera que debe encajarse en su mango.', answer: 'emboque', category: 'Juegos' },
  { letter: 'F', clue: 'Con la F: recinto popular con comida, música y baile.', answer: 'fonda', category: 'Tradiciones' },
  { letter: 'H', clue: 'Con la H: jinete tradicional de la zona central chilena.', answer: 'huaso', category: 'Vestimenta' },
  { letter: 'M', clue: 'Con la M: trigo cocido que acompaña a los huesillos.', answer: 'mote', category: 'Sabores' },
  { letter: 'P', clue: 'Con la P: salsa fresca de tomate, cebolla, cilantro y ají.', answer: 'pebre', category: 'Sabores' },
  { letter: 'R', clue: 'Con la R: juego de puntería en el que se lanzan tejos.', answer: 'rayuela', category: 'Juegos' },
  { letter: 'S', clue: 'Contiene la S: paso suave de la cueca que imita barrer el suelo.', answer: 'escobillado', category: 'Bailes' },
  { letter: 'T', clue: 'Con la T: juguete que gira sobre una punta después de lanzarlo.', answer: 'trompo', category: 'Juegos' },
  { letter: 'V', clue: 'Con la V: cometa de papel que se eleva durante septiembre.', answer: 'volantin', category: 'Juegos' },
  { letter: 'Z', clue: 'Con la Z: paso fuerte y rítmico característico de la cueca.', answer: 'zapateo', category: 'Bailes' },
];

const normalize = (value: string) => value.trim().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

export default function Pasapalabras() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [statuses, setStatuses] = useState<Status[]>(() => rosco.map(() => 'pendiente'));
  const [feedback, setFeedback] = useState<'acierto' | 'error' | null>(null);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const correct = useMemo(() => statuses.filter((status) => status === 'acierto').length, [statuses]);
  const wrong = useMemo(() => statuses.filter((status) => status === 'error').length, [statuses]);
  const answered = correct + wrong;
  const current = rosco[index];

  useEffect(() => {
    if (finished) return;
    const timer = window.setInterval(() => setSeconds((currentSeconds) => currentSeconds + 1), 1000);
    return () => window.clearInterval(timer);
  }, [finished]);

  useEffect(() => {
    if (!feedback && !finished) inputRef.current?.focus();
  }, [index, feedback, finished]);

  const findNext = (nextStatuses: Status[], from: number) => {
    for (let step = 1; step <= rosco.length; step += 1) {
      const candidate = (from + step) % rosco.length;
      if (nextStatuses[candidate] === 'pendiente' || nextStatuses[candidate] === 'pasapalabra') return candidate;
    }
    return -1;
  };

  const answer = () => {
    if (!value.trim() || feedback || finished) return;
    const result = normalize(value) === normalize(current.answer) ? 'acierto' : 'error';
    setStatuses((previous) => {
      const next = [...previous];
      next[index] = result;
      return next;
    });
    setFeedback(result);
  };

  const continueGame = () => {
    const nextIndex = findNext(statuses, index);
    setValue('');
    setFeedback(null);
    if (nextIndex === -1) setFinished(true);
    else setIndex(nextIndex);
  };

  const pass = () => {
    if (feedback || finished) return;
    const nextStatuses = [...statuses];
    nextStatuses[index] = 'pasapalabra';
    const nextIndex = findNext(nextStatuses, index);
    setStatuses(nextStatuses);
    setValue('');
    if (nextIndex !== -1) setIndex(nextIndex);
  };

  const reset = () => {
    setIndex(0);
    setValue('');
    setStatuses(rosco.map(() => 'pendiente'));
    setFeedback(null);
    setFinished(false);
    setSeconds(0);
  };

  if (finished) {
    const percentage = Math.round((correct / rosco.length) * 100);
    return (
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-950/5">
        <div className="bg-blue-950 px-6 py-10 text-center text-white sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl">🇨🇱</div>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-red-300">Rosco completado</p>
          <h3 className="mt-2 text-4xl font-black">{correct} de {rosco.length}</h3>
          <p className="mt-2 text-blue-100">{percentage >= 80 ? '¡Seco para el 18!' : percentage >= 50 ? '¡Vas por muy buen camino!' : 'Una vuelta más y quedas listo para la fonda.'}</p>
        </div>
        <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
          <div className="rounded-2xl bg-emerald-50 p-4 text-center"><strong className="block text-2xl text-emerald-700">{correct}</strong><span className="text-sm text-emerald-800">Aciertos</span></div>
          <div className="rounded-2xl bg-red-50 p-4 text-center"><strong className="block text-2xl text-red-700">{wrong}</strong><span className="text-sm text-red-800">Por repasar</span></div>
          <div className="rounded-2xl bg-blue-50 p-4 text-center"><strong className="block text-2xl text-blue-800">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</strong><span className="text-sm text-blue-800">Tiempo</span></div>
          <Button onClick={reset} className="mt-2 h-12 rounded-xl bg-red-600 hover:bg-red-700 sm:col-span-3"><RotateCcw className="h-4 w-4" /> Jugar otra vez</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-950/5">
      <div className="border-b border-slate-100 p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Rosco chileno</p>
            <h3 className="mt-1 text-2xl font-black text-blue-950">Pasapalabras del 18</h3>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-600" /> {correct}</span>
            <span className="flex items-center gap-1.5"><X className="h-4 w-4 text-red-600" /> {wrong}</span>
            <span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-blue-700" /> {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</span>
          </div>
        </div>
        <Progress value={(answered / rosco.length) * 100} className="mt-5 h-2 bg-slate-100 [&>div]:bg-red-600" />
      </div>

      <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="grid grid-cols-7 gap-2 lg:grid-cols-5" aria-label="Estado de las letras">
          {rosco.map((item, itemIndex) => {
            const status = statuses[itemIndex];
            return (
              <div key={item.letter} aria-label={`Letra ${item.letter}: ${status}`} className={`flex aspect-square items-center justify-center rounded-full text-sm font-black transition ${itemIndex === index ? 'scale-110 ring-4 ring-blue-200' : ''} ${status === 'acierto' ? 'bg-emerald-600 text-white' : status === 'error' ? 'bg-red-600 text-white' : status === 'pasapalabra' ? 'bg-amber-100 text-amber-800' : 'bg-blue-950 text-white'}`}>
                {item.letter}
              </div>
            );
          })}
        </div>

        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">{current.category}</span>
          <p className="mt-4 text-xl font-bold leading-8 text-slate-900 sm:text-2xl">{current.clue}</p>

          {feedback ? (
            <div className={`mt-6 rounded-2xl border p-5 ${feedback === 'acierto' ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`} role="status">
              <div className="flex gap-3">
                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${feedback === 'acierto' ? 'bg-emerald-600' : 'bg-red-600'}`}>{feedback === 'acierto' ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}</div>
                <div><p className="font-bold text-slate-900">{feedback === 'acierto' ? '¡Correcto!' : 'Casi. La respuesta era:'}</p><p className="mt-1 text-slate-700">{feedback === 'acierto' ? current.answer : <strong className="capitalize">{current.answer}</strong>}</p></div>
              </div>
              <Button onClick={continueGame} className="mt-4 h-11 w-full rounded-xl bg-blue-950 hover:bg-blue-900">Continuar</Button>
            </div>
          ) : (
            <form className="mt-6 space-y-3" onSubmit={(event) => { event.preventDefault(); answer(); }}>
              <Input ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)} placeholder="Escribe tu respuesta" aria-label="Tu respuesta" className="h-12 rounded-xl border-slate-300 text-base focus-visible:ring-blue-800" />
              <div className="grid grid-cols-2 gap-3">
                <Button type="submit" disabled={!value.trim()} className="h-12 rounded-xl bg-red-600 font-bold hover:bg-red-700">Responder</Button>
                <Button type="button" variant="outline" onClick={pass} className="h-12 rounded-xl border-slate-300 font-bold text-blue-950"><SkipForward className="h-4 w-4" /> Pasapalabra</Button>
              </div>
            </form>
          )}
          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500"><Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" /> Puedes escribir con o sin tilde. Las palabras pasadas volverán a aparecer.</div>
        </div>
      </div>
    </section>
  );
}
