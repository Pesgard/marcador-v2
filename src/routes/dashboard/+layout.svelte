<script lang="ts">
	const { children } = $props();
	import LogOutButton from '$lib/components/Navbar/LogOutButton.svelte';
	import MenuItems from '$lib/components/Navbar/MenuItems.svelte';
	import { MenuIcon } from 'lucide-svelte';
</script>

<aside class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<menu class="navbar bg-base-200 lg:hidden">
			<label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">
				<MenuIcon />
			</label>

			<h2 class="text-lg font-bold">Marcadores</h2>
		</menu>

		<main class="h-full w-full">
			{@render children()}
		</main>
	</div>
	<nav class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu flex min-h-full w-80 flex-col bg-base-200 p-4 text-base-content">
			<MenuItems />
			<div class="mt-auto">
				<div class="divider"></div>
				<LogOutButton />
			</div>
		</ul>
	</nav>
</aside>
