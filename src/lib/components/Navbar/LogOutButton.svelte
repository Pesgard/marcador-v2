<script>
	// @ts-nocheck

	import { LogOut, X } from 'lucide-svelte';
</script>

<!-- Open the modal using ID.showModal() method -->
<button class="btn btn-secondary w-full" on:click={() => logout_modal.showModal()}>
	Cerrar Sesion
	<LogOut />
</button>
<dialog id="logout_modal" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Cerrar Sesión</h3>
		<p class="py-4">¿Está seguro de que desea cerrar sesión?</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button type="button" class="btn btn-primary">
					Cerrar Sesión
					<LogOut />
				</button>

				<button class="btn mx-2">
					Cancelar
					<X />
				</button>
			</form>
		</div>
	</div>
</dialog>
