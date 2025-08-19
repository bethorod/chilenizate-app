import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface RoscoItem {
  letter: string;
  clue: string;
  answer: string; // lowercase expected
  category: 'historia' | 'moneda' | 'modismos' | 'cultura';
}

type Status = 'pendiente' | 'acierto' | 'error' | 'pasapalabra';

const sampleData: RoscoItem[] = [
  { letter: 'A', clue: 'Período de dominio español previo a la independencia de Chile.', answer: 'absolutismo', category: 'historia' },
  { letter: 'B', clue: 'Moneda de Chile que contiene la letra B.', answer: 'billete', category: 'moneda' },
  { letter: 'C', clue: 'Danza nacional de Chile que contiene la letra C.', answer: 'cueca', category: 'cultura' },
  { letter: 'D', clue: 'Baile tradicional que representa el cortejo, con la letra D.', answer: 'danza', category: 'cultura' },
  { letter: 'E', clue: 'Bandera nacional que ondea, contiene la letra E.', answer: 'emblema', category: 'historia' },
  { letter: 'F', clue: 'Moneda de oro española usada en Chile colonial, con la letra F.', answer: 'fuerte', category: 'moneda' },
  { letter: 'G', clue: 'Expresión chilena para referirse a una persona, con la letra G.', answer: 'gallo', category: 'modismos' },
  { letter: 'H', clue: 'Canto patrio de Chile, contiene la letra H.', answer: 'himno', category: 'cultura' },
  { letter: 'I', clue: 'Proceso histórico de liberación de Chile, contiene la letra I.', answer: 'independencia', category: 'historia' },
  { letter: 'J', clue: 'Expresión chilena para decir que algo está genial, con la letra J.', answer: 'joya', category: 'modismos' },
  { letter: 'K', clue: 'Pueblo mapuche del sur, contiene la letra K.', answer: 'kultrún', category: 'cultura' },
  { letter: 'L', clue: 'Expresión chilena para mil pesos, contiene la letra L.', answer: 'luka', category: 'moneda' },
  { letter: 'M', clue: 'Cordillera principal de Chile, contiene la letra M.', answer: 'montañas', category: 'historia' },
  { letter: 'N', clue: 'Región extrema del país, contiene la letra N.', answer: 'norte', category: 'cultura' },
  { letter: 'Ñ', clue: 'Expresión chilena cariñosa, contiene la letra Ñ.', answer: 'ñoño', category: 'modismos' },
  { letter: 'O', clue: 'Libertador de Chile, contiene la letra O.', answer: 'ohiggins', category: 'historia' },
  { letter: 'P', clue: 'Moneda oficial de Chile, contiene la letra P.', answer: 'peso', category: 'moneda' },
  { letter: 'Q', clue: 'Pueblo originario del norte, contiene la letra Q.', answer: 'quechua', category: 'cultura' },
  { letter: 'R', clue: 'Forma de gobierno de Chile, contiene la letra R.', answer: 'republica', category: 'historia' },
  { letter: 'S', clue: 'Expresión chilena para dinero, contiene la letra S.', answer: 'sope', category: 'modismos' },
  { letter: 'T', clue: 'Cambio de moneda, contiene la letra T.', answer: 'tasa', category: 'moneda' },
  { letter: 'U', clue: 'Moneda de cuenta antigua chilena, contiene la letra U.', answer: 'unidad', category: 'moneda' },
  { letter: 'V', clue: 'Puerto principal de Chile, contiene la letra V.', answer: 'valparaiso', category: 'cultura' },
  { letter: 'W', clue: 'Territorio mapuche, contiene la letra W.', answer: 'wallmapu', category: 'cultura' },
  { letter: 'X', clue: 'Letra poco común en español, con la letra X.', answer: 'xilófono', category: 'cultura' },
  { letter: 'Y', clue: 'Región del extremo sur, contiene la letra Y.', answer: 'yaganes', category: 'historia' },
  { letter: 'Z', clue: 'Región del extremo norte de Chile, contiene la letra Z.', answer: 'zona', category: 'historia' },
];

// Utility to normalize answer
const normalize = (s: string) => s.trim().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const Pasapalabras: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [statuses, setStatuses] = useState<Status[]>(() => sampleData.map(() => 'pendiente'));
  const [finished, setFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const remaining = useMemo(() => statuses.filter(s => s === 'pendiente' || s === 'pasapalabra').length, [statuses]);
  const correct = useMemo(() => statuses.filter(s => s === 'acierto').length, [statuses]);
  const wrong = useMemo(() => statuses.filter(s => s === 'error').length, [statuses]);

  const current = sampleData[index];

  useEffect(() => {
    document.title = 'Pasapalabras Chile | Practica';
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [index, finished]);

  const goNext = () => {
    // Find next unanswered or passed
    const nextIdx = sampleData.findIndex((_, i) => i > index && (statuses[i] === 'pendiente' || statuses[i] === 'pasapalabra'));
    if (nextIdx !== -1) {
      setIndex(nextIdx);
      return;
    }
    // Loop from start
    const loopIdx = sampleData.findIndex((_, i) => (statuses[i] === 'pendiente' || statuses[i] === 'pasapalabra'));
    if (loopIdx !== -1) {
      setIndex(loopIdx);
    } else {
      setFinished(true);
    }
  };

  const handleAnswer = () => {
    if (finished) return;
    const user = normalize(value);
    const expected = normalize(current.answer);
    setStatuses(prev => {
      const next = [...prev];
      next[index] = user === expected ? 'acierto' : 'error';
      return next;
    });
    setValue('');
    goNext();
  };

  const handlePass = () => {
    if (finished) return;
    setStatuses(prev => {
      const next = [...prev];
      if (next[index] === 'pendiente') next[index] = 'pasapalabra';
      return next;
    });
    setValue('');
    goNext();
  };

  const handleFinish = () => {
    setFinished(true);
  };

  const reset = () => {
    setStatuses(sampleData.map(() => 'pendiente'));
    setIndex(0);
    setValue('');
    setFinished(false);
  };

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Juego: Pasapalabras</h3>
        <div className="flex gap-2 items-center">
          <Badge variant="secondary">Pendientes: {remaining}</Badge>
          <Badge className="bg-green-600 text-white">Aciertos: {correct}</Badge>
          <Badge className="bg-red-600 text-white">Errores: {wrong}</Badge>
        </div>
      </header>

      {!finished ? (
        <div className="grid gap-4">
          <div className="flex flex-wrap gap-2">
            {sampleData.map((item, i) => (
              <span
                key={item.letter}
                className={
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm border ' +
                  (i === index ? 'ring-2 ring-blue-400 ' : '') +
                  (statuses[i] === 'acierto' ? 'bg-green-100 border-green-300 text-green-700' :
                   statuses[i] === 'error' ? 'bg-red-100 border-red-300 text-red-700' :
                   statuses[i] === 'pasapalabra' ? 'bg-yellow-100 border-yellow-300 text-yellow-700' : 'bg-white')
                }
                aria-label={`Letra ${item.letter}`}
              >
                {item.letter}
              </span>
            ))}
          </div>

          <article className="p-4 rounded-lg border bg-white/70">
            <p className="text-sm text-gray-600 mb-2">Categoría: <strong className="capitalize">{current.category}</strong></p>
            <p className="text-lg">{current.clue}</p>
          </article>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Escribe tu respuesta..."
              onKeyDown={(e) => { if (e.key === 'Enter') handleAnswer(); }}
            />
            <div className="flex gap-2">
              <Button onClick={handleAnswer}>Responder</Button>
              <Button variant="secondary" onClick={handlePass}>Pasapalabra</Button>
              <Button variant="outline" onClick={handleFinish}>Terminar</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          <div className="p-4 rounded-lg border bg-white/70">
            <h4 className="text-lg font-semibold mb-2">Resultados</h4>
            <p className="text-gray-700">Aciertos: <strong>{correct}</strong> · Errores: <strong>{wrong}</strong></p>
          </div>
          <div className="flex gap-2">
            <Button onClick={reset}>Jugar de nuevo</Button>
          </div>
          <details className="p-4 rounded-lg border bg-white/50">
            <summary className="cursor-pointer">Ver respuestas</summary>
            <ul className="mt-2 space-y-1 text-sm">
              {sampleData.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Badge variant="outline">{item.letter}</Badge>
                  <span className="text-gray-700">{item.clue}</span>
                  <span className="ml-auto font-medium">{item.answer}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      )}
    </section>
  );
};

export default Pasapalabras;