import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Flag, Gamepad2, MapPin, Music2, Sparkles } from 'lucide-react';

const explorations = [
  { title: 'Historia de Chile', description: 'Desde los pueblos originarios hasta el Chile contemporáneo.', icon: BookOpen, link: '/history', accent: 'bg-blue-950' },
  { title: 'Mapa interactivo', description: 'Recorre las 16 regiones y descubre sus comunas.', icon: MapPin, link: '/mapa', accent: 'bg-red-600' },
  { title: 'Símbolos patrios', description: 'Descubre la bandera, el escudo, el himno y los símbolos naturales.', icon: Music2, link: '/himno', accent: 'bg-blue-700' },
];

export default function Index() {
  useEffect(() => {
    document.title = 'Chilenízate | Descubre Chile jugando';
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <section className="relative isolate overflow-hidden bg-blue-950 text-white">
        <img src="/images/fiestas/fonda-hero.png" alt="Una fonda chilena durante las Fiestas Patrias" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-950/15" />
        <div className="mx-auto grid min-h-[640px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur"><Flag className="h-4 w-4 text-red-400" /> Chile, de norte a sur</div>
            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-7xl">Chile no se memoriza.<br /><span className="text-red-400">Se vive.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50">Descubre la historia, los territorios y las costumbres que dan forma al país. Aprende a tu ritmo y pon a prueba lo que sabes.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/fiestas-patrias" className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-500">Explorar Especial 18 <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/juegos" className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold backdrop-blur transition hover:bg-white/20"><Gamepad2 className="h-4 w-4" /> Jugar ahora</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">Nuevo recorrido</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">Todo lo que hace único al 18</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-600">Una guía clara y visual para conocer las comidas, juegos, bailes, vestimentas y tradiciones de las Fiestas Patrias.</p>
              <Link to="/fiestas-patrias" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-red-600 transition hover:gap-3">Ver la guía completa <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {[
                ['🥟', 'Comidas'], ['💃', 'Bailes'], ['👗', 'Vestimenta'], ['🎯', 'Juegos'], ['🇨🇱', 'Tradiciones'],
              ].map(([emoji, label], index) => (
                <div key={label} className={`rounded-2xl border border-slate-200 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                  <span className="text-3xl" aria-hidden="true">{emoji}</span><p className="mt-2 text-xs font-bold text-blue-950 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f5ef] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-red-600"><Sparkles className="h-4 w-4" /> Sigue explorando</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-5xl">Chile en tres miradas</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">Contenido pensado para estudiantes, personas migrantes y cualquiera que quiera comprender mejor el país.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {explorations.map(({ title, description, icon: Icon, link, accent }) => (
              <Link key={title} to={link} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${accent}`}><Icon className="h-5 w-5" /></div>
                <h3 className="mt-6 text-xl font-black text-blue-950">{title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition group-hover:gap-3">Explorar <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 px-4 py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-red-100">Aprender también es jugar</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Acepta el desafío chileno</h2><p className="mt-3 max-w-xl text-red-50">Ahorcado Dieciochero y Ruta del 18 te esperan.</p></div>
          <Link to="/juegos" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-red-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50">Ir a los juegos <Gamepad2 className="h-4 w-4" /></Link>
        </div>
      </section>

      <footer className="bg-[#04112a] px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg">🇨🇱</span><div><p className="font-black">Chilenízate</p><p className="text-xs text-blue-200">Chile se aprende viviéndolo.</p></div></div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-blue-100" aria-label="Enlaces del pie"><Link to="/history" className="hover:text-white">Historia</Link><Link to="/fiestas-patrias" className="hover:text-white">Especial 18</Link><Link to="/mapa" className="hover:text-white">Mapa</Link><Link to="/juegos" className="hover:text-white">Juegos</Link></nav>
        </div>
      </footer>
    </main>
  );
}
