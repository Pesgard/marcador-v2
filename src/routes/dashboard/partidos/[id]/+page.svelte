<script lang="ts">
	import type { Equipo, Estadisticas, Jugador, Partido } from '../../../../interface/server';

	export let data: {
		partido: Partido;
		stats: Array<Estadisticas>;
		equipos: Array<Equipo>;
		jugadores: Array<Jugador>;
	};
</script>

<h1 class="mt-6 text-center text-3xl font-bold">Detalles del Partido</h1>
<!-- Información General -->
<div class="card mx-auto mt-4 max-w-6xl rounded-lg p-6 shadow-md justify-center items-center">
	<h3 class="text-lg font-semibold">Información del Partido</h3>
	<p>
		<span class="font-semibold">Fecha:</span>
		{new Date(data.partido.fecha).toLocaleDateString()}
	</p>
	<p><span class="font-semibold">Lugar:</span> {data.partido.lugar}</p>
</div>

<!-- Información del Partido -->
<div class="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-4">
	<!-- Equipo Local -->
	<div class="rounded-lg bg-primary p-6 text-primary-content shadow-md">
		<h2 class="mb-4 text-center text-2xl font-bold">
			{data.equipos.find((equipo) => equipo.id === data.partido.equipo_local_id)?.nombre ||
				'Equipo Local'}
		</h2>
		<p class=" text-center">
			<span class="font-semibold">Puntos:</span>
			{data.partido.puntos_local}
		</p>
		<h3 class="mb-2 mt-4 text-xl font-semibold">Jugadores</h3>
		{#if data.stats.filter((stat) => stat.id_equipo === data.partido.equipo_local_id).length > 0}
			<ul class="space-y-2">
				{#each data.stats.filter((stat) => stat.id_equipo === data.partido.equipo_local_id) as stat}
					{#each data.jugadores.filter((jugador) => jugador.id === stat.jugador_id) as jugador}
						<li class="rounded bg-white p-4 shadow">
							<p class="">
								<span class="font-semibold">Nombre:</span>
								{jugador.nombre}
							</p>
							<p class="">
								<span class="font-semibold">Posición:</span>
								{jugador.posicion}
							</p>
							<p class="">
								<span class="font-semibold">Dorsal:</span>
								{jugador.dorsal}
							</p>
							<p class="">
								<span class="font-semibold">Puntos:</span>
								{stat.puntos}
							</p>
							<p class="">
								<span class="font-semibold">Faltas:</span>
								{stat.faltas}
							</p>
						</li>
					{/each}
				{/each}
			</ul>
		{:else}
			<p class="">No hay estadísticas para los jugadores locales.</p>
		{/if}
	</div>

	<!-- Equipo Visitante -->
	<div class="rounded-lg bg-red-50 p-6 shadow-md">
		<h2 class="mb-4 text-center text-2xl font-bold text-red-600">
			{data.equipos.find((equipo) => equipo.id === data.partido.equipo_visitante_id)?.nombre ||
				'Equipo Visitante'}
		</h2>
		<p class="text-center text-gray-600">
			<span class="font-semibold">Puntos:</span>
			{data.partido.puntos_visitante}
		</p>
		<h3 class="mb-2 mt-4 text-xl font-semibold text-red-500">Jugadores</h3>
		{#if data.stats.filter((stat) => stat.id_equipo === data.partido.equipo_visitante_id).length > 0}
			<ul class="space-y-2">
				{#each data.stats.filter((stat) => stat.id_equipo === data.partido.equipo_visitante_id) as stat}
					{#each data.jugadores.filter((jugador) => jugador.id === stat.jugador_id) as jugador}
						<li class="rounded bg-white p-4 shadow">
							<p class="text-gray-700">
								<span class="font-semibold">Nombre:</span>
								{jugador.nombre}
							</p>
							<p class="text-gray-700">
								<span class="font-semibold">Posición:</span>
								{jugador.posicion}
							</p>
							<p class="text-gray-700">
								<span class="font-semibold">Dorsal:</span>
								{jugador.dorsal}
							</p>
							<p class="text-gray-700">
								<span class="font-semibold">Puntos:</span>
								{stat.puntos}
							</p>
							<p class="text-gray-700">
								<span class="font-semibold">Faltas:</span>
								{stat.faltas}
							</p>
						</li>
					{/each}
				{/each}
			</ul>
		{:else}
			<p class="text-gray-500">No hay estadísticas para los jugadores visitantes.</p>
		{/if}
	</div>
</div>
