<script lang="ts">
	import Login from '$lib/components/Login.svelte';
	const { data } = $props();

</script>

<main class="flex min-h-screen flex-col items-center justify-between">
	<!-- Login Component -->
	<div class="flex flex-grow items-center justify-center">
		<Login />
	</div>
</main>
