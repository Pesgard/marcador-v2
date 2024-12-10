export interface Partido {
	id: string;
	fecha: string;
	equipo_local_id: number;
	equipo_visitante_id: number;
	puntos_local: number;
	puntos_visitante: number;
	lugar: string;
}

export interface Estadisticas {
	id: number;
	jugador_id: number;
	puntos: number;
	faltas: number;
	tiros_libres_anotados: number;
	tiros_libres_fallados: number;
	id_equipo: number;
}

export interface Equipo {
	id: number;
	nombre: string;
	organizacion: string;
}

export interface Jugador {
	id: number;
	equipo_id: number;
	nombre: string;
	dorsal: number;
	posicion: string;
}
