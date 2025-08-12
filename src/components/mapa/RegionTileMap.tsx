import React, { useMemo, useRef, useState } from 'react';
import regiones from '@/data/regiones.json';

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  label: string;
}

const RegionTileMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0, label: '' });
  const cols = 4;
  const rows = Math.ceil(regiones.length / cols);
  const tileSize = 120;
  const gap = 16;
  const width = cols * tileSize + (cols - 1) * gap;
  const height = rows * tileSize + (rows - 1) * gap;

  const tiles = useMemo(() => regiones.map((name, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = col * (tileSize + gap);
    const y = row * (tileSize + gap);
    return { id: `region-${i}`, name, x, y };
  }), []);

  const handleMove = (e: React.MouseEvent<SVGRectElement, MouseEvent>, name: string) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 16,
      label: name,
    });
  };

  const handleLeave = () => setTooltip((t) => ({ ...t, visible: false }));

  return (
    <div className="w-full flex justify-center">
      <div className="relative animate-fade-in">
        <svg
          ref={svgRef}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="rounded-lg shadow-lg bg-background/50"
          role="img"
          aria-label="Mapa interactivo de las regiones de Chile"
        >
          {/* Tiles */}
          {tiles.map((t, idx) => (
            <g key={t.id} className="hover-scale cursor-pointer">
              <rect
                x={t.x}
                y={t.y}
                width={tileSize}
                height={tileSize}
                rx={16}
                ry={16}
                className="fill-primary/10 stroke-primary/30"
                onMouseMove={(e) => handleMove(e, t.name)}
                onMouseLeave={handleLeave}
              />
              <text
                x={t.x + tileSize / 2}
                y={t.y + tileSize / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-foreground text-sm select-none"
              >
                {idx + 1}. {t.name.replace('Región de ', '').replace('Región del ', '')}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="absolute px-3 py-1 rounded-md text-sm bg-popover text-popover-foreground shadow-md animate-enter"
            style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -100%)' }}
            role="status"
            aria-live="polite"
          >
            {tooltip.label}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionTileMap;
