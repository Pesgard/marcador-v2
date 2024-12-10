<script>
	import { Trophy, Volleyball, FolderKanban } from 'lucide-svelte';
</script>

<aside class="prose">
	<section>
		<h2 class="text-center	">Menu</h2>
		<ul>
			<li>
				<a href="dashboard" class="transition-colors hover:text-blue-500">
					<Volleyball/>
					Partidos
				</a>
				<a href="dashboard" class="transition-colors hover:text-blue-500">
					<Trophy />
					Torneos
				</a>
				<a href="../dashboard/equipos" class="transition-colors hover:text-blue-500">
					<FolderKanban/>
					Equipos
				</a>
			</li>
		</ul>
	</section>
</aside>
