import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui],

	daisyui: {
		themes: ['nord', 'sunset'], // Los temas que deseas usar
		darkTheme: 'sunset' // Tema oscuro por defecto
	}
} satisfies Config;
