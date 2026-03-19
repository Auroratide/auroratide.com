<script lang="ts">
	import { PUBLIC_REMARK_HOST } from "$env/static/public"

	let enabled = $state(false)

	$effect(() => {
		console.log("comments host", PUBLIC_REMARK_HOST)
		enabled = localStorage.getItem("enable-comments") === "true"

		if (enabled && PUBLIC_REMARK_HOST) {
			window.remark_config = {
				host: PUBLIC_REMARK_HOST,
				site_id: "auroratide",
				components: ["embed"],
				show_rss_subscription: false,
				show_email_subscription: false,
				theme: "dark",
				no_footer: true,
			}
	
			const script = document.createElement("script")
			script.id = "remark42-embed-script"
			script.src = `${window.remark_config.host}/web/embed.js`
			script.async = true
	
			document.head.appendChild(script)
		}

		return () => {
			const script = document.querySelector("#remark42-embed-script")
			if (script) script.remove()

			delete window.REMARK42
		}
	})
</script>

{#if enabled}
	<hr />
	<h2 id="comments">Comments</h2>
	<div id="remark42"></div>
{/if}

<style>
	hr {
		margin-block: 3em 2em;
		border: none;
		block-size: 0.0625em;
		margin-inline: 2em;
		background: var(--t-fg-a);
	}
</style>