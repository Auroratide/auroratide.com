import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown"
import MarkdownIt from "markdown-it"
import rollupCopy from "rollup-plugin-copy"
import MarkdownItAnchor from "markdown-it-anchor"
import MarkdownItHighlightJs from "markdown-it-highlightjs"
import MarkdownItGitHubAlerts from "./vite-plugins/md-alerts"
import { slugify } from "./src/lib/design-system/TableOfContents/slugify"

const mdit = MarkdownIt({
	html: true,
})
mdit.use(MarkdownItHighlightJs)
mdit.use(MarkdownItGitHubAlerts)
mdit.use(MarkdownItAnchor, {
	slugify,
	permalink: MarkdownItAnchor.permalink.linkAfterHeader({
		style: "visually-hidden",
		assistiveText: (title) => `Permalink to "${title}"`,
		visuallyHiddenClass: "visually-hidden",
		wrapper: ['<div class="heading-with-link">', '</div>'],
	})
})

export default defineConfig({
	plugins: [
		rollupCopy({
			targets: [ {
				src: "src/content/*",
				dest: "static",
			} ],
			copyOnce: true,
		}),
		mdPlugin({
			mode: [Mode.HTML],
			markdownIt: mdit,
		}),
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
