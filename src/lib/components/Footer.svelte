<script lang="ts">
	import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-svelte";

	// Footer navigation links
	const navLinks = [
		{ title: "Inicio", href: "#inicio" },
		{ title: "Servicios", href: "#servicios" },
		{ title: "Nosotros", href: "#nosotros" },
		{ title: "Contacto", href: "#contacto" },
	];

	// Social media links
	const socialLinks = [
		{ icon: Facebook, href: "https://facebook.com", label: "Facebook" },
		{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
		{ icon: Instagram, href: "https://instagram.com", label: "Instagram" },
		{ icon: Github, href: "https://github.com", label: "Github" },
	];
</script>

<footer class=" text-gray-300">
	<div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Logo y descripción -->
			<div class="space-y-4">
				<img src="https://i.pinimg.com/736x/df/2b/e1/df2be1341c30e0ddbbe51ab25fb8709f.jpg" alt="Logo" class="h-8" />
				<p class="text-sm">Creamos soluciones digitales innovadoras para impulsar tu negocio hacia el futuro.</p>
			</div>

			<!-- Links de navegación -->
			<div>
				<h3 class="text-lg font-semibold mb-4 text-white">Enlaces</h3>
				<ul class="space-y-2">
					{#each navLinks as link}
						<li>
							<a href={link.href} class="hover:text-white transition-colors">
								{link.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contacto -->
			<div>
				<h3 class="text-lg font-semibold mb-4 text-white">Contacto</h3>
				<div class="space-y-2">
					<p class="flex items-center gap-2">
						<Mail class="w-4 h-4" />
						<span>contacto@empresa.com</span>
					</p>
					<!-- Redes sociales -->
					<div class="flex space-x-4 mt-4">
						{#each socialLinks as { icon: Icon, href, label }}
							<a {href} target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors" aria-label={label}>
								<Icon class="w-5 h-5" />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Línea divisoria -->
		<div class="border-t border-gray-800 mt-8 pt-8">
			<p class="text-center text-sm">
				© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
			</p>
		</div>
	</div>
</footer>
