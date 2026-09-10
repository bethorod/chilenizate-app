import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, Heart, RotateCcw, Sparkles, Trophy, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const questions = [
  { station: 'La mesa chilena', emoji: '🥟', question: '¿Qué ingrediente define el relleno tradicional de una empanada de pino?', options: ['Carne y cebolla', 'Mariscos y queso', 'Zapallo y choclo'], correct: 0, fact: 'El pino es una preparación de carne y cebolla; su nombre no tiene relación con el árbol.' },
  { station: 'La pista de baile', emoji: '💃', question: '¿Qué elemento llevan ambos bailarines de cueca?', options: ['Un pañuelo', 'Un poncho', 'Un pandero'], correct: 0, fact: 'El pañuelo acompaña los desplazamientos y ayuda a expresar el juego de la pareja.' },
  { station: 'Juegos de la fonda', emoji: '🎯', question: 'En la rayuela, ¿qué se intenta acercar a la lienza?', options: ['Una bolita', 'Un tejo', 'Un trompo'], correct: 1, fact: 'Los jugadores lanzan tejos hacia una cancha con una línea tensada llamada lienza.' },
  { station: 'Sonidos de Chile', emoji: '🎺', question: '¿Qué variante de cueca suele acompañarse con bandas de bronce?', options: ['Cueca nortina', 'Cueca chilota', 'Cueca porteña'], correct: 0, fact: 'La cueca nortina dialoga con la tradición musical andina y suele ser instrumental.' },
  { station: 'Sabores dulces', emoji: '🍑', question: '¿Qué fruta deshidratada lleva el mote con huesillos?', options: ['Manzana', 'Durazno', 'Ciruela'], correct: 1, fact: 'Los huesillos son duraznos deshidratados que se cocinan para preparar el jugo.' },
  { station: 'Vestirse para bailar', emoji: '🤠', question: '¿Cuál de estas prendas pertenece al atuendo del huaso de fiesta?', options: ['Chamanto', 'Poncho de lluvia', 'Boina marinera'], correct: 0, fact: 'El chamanto es una prenda reversible tejida, usada en ocasiones de especial elegancia.' },
  { station: 'Septiembre seguro', emoji: '🪁', question: '¿Dónde es más seguro elevar un volantín?', options: ['Junto al tendido eléctrico', 'En un espacio abierto', 'Desde una calle transitada'], correct: 1, fact: 'Busca espacios abiertos, lejos de cables y tránsito, y nunca uses hilo curado.' },
  { station: 'Memoria histórica', emoji: '🇨🇱', question: '¿Qué acontecimiento de 1810 recuerda el 18 de septiembre?', options: ['La Primera Junta de Gobierno', 'La fundación de Santiago', 'La Batalla de Maipú'], correct: 0, fact: 'La Primera Junta Nacional de Gobierno se formó el 18 de septiembre de 1810.' },
];

export default function FondaChallenge() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState(() => Number(window.localStorage.getItem('chilenizate-ruta18-best') || 0));
  const current = questions[questionIndex];
  const isCorrect = selected === current.correct;

  const title = useMemo(() => {
    if (score >= 700) return '¡Maestro de la fonda!';
    if (score >= 400) return '¡Dieciochero de corazón!';
    return '¡Buen primer recorrido!';
  }, [score]);

  useEffect(() => {
    if (finished && score > best) {
      setBest(score);
      window.localStorage.setItem('chilenizate-ruta18-best', String(score));
    }
  }, [finished, score, best]);

  const choose = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === current.correct) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setScore((currentScore) => currentScore + 100 + Math.min((nextStreak - 1) * 20, 60));
    } else {
      setStreak(0);
      setLives((currentLives) => Math.max(0, currentLives - 1));
    }
  };

  const next = () => {
    if (questionIndex === questions.length - 1 || lives === 0) {
      setFinished(true);
      return;
    }
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelected(null);
  };

  const reset = () => {
    setQuestionIndex(0);
    setSelected(null);
    setScore(0);
    setStreak(0);
    setLives(3);
    setFinished(false);
  };

  if (finished) {
    return (
      <section className="relative overflow-hidden rounded-3xl bg-blue-950 p-6 text-white shadow-xl sm:p-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-600 text-4xl shadow-lg">🏆</div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-red-300">Ruta completada</p>
          <h3 className="mt-2 text-3xl font-black sm:text-5xl">{title}</h3>
          <p className="mt-3 text-blue-100">Sumaste <strong className="text-white">{score} puntos</strong> con lo que sabes de nuestras Fiestas Patrias.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-4"><span className="block text-2xl font-black">{score}</span><span className="text-xs text-blue-200">Puntaje</span></div>
            <div className="rounded-2xl bg-white/10 p-4"><span className="block text-2xl font-black">{Math.max(best, score)}</span><span className="text-xs text-blue-200">Mejor marca</span></div>
          </div>
          <Button onClick={reset} className="mt-6 h-12 w-full rounded-xl bg-red-600 font-bold hover:bg-red-500"><RotateCcw className="h-4 w-4" /> Recorrer de nuevo</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-950/5">
      <div className="bg-blue-950 px-5 py-5 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-red-300"><Sparkles className="h-4 w-4" /> Ruta del 18</div>
            <h3 className="mt-1 text-xl font-black sm:text-2xl">{current.station}</h3>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="flex items-center gap-1.5 text-red-300" aria-label={`${lives} vidas`}>{[0, 1, 2].map((heart) => <Heart key={heart} className={`h-4 w-4 ${heart < lives ? 'fill-current' : 'opacity-25'}`} />)}</span>
            <span className="flex items-center gap-1.5"><Trophy className="h-4 w-4 text-amber-300" /> {score}</span>
          </div>
        </div>
        <Progress value={((questionIndex + 1) / questions.length) * 100} className="mt-5 h-2 bg-white/15 [&>div]:bg-red-500" />
        <p className="mt-2 text-right text-xs text-blue-200">Estación {questionIndex + 1} de {questions.length}</p>
      </div>

      <div className="p-5 sm:p-8">
        <div className="flex gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-3xl ring-1 ring-red-100">{current.emoji}</div>
          <h4 className="text-xl font-black leading-8 text-blue-950 sm:text-2xl">{current.question}</h4>
        </div>
        <div className="mt-7 grid gap-3">
          {current.options.map((option, optionIndex) => {
            const showCorrect = selected !== null && optionIndex === current.correct;
            const showWrong = selected === optionIndex && optionIndex !== current.correct;
            return (
              <button key={option} type="button" onClick={() => choose(optionIndex)} disabled={selected !== null} className={`flex min-h-14 w-full items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 ${showCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : showWrong ? 'border-red-500 bg-red-50 text-red-900' : selected !== null ? 'border-slate-200 bg-slate-50 text-slate-400' : 'border-slate-200 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50'}`}>
                <span>{option}</span>
                {showCorrect && <Check className="h-5 w-5 text-emerald-600" />}
                {showWrong && <X className="h-5 w-5 text-red-600" />}
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <div className={`mt-6 rounded-2xl border p-5 ${isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`} role="status">
            <p className={`font-black ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>{isCorrect ? `¡Bien! +${100 + Math.min((streak - 1) * 20, 60)} puntos` : 'No era esa, pero acabas de aprender algo nuevo.'}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{current.fact}</p>
            <Button onClick={next} className="mt-4 h-11 w-full rounded-xl bg-blue-950 font-bold hover:bg-blue-900">{questionIndex === questions.length - 1 || lives === 0 ? 'Ver resultado' : 'Siguiente estación'} <ArrowRight className="h-4 w-4" /></Button>
          </div>
        )}
      </div>
    </section>
  );
}
