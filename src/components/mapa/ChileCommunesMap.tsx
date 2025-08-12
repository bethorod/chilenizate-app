import React, { useEffect, useMemo, useRef, useState } from 'react';
import { geoMercator, geoPath } from 'd3-geo';

type Feature = {
  type: 'Feature';
  geometry: { type: 'Polygon' | 'MultiPolygon'; coordinates: any };
  properties: Record<string, any>;
};

const REGION_FILES = Array.from({ length: 16 }, (_, i) => `${i + 1}.geojson`);

const ChileCommunesMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [dimensions, setDimensions] = useState({ width: 880, height: 1600 });
  const [hover, setHover] = useState<{ x: number; y: number; comuna: string; region: string } | null>(null);

  // Responsive container resize
  useEffect(() => {
    const onResize = () => {
      const container = svgRef.current?.parentElement;
      if (!container) return;
      const w = Math.min(1000, container.clientWidth);
      // Chile es muy vertical; mantener relación alto/ ancho aproximada
      const h = Math.max(600, Math.round(w * 1.6));
      setDimensions({ width: w, height: h });
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Carga todos los GeoJSON de regiones (cada archivo contiene comunas)
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const responses = await Promise.all(
          REGION_FILES.map((f) => fetch(`/data/geo/${f}`).then((r) => r.json()))
        );
        if (!mounted) return;
        const feats: Feature[] = responses.flatMap((fc: any) => fc.features as Feature[]);
        setFeatures(feats);
      } catch (e) {
        console.error('No se pudieron cargar los mapas de comunas', e);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const projection = useMemo(() => geoMercator(), []);

  const pathGen = useMemo(() => {
    const { width, height } = dimensions;
    // Ajustar proyección al tamaño y a los datos cargados
    try {
      const collection = { type: 'FeatureCollection', features } as any;
      projection.fitSize([width, height], collection);
    } catch {}
    return geoPath(projection);
  }, [projection, features, dimensions]);

  const handleMove = (e: React.MouseEvent<SVGPathElement>, comuna: string, region: string) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    setHover({ x: e.clientX - rect.left, y: e.clientY - rect.top - 12, comuna, region });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full animate-fade-in">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="w-full h-auto bg-background/40 rounded-lg shadow-sm"
          role="img"
          aria-label="Mapa de comunas de Chile"
        >
          <g>
            {features.map((f, i) => {
              const d = pathGen(f as any) || undefined;
              const comuna = (f.properties['Comuna'] || f.properties['NOM_COM'] || '').toString();
              const region = (f.properties['Region'] || f.properties['NOM_REG'] || '').toString();
              return (
                <path
                  key={i}
                  d={d}
                  className="fill-primary/10 stroke-primary/30 hover:fill-primary/30 transition-colors duration-150 cursor-pointer"
                  onMouseMove={(e) => handleMove(e, comuna, region)}
                  onMouseLeave={() => setHover(null)}
                />
              );
            })}
          </g>
        </svg>

        {hover && (
          <div
            className="absolute px-3 py-1 rounded-md text-sm bg-popover text-popover-foreground shadow-md animate-enter"
            style={{ left: hover.x, top: hover.y, transform: 'translate(-50%, -100%)' }}
          >
            <div className="font-medium">{hover.comuna}</div>
            <div className="text-xs text-muted-foreground">{hover.region}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChileCommunesMap;
