import { sveltekit } from "@sveltejs/kit/vite"
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [mdPlugin({ mode: [Mode.HTML] }), sveltekit()],
	server: {
		port: 3000,
	},
	test: {
		include: [
			"test/lib/**/*.{test,spec}.{js,ts}",
			"test/content/**/*.{test,spec}.{js,ts}",
		],
	},
});
