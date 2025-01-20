<script lang="ts">
    import { PageContent } from "$lib/design-system/PageContent";

	export let who: "me" | "other"
	export let avatar: string
	export let speaker: string
</script>

<div class="quote {who}">
	<p class="speaker"><img src="{avatar}" alt="{speaker}" /></p>
	<div class="speech">
		<PageContent>
			<slot></slot>
		</PageContent>
	</div>
</div>

<style>
	.quote {
		margin-block-end: 0.5em;
	}

	.speech {
		background: var(--t-bg-b);
		max-inline-size: 25em;
		padding: 0.75em 1em;
	} .speech :global(*:first-child) {
		margin-block-start: 0;
	} .speech :global(*:last-child) {
		margin-block-end: 0;
	}

	.other .speech {
		margin: 0 0 0 auto;
		border-radius: 1em 0 1em 1em;
	} .other .speaker {
		margin: 0 0 0 auto;
		border-radius: 1em 1em 0 0;
	} .other .speaker::before {
		border-radius: 100% 100% 0 100%;
		inset: 0 auto auto -100%;
	}
	
	.me .speech {
		margin: 0 auto 0 0;
		border-radius: 0 1em 1em 1em;
	} .me .speaker {
		margin: 0 auto 0 0;
		border-radius: 1em 1em 0 0;
	} .me .speaker::before {
		border-radius: 100% 100% 100% 0;
		inset: 0 auto auto 100%;
	}

	.speaker {
		position: relative;
		background: var(--t-bg-b);
		margin: 0;
		inline-size: 3.25em;
		padding: 0.5em;
	} .speaker p {
		margin: 0;
	} .speaker::before {
		content: "";
		background: radial-gradient(circle at center, transparent 0%, transparent 72.5%, var(--t-bg-b) 72.5%);
		inline-size: 3.25em;
		block-size: 3.25em;
		position: absolute;
	}

	.speech :global(li:has([slot="mirror"] > .cursor.current:first-child)::marker) {
		color: transparent;
	}

	img {
		inline-size: 100%;
		display: block;
	}
</style>