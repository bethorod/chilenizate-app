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
  { letter: 'A', clue: 'Sistema político español que impuso el dominio absoluto en Chile colonial, contiene la letra A.', answer: 'absolutismo', category: 'historia' },
  { letter: 'B', clue: 'Poeta chileno, Premio Nobel de Literatura en 1971, con la letra B.', answer: 'neruda', category: 'cultura' },
  { letter: 'C', clue: 'Proceso militar que derrocó al gobierno de Allende en 1973, contiene la letra C.', answer: 'pronunciamiento', category: 'historia' },
  { letter: 'D', clue: 'Régimen político instaurado tras el golpe militar, contiene la letra D.', answer: 'dictadura', category: 'historia' },
  { letter: 'E', clue: 'Proceso de transición hacia la democracia chilena, contiene la letra E.', answer: 'democratización', category: 'historia' },
  { letter: 'F', clue: 'Presidente socialista chileno derrocado en 1973, contiene la letra F.', answer: 'allende', category: 'historia' },
  { letter: 'G', clue: 'Escritora chilena Premio Nobel de Literatura 1945, contiene la letra G.', answer: 'mistral', category: 'cultura' },
  { letter: 'H', clue: 'Prócer de la independencia chilena, contiene la letra H.', answer: 'ohiggins', category: 'historia' },
  { letter: 'I', clue: 'Pueblo originario de la Región de Tarapacá, contiene la letra I.', answer: 'aimara', category: 'cultura' },
  { letter: 'J', clue: 'Líder mapuche que resistió la conquista española, contiene la letra J.', answer: 'lautaro', category: 'historia' },
  { letter: 'K', clue: 'Instrumento ceremonial mapuche de percusión, contiene la letra K.', answer: 'kultrun', category: 'cultura' },
  { letter: 'L', clue: 'Joven mapuche que se enfrentó a los españoles, contiene la letra L.', answer: 'lautaro', category: 'historia' },
  { letter: 'M', clue: 'Pueblo originario del centro-sur de Chile, contiene la letra M.', answer: 'mapuche', category: 'cultura' },
  { letter: 'N', clue: 'Poeta surrealista chileno, contiene la letra N.', answer: 'neruda', category: 'cultura' },
  { letter: 'Ñ', clue: 'Expresión cariñosa muy chilena para referirse a alguien, contiene la letra Ñ.', answer: 'ñoño', category: 'modismos' },
  { letter: 'O', clue: 'Director de la Independencia y primer gobierno patrio, contiene la letra O.', answer: 'ohiggins', category: 'historia' },
  { letter: 'P', clue: 'Dictador militar que gobernó Chile entre 1973-1990, contiene la letra P.', answer: 'pinochet', category: 'historia' },
  { letter: 'Q', clue: 'Pueblo originario del altiplano andino, contiene la letra Q.', answer: 'quechua', category: 'cultura' },
  { letter: 'R', clue: 'Sistema de gobierno instaurado tras la independencia, contiene la letra R.', answer: 'republica', category: 'historia' },
  { letter: 'S', clue: 'Político socialista chileno, fundador del partido, contiene la letra S.', answer: 'allende', category: 'historia' },
  { letter: 'T', clue: 'Transición política hacia la democracia, contiene la letra T.', answer: 'transicion', category: 'historia' },
  { letter: 'U', clue: 'Partido político histórico de Chile, contiene la letra U.', answer: 'conservador', category: 'historia' },
  { letter: 'V', clue: 'Ciudad puerto patrimonio de la humanidad, contiene la letra V.', answer: 'valparaiso', category: 'cultura' },
  { letter: 'W', clue: 'Territorio ancestral mapuche, contiene la letra W.', answer: 'wallmapu', category: 'cultura' },
  { letter: 'X', clue: 'Poeta chileno cuyo apellido contiene la letra X.', answer: 'huidobro', category: 'cultura' },
  { letter: 'Y', clue: 'Pueblo originario del extremo sur chileno, contiene la letra Y.', answer: 'yaganes', category: 'historia' },
  { letter: 'Z', clue: 'Región minera del norte que contiene la letra Z.', answer: 'antofagasta', category: 'historia' },
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