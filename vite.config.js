import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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
