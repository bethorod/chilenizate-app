import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CulturalSectionData {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  content: any;
}

interface CulturalSectionProps {
  section: CulturalSectionData;
  isExpanded: boolean;
  onToggle: (sectionId: string) => void;
}

const CulturalSection = ({ section, isExpanded, onToggle }: CulturalSectionProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader 
        className="cursor-pointer"
        onClick={() => onToggle(section.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center text-white`}>
              <section.icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl">{section.title}</CardTitle>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          {section.id === 'idioms' && Array.isArray(section.content) && (
            <div className="grid md:grid-cols-2 gap-4">
              {section.content.map((idiom: any, idx: number) => (
                <div key={idx} className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h5 className="font-bold text-yellow-800 text-lg">{idiom.phrase}</h5>
                  <p className="text-yellow-700 font-medium">{idiom.meaning}</p>
                  <p className="text-yellow-600 text-sm mt-1">{idiom.usage}</p>
                </div>
              ))}
            </div>
          )}

          {section.id === 'folklore' && Array.isArray(section.content) && (
            <div className="space-y-4">
              {section.content.map((item: any, idx: number) => (
                <div key={idx} className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-bold text-red-800 text-lg">{item.name}</h5>
                  <p className="text-red-700">{item.description}</p>
                  <p className="text-red-600 text-sm mt-2 font-medium">{item.significance}</p>
                </div>
              ))}
            </div>
          )}

          {section.id === 'geography' && typeof section.content === 'object' && 'regions' in section.content && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">{t('sections.regionsOfChile')}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.content.regions.map((region: any, idx: number) => (
                    <div key={idx} className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-bold text-green-800">{region.name}</h5>
                      <p className="text-green-700">{t('sections.capital')}: {region.capital}</p>
                      <p className="text-green-600 text-sm">{region.features.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">{t('sections.naturalWonders')}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {section.content.naturalWonders.map((wonder: string, idx: number) => (
                    <div key={idx} className="bg-green-100 p-3 rounded text-center text-green-800 font-medium">
                      {wonder}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {section.id === 'resources' && Array.isArray(section.content) && (
            <div className="grid md:grid-cols-2 gap-4">
              {section.content.map((resource: any, idx: number) => (
                <div key={idx} className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-bold text-amber-800 text-lg">{resource.resource}</h5>
                  <p className="text-amber-700">{resource.description}</p>
                  <p className="text-amber-600 text-sm mt-1">{resource.locations.join(', ')}</p>
                </div>
              ))}
            </div>
          )}

          {section.id === 'symbols' && typeof section.content === 'object' && 'animals' in section.content && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">{t('sections.nationalAnimals')}</h4>
                <div className="space-y-3">
                  {section.content.animals.map((animal: any, idx: number) => (
                    <div key={idx} className="bg-emerald-50 p-4 rounded-lg">
                      <h5 className="font-bold text-emerald-800">{animal.name}</h5>
                      <p className="text-emerald-700">{animal.description}</p>
                      <p className="text-emerald-600 text-sm">{animal.habitat || animal.significance || animal.conservation}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">{t('sections.nationalTrees')}</h4>
                <div className="space-y-3">
                  {section.content.trees.map((tree: any, idx: number) => (
                    <div key={idx} className="bg-emerald-50 p-4 rounded-lg">
                      <h5 className="font-bold text-emerald-800">{tree.name}</h5>
                      <p className="text-emerald-700">{tree.description}</p>
                      <p className="text-emerald-600 text-sm">{tree.location || tree.status || tree.symbolism}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {section.id === 'currency' && Array.isArray(section.content) && (
            <div className="space-y-4">
              {section.content.map((era: any, idx: number) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h5 className="font-bold text-blue-800">{era.period}</h5>
                  <p className="font-medium text-blue-700">{era.currency}</p>
                  <p className="text-blue-600 text-sm mt-1">{era.description}</p>
                </div>
              ))}
            </div>
          )}

          {section.id === 'laws_institutions' && typeof section.content === 'object' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Instituciones Públicas Clave</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.content.institutions?.map((inst: any, idx: number) => (
                    <div key={idx} className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-bold text-indigo-800">{inst.name}</h5>
                      <p className="text-indigo-700">{inst.role}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Leyes y Principios</h4>
                <div className="space-y-3">
                  {section.content.laws?.map((law: any, idx: number) => (
                    <div key={idx} className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-400">
                      <h5 className="font-bold text-sky-800">
                        {law.name} {law.year ? <span className="text-sky-700 font-normal">({law.year})</span> : null}
                      </h5>
                      <p className="text-sky-700">{law.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {section.id === 'political_system' && typeof section.content === 'object' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Poderes del Estado</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {section.content.branches?.map((br: any, idx: number) => (
                    <div key={idx} className="bg-violet-50 p-4 rounded-lg">
                      <h5 className="font-bold text-violet-800">{br.name}</h5>
                      <ul className="list-disc list-inside text-violet-700 mt-2 space-y-1">
                        {br.responsibilities?.map((r: string, i: number) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sistema Electoral</h4>
                <div className="bg-fuchsia-50 p-4 rounded-lg">
                  <p className="text-fuchsia-800 font-medium">{section.content.elections?.system}</p>
                  <ul className="list-disc list-inside text-fuchsia-700 mt-2 space-y-1">
                    {section.content.elections?.details?.map((d: string, i: number) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <p className="text-fuchsia-700 mt-2 text-sm">Entidades: {section.content.elections?.entities?.join(', ')}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Mecanismos de Participación</h4>
                <div className="flex flex-wrap gap-2">
                  {section.content.participation?.map((p: string, i: number) => (
                    <span key={i} className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {section.id === 'mining_history' && typeof section.content === 'object' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Líneas de Tiempo</h4>
                <div className="space-y-3">
                  {section.content.timeline?.map((t: any, idx: number) => (
                    <div key={idx} className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <h5 className="font-bold text-amber-800">{t.era}</h5>
                      <p className="text-amber-700">{t.description}</p>
                      {t.keyEvents?.length ? (
                        <ul className="list-disc list-inside text-amber-700 mt-2 space-y-1">
                          {t.keyEvents.map((e: string, i: number) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-bold text-orange-800">Minerales actuales</h5>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {section.content.current?.minerals?.map((m: string, i: number) => (
                      <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h5 className="font-bold text-rose-800">Desafíos</h5>
                  <ul className="list-disc list-inside text-rose-700 mt-2 space-y-1">
                    {section.content.current?.challenges?.map((c: string, i: number) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default CulturalSection;
