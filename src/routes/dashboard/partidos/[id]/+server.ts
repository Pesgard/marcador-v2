import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params; // Captura el parámetro dinámico de la URL

	// Consulta para obtener el partido
	const { data: partido, error: partidoError } = await supabase
		.from('Partidos') // Nombre exacto de la tabla
		.select('*')
		.eq('id', id)
		.single();

	if (partidoError) {
		return json({ error: `Error al obtener el partido: ${partidoError.message}` }, { status: 500 });
	}

	// Consulta para obtener las estadísticas del partido
	const { data: stats, error: statsError } = await supabase
		.from('Stats') // Nombre exacto de la tabla
		.select('*')
		.eq('partido_id', id);

	if (statsError) {
		return json(
			{ error: `Error al obtener las estadísticas: ${statsError.message}` },
			{ status: 500 }
		);
	}

	const equiposIds = Array.from(new Set(stats.map((stat) => stat.id_equipo)));
	const jugadoresIds = Array.from(new Set(stats.map((stat) => stat.jugador_id)));

	// Consulta para obtener información de los equipos
	const { data: equipos, error: equiposError } = await supabase
		.from('Equipos')
		.select('*')
		.in('id', equiposIds); // Filtra por los IDs únicos de los equipos

	if (equiposError) {
		return json(
			{ error: `Error al obtener la información de los equipos: ${equiposError.message}` },
			{ status: 500 }
		);
	}

	// Consulta para obtener información de los jugadores
	const { data: jugadores, error: jugadoresError } = await supabase
		.from('Jugadores')
		.select('*')
		.in('id', jugadoresIds); // Filtra por los IDs únicos de los jugadores

	if (jugadoresError) {
		return json(
			{ error: `Error al obtener la información de los jugadores: ${jugadoresError.message}` },
			{ status: 500 }
		);
	}

	// Retorna los datos combinados
	return json({ partido, stats, equipos, jugadores });
};
