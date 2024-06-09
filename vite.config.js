import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown"
import rollupCopy from "rollup-plugin-copy"

export default defineConfig({
	plugins: [
		rollupCopy({
			targets: [ {
				src: "src/content/*",
				dest: "static",
			} ],
			copyOnce: true,
		}),
		mdPlugin({ mode: [Mode.HTML] }),
		sveltekit()
	],
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
