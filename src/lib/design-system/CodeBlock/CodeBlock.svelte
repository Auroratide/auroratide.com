<script lang="ts">
	import hljs from "highlight.js"

	let {
		lang,
		code,
	}: {
		lang: string,
		code: string,
	} = $props()

	let highlighted = $derived(hljs.highlight(code.trim(), { language: lang }))
</script>

<pre><code class="hljs language-{lang}">{@html highlighted.value}</code></pre>
