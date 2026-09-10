import { useEffect } from 'react';
import { Bird, Flag, Flower2, Music2, PawPrint, Shield, Sparkles, Star } from 'lucide-react';

const letra = `Puro, Chile, es tu cielo azulado,
puras brisas te cruzan también,
y tu campo de flores bordado
es la copia feliz del Edén.
Majestuosa es la blanca montaña
que te dio por baluarte el Señor,
y ese mar que tranquilo te baña
te promete futuro esplendor.

Coro
Dulce Patria, recibe los votos
con que Chile en tus aras juró:
que, o la tumba serás de los libres,
o el asilo contra la opresión.`;

const audioUrl = 'https://commons.wikimedia.org/wiki/Special:FilePath/United_States_Navy_Band_-_National_Anthem_of_Chile.ogg?download';

const officialSymbols = [
  {
    title: 'Bandera nacional',
    subtitle: 'La Estrella Solitaria',
    icon: Flag,
    accent: 'bg-blue-950',
    description: 'Está formada por dos franjas horizontales: blanca y roja. En el extremo superior izquierdo lleva un cuadrado azul con una estrella blanca de cinco puntas.',
    facts: [
      'El diseño actual fue establecido en 1817, durante el proceso de independencia.',
      'Tradicionalmente, el azul representa el cielo; el blanco, la cordillera; y el rojo, la sangre derramada por la independencia.',
      'La estrella se asocia con la unidad del Estado y la guía de la nación.',
    ],
  },
  {
    title: 'Escudo de armas',
    subtitle: 'Fuerza y territorio',
    icon: Shield,
    accent: 'bg-red-600',
    description: 'Su campo azul y rojo está coronado por un penacho tricolor. Lo sostienen un huemul y un cóndor, ambos animales propios de Chile.',
    facts: [
      'El diseño fue oficializado en 1834 y se atribuye al artista Carlos Wood Taylor.',
      'El huemul representa la singularidad de la fauna terrestre; el cóndor, la presencia de la cordillera y los cielos andinos.',
      'En su base aparece el lema “Por la razón o la fuerza”.',
    ],
  },
  {
    title: 'Himno nacional',
    subtitle: 'La canción de la República',
    icon: Music2,
    accent: 'bg-blue-700',
    description: 'El himno que se interpreta actualmente combina la música de Ramón Carnicer con versos de Eusebio Lillo y el coro heredado de Bernardo de Vera y Pintado.',
    facts: [
      'La música fue compuesta por Ramón Carnicer y estrenada en 1828.',
      'Eusebio Lillo escribió una nueva letra en 1847, menos confrontacional que la primera versión.',
      'En ceremonias y actos públicos se interpreta la quinta estrofa seguida del coro.',
    ],
  },
];

const naturalSymbols = [
  {
    title: 'Copihue',
    label: 'Flor nacional',
    icon: Flower2,
    text: 'Enredadera nativa de los bosques templados del centro y sur. Sus flores acampanadas, especialmente las rojas, se asocian con la identidad y la naturaleza chilena.',
  },
  {
    title: 'Huemul',
    label: 'Fauna del escudo',
    icon: PawPrint,
    text: 'Ciervo nativo de los Andes patagónicos y especie en peligro. Su presencia en el escudo recuerda la riqueza y fragilidad del patrimonio natural.',
  },
  {
    title: 'Cóndor andino',
    label: 'Ave del escudo',
    icon: Bird,
    text: 'Una de las aves voladoras de mayor tamaño. Habita la cordillera y ocupa el lado derecho del escudo nacional como símbolo de altura y fortaleza.',
  },
];

export default function HimnoChile() {
  useEffect(() => {
    document.title = 'Símbolos Patrios de Chile | Chilenízate';
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', 'Conoce la bandera, el escudo, el himno y los principales símbolos naturales de Chile.');
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <section className="relative isolate overflow-hidden bg-blue-950 px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-red-600/25 blur-3xl" />
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            <Star className="h-4 w-4 fill-white text-white" /> Identidad nacional
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">Símbolos Patrios de Chile</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg">La bandera, el escudo y el himno son los emblemas nacionales. Junto a ellos, la flora y la fauna representan la diversidad natural del territorio.</p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" aria-label="Resumen de emblemas">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-slate-200 px-4 sm:px-6">
          {[['1817', 'Bandera actual'], ['1834', 'Escudo actual'], ['1847', 'Letra del himno']].map(([date, label]) => (
            <div key={label} className="px-2 py-6 text-center sm:px-6">
              <strong className="block text-xl font-black text-blue-950 sm:text-3xl">{date}</strong>
              <span className="mt-1 block text-xs font-semibold text-slate-500 sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-red-600"><Sparkles className="h-4 w-4" /> Emblemas oficiales</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-5xl">Tres formas de representar al país</h2>
          <p className="mt-4 leading-7 text-slate-600">Cada emblema nació en un momento distinto de la construcción de la República y comunica una parte de su identidad.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {officialSymbols.map(({ title, subtitle, icon: Icon, accent, description, facts }) => (
            <article key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className={`${accent} p-6 text-white`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Icon className="h-6 w-6" /></div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/70">{subtitle}</p>
                <h3 className="mt-1 text-2xl font-black">{title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-slate-600">{description}</p>
                <ul className="mt-5 space-y-3">
                  {facts.map((fact) => (
                    <li key={fact} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />{fact}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">Patrimonio sonoro</p>
              <h2 className="mt-3 text-3xl font-black text-blue-950 sm:text-5xl">Himno Nacional</h2>
              <p className="mt-4 leading-7 text-slate-600">Escucha la melodía y sigue la estrofa que se canta oficialmente junto con el coro.</p>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <audio controls preload="none" className="w-full" aria-label="Audio del Himno Nacional de Chile">
                  <source src={audioUrl} type="audio/ogg" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
                <p className="mt-2 text-xs leading-5 text-slate-500">Interpretación de la United States Navy Band, disponible en Wikimedia Commons.</p>
              </div>
            </div>
            <article className="rounded-3xl bg-blue-950 p-6 text-white shadow-xl sm:p-10">
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
                <Music2 className="h-5 w-5 text-red-400" />
                <h3 className="font-black">Letra de uso oficial</h3>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-blue-50 sm:text-base">{letra}</pre>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">Naturaleza e identidad</p>
          <h2 className="mt-3 text-3xl font-black text-blue-950 sm:text-5xl">Símbolos naturales</h2>
          <p className="mt-4 leading-7 text-slate-600">No todos son emblemas constitucionales, pero ocupan un lugar importante en la memoria, la educación y la cultura chilena.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {naturalSymbols.map(({ title, label, icon: Icon, text }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600"><Icon className="h-6 w-6" /></div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{label}</p>
              <h3 className="mt-1 text-xl font-black text-blue-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
