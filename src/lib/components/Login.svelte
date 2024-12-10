<script lang="ts">
	import { Mail, Lock, Loader } from "lucide-svelte";

	// Estado del formulario
	let email: string = $state("");
	let password: string = $state("");
	let cargando: boolean = $state(false);
	let error: string = $state("");

	/** Manejar el envío del formulario */
	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();

		// Validación básica
		if (!email || !password) {
			error = "Por favor, complete todos los campos";
			return;
		}

		try {
			cargando = true;
			error = "";

			// Simular una llamada al servidor
			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log("Iniciando sesión con:", { email, password });
		} catch (err) {
			error = "Error al iniciar sesión";
		} finally {
			cargando = false;
		}
	};
</script>

<div class="w-full max-w-md p-8 space-y- rounded-xl shadow-lg">
	<div class="text-center">
		<h1 class="text-2xl font-bold text-white">Iniciar Sesión</h1>
		<p class="mt-4 text-white">Ingresa a tu cuenta</p>
	</div>

	<form onsubmit={handleSubmit} class="space-y-4 mt-4">
		<!-- Campo de correo -->
		<div>
			<label for="email" class="block text-sm font-medium text-white">Correo electrónico</label>
			<div class="mt-1 relative">
				<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Mail class="h-5 w-5 text-gray-400" />
				</div>
				<input id="email" type="email" bind:value={email} class="input input-bordered block w-full pl-10 pr-3 py-2 border" placeholder="tucorreo@ejemplo.com" />
			</div>
		</div>

		<!-- Campo de contraseña -->
		<div>
			<label for="password" class="block text-sm font-medium text-white">Contraseña</label>
			<div class="mt-1 relative">
				<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Lock class="h-5 w-5 text-gray-400" />
				</div>
				<input id="password" type="password" bind:value={password} class="input input-bordered block w-full pl-10 pr-3 py-2 " placeholder="••••••••" />
			</div>
		</div>

		<!-- Mensaje de error -->
		{#if error}
			<p class="text-primary text-sm">{error}</p>
		{/if}

		<!-- Botón de inicio de sesión -->
		<a href="/dashboard" class="flex btn btn-outline justify-center items-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white">
			{#if cargando}
				<Loader class="animate-spin h-5 w-5" />
			{:else}
				Iniciar Sesión
			{/if}
		</a>

		<!-- Enlaces adicionales -->
		<div class="text-sm text-center space-x-4">
			<a href="#recuperar" class="link link-hover">¿Olvidaste tu contraseña?</a>
			<a href="#registro" class="link link-hover">Crear cuenta</a>
		</div>
	</form>
</div>
