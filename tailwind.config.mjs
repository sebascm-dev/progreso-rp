/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pricedown: ["Pricedown", "sans serif"],
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				gradient1: "var(--color-gradient1)",
				gradient2: "var(--color-gradient2)",
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
