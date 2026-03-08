import adapter from '@sveltejs/adapter-static'
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [mdsvex()],
	extensions: [".svelte", ".svx"],
	kit: {
		adapter: adapter({
			fallback: "404.html",
		}),
		alias: {
			"$content": "src/content/*",
		},
	},
}
