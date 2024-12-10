

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const { id } = params; // Obtiene el parámetro dinámico de la URL

  // Realiza la solicitud al endpoint definido en +server.ts
  const response = await fetch(`/dashboard/partidos/${id}`);

  if (!response.ok) {
    throw new Error(`Error al cargar los datos del partido: ${response.statusText}`);
  }

  // Extrae los datos de la respuesta JSON
  const { partido, stats, equipos, jugadores } = await response.json();

  // Retorna los datos al componente
  return { partido, stats, equipos, jugadores };
};
