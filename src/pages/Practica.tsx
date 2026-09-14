import { Navigate } from 'react-router-dom';

/**
 * Ruta histórica conservada para no romper enlaces guardados.
 * La página pública de juegos ahora vive en /juegos.
 */
export default function Practica() {
  return <Navigate to="/juegos" replace />;
}
