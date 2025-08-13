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
  { letter: 'A', clue: 'Período en que Chile se independiza oficialmente (con la A).', answer: 'absolutismo', category: 'historia' },
  { letter: 'B', clue: 'Billete chileno que tuvo el retrato de Andrés Bello (con la B).', answer: 'bello', category: 'moneda' },
  { letter: 'C', clue: 'Expresión chilena para decir “amigo” (con la C).', answer: 'compadre', category: 'modismos' },
  { letter: 'D', clue: 'Danza nacional de Chile.', answer: 'cueca', category: 'cultura' },
  { letter: 'E', clue: 'Emblema patrio que ondea los 18 de septiembre.', answer: 'enseña', category: 'historia' },
  { letter: 'F', clue: 'Forma de pago metálica anterior al peso actual.', answer: 'fuerte', category: 'moneda' },
  { letter: 'G', clue: 'Grupo musical folclórico representativo (con la G).', answer: 'grupo', category: 'cultura' },
  { letter: 'H', clue: 'Héroe naval de Iquique.', answer: 'prat', category: 'historia' },
  { letter: 'I', clue: 'Impuesto que se aplica a compras (sigla).', answer: 'iva', category: 'cultura' },
  { letter: 'J', clue: 'Jerga chilena para referirse a trabajo.', answer: 'pega', category: 'modismos' },
  { letter: 'L', clue: 'Letra con la que empieza la moneda actual.', answer: 'peso', category: 'moneda' },
  { letter: 'M', clue: 'Montaña blanca de nuestro escudo.', answer: 'andés', category: 'historia' },
  { letter: 'P', clue: 'Palabra con la que se conoce a la bebida nacional hecha de vino con fruta.', answer: 'ponche', category: 'cultura' },
  { letter: 'Q', clue: 'Quebrada donde se firmó parte de la independencia (con la Q).', answer: 'quillota', category: 'historia' },
  { letter: 'S', clue: 'Sinónimo chileno de dinero (con la S).', answer: 'sope', category: 'modismos' },
  { letter: 'T', clue: 'Tipo de cambio usado para comprar moneda extranjera.', answer: 'tasa', category: 'moneda' },
  { letter: 'V', clue: 'Valparaíso es famosa por sus… (con la V).', answer: 'vistas', category: 'cultura' },
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
            <p className="text-lg">Con la <strong>{current.letter}</strong>: {current.clue}</p>
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
