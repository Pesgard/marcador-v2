<script lang="ts">
	import type { Partidos } from '../../interface/endpoints';

	export let data: {
		partidos: Partidos[];
	};

	//console.log(data);
</script>

<h2 class="text-center text-3xl my-2">Partidos Jugados</h2>
<div class="divider"></div>

<div class="mx-4">
	{#if data.partidos.length === 0}
		<p>No hay partidos disponibles.</p>
	{:else}
		<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.partidos as partido}
				<!-- {console.log(partido)} -->
				<a
					href={`/dashboard/partidos/${partido.id}`}
					class="card bg-neutral text-neutral-content transition-all duration-300 hover:bg-primary hover:text-primary-content hover:contrast-125"
				>
					<div class="card-body items-center text-center">
						<p class="card-title text-xl font-bold">
							{new Date(partido.fecha).toLocaleDateString()}
						</p>
						<div class="card-actions justify-start">
							<div class="text-center">
								<p class="text-2xl font-bold">{partido.puntos_local}</p>
								<p class="text-sm">Local</p>
							</div>
							<div class="text-center">
								<p class="text-2xl font-bold">{partido.puntos_visitante}</p>
								<p class="text-sm">Visitante</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
