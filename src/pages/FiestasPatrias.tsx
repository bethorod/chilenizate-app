import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Flag, Gamepad2, Music, Shirt, Sparkles, Utensils } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { foods, dances, clothing, traditionalGames, traditions, type FiestaItem } from '@/data/fiestasPatriasData';

const categories = [
  { value: 'comidas', label: 'Comidas', icon: Utensils, items: foods },
  { value: 'bailes', label: 'Bailes', icon: Music, items: dances },
  { value: 'vestimenta', label: 'Vestimenta', icon: Shirt, items: clothing },
  { value: 'juegos', label: 'Juegos', icon: Gamepad2, items: traditionalGames },
];

function ItemGrid({ items }: { items: FiestaItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-2xl ring-1 ring-red-100 transition group-hover:rotate-3 group-hover:scale-105" aria-hidden="true">
            {item.emoji}
          </div>
          <h3 className="text-lg font-bold text-slate-950">{item.name}</h3>
          <p className="mt-1 text-sm font-semibold text-blue-700">{item.description}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}

export default function FiestasPatrias() {
  useEffect(() => {
    document.title = 'Fiestas Patrias de Chile | Chilenízate';
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', 'Conoce las comidas, juegos, bailes, vestimentas y tradiciones del 18 de septiembre en Chile.');
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <section className="relative isolate overflow-hidden bg-[#071b3d] text-white">
        <img src="/images/fiestas/fonda-hero.png" alt="Familias celebrando Fiestas Patrias en una fonda chilena" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a3c] via-[#061a3c]/90 to-[#061a3c]/10" />
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles className="h-4 w-4 text-red-400" /> Especial Fiestas Patrias
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">Chile se encuentra alrededor de la mesa</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Vive el 18,<br /><span className="text-red-400">conoce su historia.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">Una guía para descubrir por qué cada plato, pañuelo, juego y melodía forma parte de una celebración que une a todo Chile.</p>
            <a href="#explora" className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950">
              Comenzar el recorrido <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" aria-label="Datos rápidos">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ['18 SEP', 'Primera Junta de 1810'],
            ['5+', 'Juegos tradicionales'],
            ['3', 'Cuecas regionales'],
            ['TODO CHILE', 'Celebra de norte a sur'],
          ].map(([value, label]) => (
            <div key={label} className="px-3 py-6 text-center sm:px-6">
              <div className="text-lg font-black text-blue-950 sm:text-2xl">{value}</div>
              <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="explora" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-red-600"><Flag className="h-4 w-4" /> Guía dieciochera</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-5xl">Explora una tradición viva</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Selecciona una categoría y descubre sus sabores, sonidos, atuendos y desafíos.</p>
        </div>

        <Tabs defaultValue="comidas" className="w-full">
          <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-2 rounded-2xl bg-blue-950 p-2 sm:grid-cols-4">
            {categories.map(({ value, label, icon: Icon }) => (
              <TabsTrigger key={value} value={value} className="gap-2 rounded-xl py-3 text-blue-100 data-[state=active]:bg-white data-[state=active]:text-blue-950">
                <Icon className="h-4 w-4" /> {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map(({ value, items }) => <TabsContent key={value} value={value}><ItemGrid items={items} /></TabsContent>)}
        </Tabs>
      </section>

      <section className="bg-blue-950 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-red-400"><CalendarDays className="h-4 w-4" /> Tradiciones</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">¿Qué celebramos?</h2>
              <p className="mt-5 max-w-md leading-7 text-blue-100">Las Fiestas Patrias mezclan memoria histórica y cultura popular. Se viven en espacios públicos, hogares, escuelas y fondas.</p>
            </div>
            <div className="space-y-4">
              {traditions.map((item, index) => (
                <article key={item.date} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:grid-cols-[110px_1fr] sm:p-6">
                  <div className="flex items-center gap-3 sm:block">
                    <span className="text-xs font-bold text-red-300">0{index + 1}</span>
                    <p className="mt-1 text-sm font-black tracking-wider text-white sm:text-lg">{item.date}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-blue-100">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 px-4 py-14 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-100">Ahora te toca a ti</p>
            <h2 className="mt-2 text-3xl font-black">¿Cuánto aprendiste del 18?</h2>
          </div>
          <Link to="/juegos" className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-red-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50">
            Jugar Ruta del 18 <Gamepad2 className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
