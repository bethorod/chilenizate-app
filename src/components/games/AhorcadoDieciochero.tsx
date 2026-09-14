import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Eye, Flag, Lightbulb, Maximize2, Minimize2, RefreshCcw, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type WordItem = {
  word: string;
  category:
    | 'Bailes'
    | 'Tradiciones'
    | 'Comidas'
    | 'Bebidas dieciocheras'
    | 'Cultura chilena'
    | 'Modismos chilenos'
    | 'Personajes históricos'
    | 'Infaltables del asado';
  hint: string;
};

const WORDS: WordItem[] = [
  { word: 'CUECA', category: 'Bailes', hint: 'Danza nacional que se baila con un pañuelo.' },
  { word: 'SAJURIANA', category: 'Bailes', hint: 'Danza de pareja que llegó desde Argentina durante el siglo XIX.' },
  { word: 'REFALOSA', category: 'Bailes', hint: 'Baile de pareja cuyo nombre recuerda un movimiento resbalado.' },
  { word: 'CUECA NORTINA', category: 'Bailes', hint: 'Variante que suele acompañarse con bandas de bronce.' },
  { word: 'CUECA CHILOTA', category: 'Bailes', hint: 'Variante sureña conocida por su zapateo enérgico.' },
  { word: 'CACHIMBO', category: 'Bailes', hint: 'Baile tradicional del norte de Chile, especialmente de Tarapacá.' },
  { word: 'TROTE TARAPAQUEÑO', category: 'Bailes', hint: 'Danza nortina de pasos cortos y ritmo alegre.' },
  { word: 'SIRILLA', category: 'Bailes', hint: 'Danza de origen español que forma parte del folclore chilote.' },
  { word: 'FONDA', category: 'Tradiciones', hint: 'Lugar de encuentro con música, comida y baile.' },
  { word: 'RAMADA', category: 'Tradiciones', hint: 'Recinto festivo que antiguamente se cubría con ramas.' },
  { word: 'VOLANTÍN', category: 'Tradiciones', hint: 'Sube al cielo en septiembre, siempre lejos de los cables.' },
  { word: 'RAYUELA', category: 'Tradiciones', hint: 'Juego donde se lanzan tejos hacia una lienza.' },
  { word: 'EMBOQUE', category: 'Tradiciones', hint: 'Juguete de madera que exige puntería y coordinación.' },
  { word: 'TROMPO', category: 'Tradiciones', hint: 'Juguete que gira sobre una punta después de lanzarlo con una cuerda.' },
  { word: 'PALO ENSEBADO', category: 'Tradiciones', hint: 'Desafío festivo que consiste en trepar un poste resbaladizo.' },
  { word: 'PAÑUELO', category: 'Tradiciones', hint: 'Accesorio que los bailarines agitan durante la cueca.' },
  { word: 'DIECIOCHO', category: 'Tradiciones', hint: 'Forma popular de llamar a las celebraciones de Fiestas Patrias.' },
  { word: 'BRINDIS', category: 'Tradiciones', hint: 'Gesto de levantar los vasos para celebrar y compartir buenos deseos.' },
  { word: 'EMPANADA', category: 'Comidas', hint: 'Masa horneada cuyo relleno tradicional se llama pino.' },
  { word: 'ANTICUCHO', category: 'Comidas', hint: 'Brocheta que combina carne y verduras a la parrilla.' },
  { word: 'SOPAIPILLA', category: 'Comidas', hint: 'Masa frita que puede acompañarse con pebre.' },
  { word: 'MOTE CON HUESILLOS', category: 'Comidas', hint: 'Bebida dulce con trigo cocido y duraznos deshidratados.' },
  { word: 'CHORIPÁN', category: 'Comidas', hint: 'Pan caliente con una longaniza recién salida de la parrilla.' },
  { word: 'PEBRE', category: 'Comidas', hint: 'Mezcla fresca con tomate, cebolla, cilantro y ají.' },
  { word: 'PASTEL DE CHOCLO', category: 'Comidas', hint: 'Preparación horneada con una cubierta de choclo molido y relleno de pino.' },
  { word: 'HUMITA', category: 'Comidas', hint: 'Pasta de choclo aliñada y cocida dentro de sus propias hojas.' },
  { word: 'COMPLETO', category: 'Comidas', hint: 'Pan con vienesa que puede llevar tomate, palta y mayonesa.' },
  { word: 'CAZUELA', category: 'Comidas', hint: 'Caldo casero con carne, papas, zapallo y otras verduras.' },
  { word: 'CALZONES ROTOS', category: 'Comidas', hint: 'Masa dulce frita, tradicional en los días fríos.' },
  { word: 'ALFAJOR', category: 'Comidas', hint: 'Dulce formado por dos tapas unidas con manjar.' },
  { word: 'CHICHA', category: 'Bebidas dieciocheras', hint: 'Bebida fermentada tradicional muy asociada a las Fiestas Patrias.' },
  { word: 'PIPEÑO', category: 'Bebidas dieciocheras', hint: 'Vino joven y dulce usado para preparar el terremoto; solo para adultos.' },
  { word: 'TERREMOTO', category: 'Bebidas dieciocheras', hint: 'Bebida para adultos preparada con pipeño y helado de piña.' },
  { word: 'BORGOÑA', category: 'Bebidas dieciocheras', hint: 'Mezcla para adultos de vino tinto con frutillas.' },
  { word: 'NAVEGADO', category: 'Bebidas dieciocheras', hint: 'Vino caliente para adultos que se aromatiza con naranja y especias.' },
  { word: 'CHICHA DE MANZANA', category: 'Bebidas dieciocheras', hint: 'Bebida fermentada típica del sur, elaborada con una fruta muy conocida.' },
  { word: 'COPIHUE', category: 'Cultura chilena', hint: 'Flor nacional de Chile, habitualmente de color rojo.' },
  { word: 'HUEMUL', category: 'Cultura chilena', hint: 'Ciervo nativo que aparece en el escudo nacional.' },
  { word: 'CÓNDOR', category: 'Cultura chilena', hint: 'Gran ave andina representada en el escudo nacional.' },
  { word: 'CHINCHINERO', category: 'Cultura chilena', hint: 'Artista popular que baila mientras toca un bombo sujeto a su espalda.' },
  { word: 'ORGANILLERO', category: 'Cultura chilena', hint: 'Artista callejero que interpreta melodías con un instrumento de manivela.' },
  { word: 'KULTRÚN', category: 'Cultura chilena', hint: 'Tambor ceremonial del pueblo Mapuche.' },
  { word: 'PALÍN', category: 'Cultura chilena', hint: 'Juego ancestral Mapuche practicado con bastones y una pelota.' },
  { word: 'MINGA CHILOTA', category: 'Cultura chilena', hint: 'Trabajo comunitario de Chiloé en el que vecinos colaboran en una gran tarea.' },
  { word: 'CHAMANTO', category: 'Cultura chilena', hint: 'Prenda reversible tejida que forma parte del atuendo del huaso.' },
  { word: 'CHUPALLA', category: 'Cultura chilena', hint: 'Sombrero de paja tradicional usado por el huaso.' },
  { word: 'RAPA NUI', category: 'Cultura chilena', hint: 'Nombre originario de la isla chilena famosa por sus moáis.' },
  { word: 'VIOLETA PARRA', category: 'Cultura chilena', hint: 'Artista, compositora e investigadora fundamental del folclore chileno.' },
  { word: 'GABRIELA MISTRAL', category: 'Cultura chilena', hint: 'Poeta chilena que recibió el Premio Nobel de Literatura.' },
  { word: 'BACÁN', category: 'Modismos chilenos', hint: 'Se dice de algo muy bueno, entretenido o admirable.' },
  { word: 'AL TIRO', category: 'Modismos chilenos', hint: 'Expresión chilena que significa hacer algo de inmediato.' },
  { word: 'CACHAI', category: 'Modismos chilenos', hint: 'Pregunta coloquial usada para saber si alguien entendió.' },
  { word: 'FOME', category: 'Modismos chilenos', hint: 'Palabra chilena para algo aburrido o sin gracia.' },
  { word: 'POLOLO', category: 'Modismos chilenos', hint: 'Nombre coloquial que se da en Chile a una pareja o novio.' },
  { word: 'CARRETE', category: 'Modismos chilenos', hint: 'Forma coloquial chilena de llamar a una fiesta.' },
  { word: 'GUAGUA', category: 'Modismos chilenos', hint: 'Palabra muy usada en Chile para referirse a un bebé.' },
  { word: 'LUCA', category: 'Modismos chilenos', hint: 'Forma coloquial de referirse a mil pesos.' },
  { word: 'PEGA', category: 'Modismos chilenos', hint: 'Manera informal de llamar al trabajo.' },
  { word: 'PITUTO', category: 'Modismos chilenos', hint: 'Trabajo ocasional o contacto que ayuda a conseguir una oportunidad.' },
  { word: 'COPUCHA', category: 'Modismos chilenos', hint: 'Noticia informal o chisme que se cuenta entre conocidos.' },
  { word: 'APAÑAR', category: 'Modismos chilenos', hint: 'Acompañar, apoyar o sumarse al plan de otra persona.' },
  { word: 'PIOLA', category: 'Modismos chilenos', hint: 'Puede describir algo tranquilo, discreto o agradable.' },
  { word: "BERNARDO O'HIGGINS", category: 'Personajes históricos', hint: 'Director Supremo asociado a la consolidación de la independencia.' },
  { word: 'JAVIERA CARRERA', category: 'Personajes históricos', hint: 'Patriota recordada por su apoyo a la causa independentista.' },
  { word: 'JOSÉ MIGUEL CARRERA', category: 'Personajes históricos', hint: 'Líder de la Patria Vieja y miembro de una destacada familia patriota.' },
  { word: 'MATEO DE TORO Y ZAMBRANO', category: 'Personajes históricos', hint: 'Presidió la Primera Junta Nacional de Gobierno de 1810.' },
  { word: 'MANUEL RODRÍGUEZ', category: 'Personajes históricos', hint: 'Guerrillero y figura popular del proceso de independencia.' },
  { word: 'PARRILLA', category: 'Infaltables del asado', hint: 'Superficie metálica donde se cocina sobre las brasas.' },
  { word: 'CARBÓN', category: 'Infaltables del asado', hint: 'Combustible que debe convertirse en brasas antes de cocinar.' },
  { word: 'PINZAS', category: 'Infaltables del asado', hint: 'Utensilio para dar vuelta los alimentos sin pincharlos.' },
  { word: 'LONGANIZA', category: 'Infaltables del asado', hint: 'Embutido muy popular en la parrilla chilena.' },
  { word: 'ENSALADA CHILENA', category: 'Infaltables del asado', hint: 'Acompañamiento de tomate, cebolla y cilantro.' },
  { word: 'BRASAS', category: 'Infaltables del asado', hint: 'Carbones encendidos, sin llama alta, que entregan calor parejo.' },
  { word: 'SAL GRUESA', category: 'Infaltables del asado', hint: 'Condimento de cristales grandes usado para sazonar la carne.' },
  { word: 'MARQUETA', category: 'Infaltables del asado', hint: 'Pan chileno crujiente que también se conoce como pan batido.' },
];

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const MAX_MISTAKES = 6;

const normalize = (value: string) => value.toUpperCase().replace(/Ñ/g, '§').normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/§/g, 'Ñ');
const isLetter = (character: string) => /[A-ZÑÁÉÍÓÚÜ]/i.test(character);

function createShuffledDeck(avoidFirstIndex = -1) {
  const deck = WORDS.map((_, index) => index);

  for (let index = deck.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }

  if (deck.length > 1 && deck[0] === avoidFirstIndex) {
    [deck[0], deck[1]] = [deck[1], deck[0]];
  }

  return deck;
}

export default function AhorcadoDieciochero() {
  const gameRef = useRef<HTMLDivElement>(null);
  const [wordDeck, setWordDeck] = useState(() => createShuffledDeck());
  const [deckPosition, setDeckPosition] = useState(0);
  const [guessed, setGuessed] = useState<string[]>([]);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [empanadas, setEmpanadas] = useState(0);
  const [sopaipillas, setSopaipillas] = useState(0);
  const [round, setRound] = useState(1);
  const [streak, setStreak] = useState(0);
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);
  const [isPseudoFullscreen, setIsPseudoFullscreen] = useState(false);
  const [fullscreenPopoverOpen, setFullscreenPopoverOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [newReward, setNewReward] = useState<string | null>(null);
  const wordIndex = wordDeck[deckPosition];
  const item = WORDS[wordIndex];
  const normalizedWord = normalize(item.word);

  const mistakes = useMemo(
    () => guessed.filter((letter) => !normalizedWord.includes(letter)).length,
    [guessed, normalizedWord],
  );

  const uniqueWordLetters = useMemo(
    () => [...new Set([...normalizedWord].filter((character) => /[A-ZÑ]/.test(character)))],
    [normalizedWord],
  );

  const remainingAttempts = MAX_MISTAKES - mistakes;
  const isExpanded = isNativeFullscreen || isPseudoFullscreen;

  useEffect(() => {
    const onFullscreenChange = () => setIsNativeFullscreen(document.fullscreenElement === gameRef.current);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isPseudoFullscreen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isPseudoFullscreen]);

  const playTone = useCallback((correct: boolean) => {
    if (!soundOn) return;
    try {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = correct ? 660 : 180;
      oscillator.type = correct ? 'sine' : 'triangle';
      gain.gain.setValueAtTime(0.08, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.18);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.18);
      oscillator.addEventListener('ended', () => context.close());
    } catch {
      // El sonido es un detalle opcional; el juego continúa si el navegador lo bloquea.
    }
  }, [soundOn]);

  const guessLetter = useCallback((rawLetter: string) => {
    if (status !== 'playing') return;
    const letter = normalize(rawLetter);
    if (!LETTERS.includes(letter) || guessed.includes(letter)) return;

    const nextGuessed = [...guessed, letter];
    const correct = normalizedWord.includes(letter);
    setGuessed(nextGuessed);
    playTone(correct);

    if (correct) {
      setSopaipillas((value) => value + 1);
      setNewReward('+1 sopaipilla');
      window.setTimeout(() => setNewReward(null), 900);
      const hasWon = uniqueWordLetters.every((wordLetter) => nextGuessed.includes(wordLetter));
      if (hasWon) {
        setStatus('won');
        setEmpanadas((value) => value + 1);
        setStreak((value) => value + 1);
      }
    } else {
      setStreak(0);
      const nextMistakes = nextGuessed.filter((usedLetter) => !normalizedWord.includes(usedLetter)).length;
      if (nextMistakes >= MAX_MISTAKES) setStatus('lost');
    }
  }, [guessed, normalizedWord, playTone, status, uniqueWordLetters]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.length === 1 && isLetter(event.key)) guessLetter(event.key);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [guessLetter]);

  const nextWord = () => {
    if (deckPosition < wordDeck.length - 1) {
      setDeckPosition((current) => current + 1);
    } else {
      setWordDeck(createShuffledDeck(wordIndex));
      setDeckPosition(0);
    }
    setGuessed([]);
    setStatus('playing');
    setRound((value) => value + 1);
    setNewReward(null);
  };

  const resetSession = () => {
    setWordDeck(createShuffledDeck(wordIndex));
    setDeckPosition(0);
    setGuessed([]);
    setStatus('playing');
    setEmpanadas(0);
    setSopaipillas(0);
    setRound(1);
    setStreak(0);
    setNewReward(null);
  };

  const toggleFullscreen = async () => {
    setFullscreenPopoverOpen(false);
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (isPseudoFullscreen) {
      setIsPseudoFullscreen(false);
      return;
    }
    if (!gameRef.current?.requestFullscreen) {
      setIsPseudoFullscreen(true);
      return;
    }
    try {
      await gameRef.current.requestFullscreen();
    } catch {
      setIsPseudoFullscreen(true);
    }
  };

  const wordTokens = item.word.split(' ');

  return (
    <div ref={gameRef} className={`relative overflow-y-auto bg-[#f7f1e4] text-slate-900 ${isExpanded ? `min-h-screen min-h-[100svh] ${isPseudoFullscreen ? 'fixed inset-0 z-[100]' : ''}` : 'border-y border-slate-200 shadow-xl shadow-blue-950/10 sm:rounded-3xl sm:border'}`}>
      <div className="sticky top-0 z-20 border-b border-white/10 bg-blue-950 px-3 py-3 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-lg shadow">🇨🇱</div>
            <div className="min-w-0">
              <p className="truncate text-sm font-black sm:text-lg">Ahorcado Dieciochero</p>
              <p className="text-[10px] font-semibold text-blue-200 sm:text-xs">Ronda {round} · {remainingAttempts} intentos · {deckPosition + 1}/{wordDeck.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden items-center gap-3 rounded-xl bg-white/10 px-3 py-2 text-xs font-black min-[430px]:flex sm:text-sm">
              <span title="Empanadas ganadas">🥟 {empanadas}</span>
              <span title="Sopaipillas ganadas">🫓 {sopaipillas}</span>
            </div>
            <button type="button" onClick={() => setSoundOn((value) => !value)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20" aria-label={soundOn ? 'Silenciar juego' : 'Activar sonido'}>{soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}</button>
            {isExpanded ? (
              <button type="button" onClick={toggleFullscreen} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20" aria-label="Salir de pantalla completa"><Minimize2 className="h-4 w-4" /></button>
            ) : (
              <Popover open={fullscreenPopoverOpen} onOpenChange={setFullscreenPopoverOpen}>
                <PopoverTrigger asChild>
                  <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20" aria-label="Conocer la opción de pantalla completa"><Maximize2 className="h-4 w-4" /></button>
                </PopoverTrigger>
                <PopoverContent align="end" sideOffset={10} className="w-[min(18rem,calc(100vw-1rem))] rounded-2xl border-blue-100 p-4 text-slate-900 shadow-2xl">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-white"><Maximize2 className="h-4 w-4" /></span>
                    <div>
                      <p className="font-black text-blue-950">Juega sin distracciones</p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">Amplía el Ahorcado a toda la pantalla. Puedes salir cuando quieras con el mismo botón.</p>
                    </div>
                  </div>
                  <Button type="button" onClick={() => void toggleFullscreen()} className="mt-4 h-10 w-full rounded-xl bg-red-600 font-black hover:bg-red-700"><Maximize2 className="h-4 w-4" /> Usar pantalla completa</Button>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="relative hidden min-h-[600px] overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950 lg:block">
          <div className="absolute inset-x-0 top-0 flex justify-center gap-2 px-8 pt-8" aria-label={`${remainingAttempts} banderines encendidos de ${MAX_MISTAKES}`}>
            {Array.from({ length: MAX_MISTAKES }).map((_, index) => (
              <div key={index} className={`h-9 w-12 rounded-b-xl border-2 border-white/20 transition-all duration-500 ${index < remainingAttempts ? index % 2 === 0 ? 'bg-red-500 shadow-[0_0_18px_rgba(239,68,68,.55)]' : 'bg-white shadow-[0_0_18px_rgba(255,255,255,.4)]' : 'translate-y-1 bg-slate-800 opacity-30 grayscale'}`} />
            ))}
          </div>
          <div className="absolute inset-x-8 top-[78px] h-px bg-white/30" />
          <div className="absolute inset-x-0 bottom-0 flex h-[84%] items-end justify-center">
            <img src="/images/games/fonda-host.png" alt="Anfitrión de fonda con empanada y sopaipillas" className={`h-full max-w-none object-contain object-bottom drop-shadow-2xl transition-all duration-500 ${status === 'lost' ? 'grayscale opacity-50' : ''}`} />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-blue-950/75 p-4 text-white backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">La misión</p>
            <p className="mt-1 text-sm leading-5 text-blue-50">Resuelve la palabra antes de que se apaguen los seis banderines de la fonda.</p>
          </div>
        </aside>

        <section className="relative flex min-w-0 flex-col px-3 py-4 sm:px-8 sm:py-7 lg:px-10">
          {newReward && <div className="pointer-events-none absolute right-5 top-4 z-10 animate-in rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-amber-950 shadow-lg fade-in slide-in-from-bottom-2">{newReward} 🫓</div>}

          <div className="mb-4 flex items-center justify-between gap-3 min-[430px]:hidden">
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-black shadow-sm"><span>🥟 {empanadas}</span><span className="h-4 w-px bg-slate-200" /><span>🫓 {sopaipillas}</span></div>
            {streak > 1 && <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-800">🔥 Racha x{streak}</span>}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1.5 text-xs font-black text-red-700"><Flag className="h-3.5 w-3.5" /> {item.category}</span>
            <div className="flex gap-1.5 lg:hidden" aria-label={`${remainingAttempts} intentos restantes`}>
              {Array.from({ length: MAX_MISTAKES }).map((_, index) => <span key={index} className={`h-2.5 w-5 rounded-full transition ${index < remainingAttempts ? 'bg-red-500' : 'bg-slate-300'}`} />)}
            </div>
          </div>

          <div className="relative mt-3 h-20 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 to-blue-800 px-4 py-3 text-white lg:hidden">
            <div className="relative z-10 max-w-[62%]">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-red-300">Mantén la fonda encendida</p>
              <p className="mt-1 text-xs leading-4 text-blue-100">Adivina antes de perder los 6 banderines.</p>
            </div>
            <img src="/images/games/fonda-host.png" alt="" className={`absolute -bottom-16 right-1 h-40 object-contain transition ${status === 'lost' ? 'grayscale opacity-50' : ''}`} />
          </div>

          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 sm:mt-6 sm:px-5">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div><p className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-700">Pista</p><p className="mt-1 text-sm font-semibold leading-5 text-slate-700 sm:text-base">{item.hint}</p></div>
            </div>
          </div>

          <div className="flex min-h-[135px] flex-1 items-center justify-center py-5 sm:min-h-[180px] sm:py-8">
            <div className="flex max-w-full flex-wrap justify-center gap-x-5 gap-y-4" aria-label="Palabra por descubrir">
              {wordTokens.map((token, tokenIndex) => (
                <div key={`${token}-${tokenIndex}`} className="flex gap-1 sm:gap-1.5">
                  {[...token].map((character, characterIndex) => {
                    const reveal = !isLetter(character) || status === 'lost' || guessed.includes(normalize(character));
                    return (
                      <span key={`${character}-${characterIndex}`} className={`flex h-9 w-6 items-center justify-center border-b-[3px] text-lg font-black sm:h-12 sm:w-9 sm:text-2xl ${reveal ? 'border-blue-950 text-blue-950' : 'border-slate-400 text-transparent'}`}>
                        {reveal ? character : '•'}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {status === 'playing' ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
              <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">Toca una letra</p>
              <div className="mx-auto grid w-full max-w-3xl grid-cols-7 gap-1.5 min-[430px]:grid-cols-9 sm:gap-2">
                {LETTERS.map((letter) => {
                  const wasUsed = guessed.includes(letter);
                  const wasCorrect = wasUsed && normalizedWord.includes(letter);
                  return (
                    <button key={letter} type="button" onClick={() => guessLetter(letter)} disabled={wasUsed} aria-label={`Letra ${letter}`} className={`h-10 w-full rounded-xl text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 sm:h-12 sm:text-base ${wasCorrect ? 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200' : wasUsed ? 'bg-slate-100 text-slate-300' : 'bg-blue-950 text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-800 active:translate-y-0'}`}>
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className={`animate-in rounded-3xl border p-5 text-center fade-in zoom-in-95 sm:p-7 ${status === 'won' ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`} role="status">
              <div className="text-4xl">{status === 'won' ? '🎉' : '💪'}</div>
              <h3 className={`mt-2 text-2xl font-black ${status === 'won' ? 'text-emerald-800' : 'text-red-800'}`}>{status === 'won' ? '¡Palabra resuelta!' : 'Se apagó la fonda'}</h3>
              <p className="mt-2 text-sm text-slate-700">{status === 'won' ? <>Ganaste <strong>1 empanada</strong> y <strong>{uniqueWordLetters.length} sopaipillas</strong> en esta palabra.</> : <>La palabra era <strong>{item.word}</strong>. La próxima viene con revancha.</>}</p>
              <Button onClick={nextWord} className="mt-4 h-12 w-full rounded-xl bg-red-600 font-black hover:bg-red-700"><RefreshCcw className="h-4 w-4" /> Nueva palabra</Button>
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold text-slate-500 sm:text-xs">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Las tildes se completan automáticamente</span>
              <span className="font-bold text-amber-700">Letra correcta = 1 🫓 · Palabra completa = 1 🥟</span>
            </div>
            <button type="button" onClick={resetSession} className="flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 font-bold text-slate-600 hover:bg-white"><RotateCcw className="h-3.5 w-3.5" /> Reiniciar</button>
          </div>
        </section>
      </div>
    </div>
  );
}
