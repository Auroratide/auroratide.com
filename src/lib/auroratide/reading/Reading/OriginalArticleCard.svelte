<script lang="ts">
    import { Color } from "$lib/design-system/Color";
    import { DateDisplay } from "$lib/design-system/DateDisplay";
    import type { ReadingTypeType } from "../ReadingType";

	let {
		author,
		publisher,
		href,
		publishedAt,
		type,
	}: {
		author: string,
		publisher: string,
		href: string,
		publishedAt: Date,
		type: ReadingTypeType,
	} = $props()
</script>


<div class="original-article-card {Color.bg.bg.b} lift-on-focus">
	<h2><a {href} class="{Color.text.fg.b} card-link">
		{#if type === "video"}
			Watch the Original Video
		{:else}
			Read the Original Article
		{/if}
	</a></h2>
	<p>By {author}{#if publisher}{` on ${publisher}`}{/if}</p>
	<p>Published <DateDisplay value={publishedAt} /></p>
</div>

<style>
	.original-article-card {
		border-inline-start: 0.5em solid var(--t-primary-a);
		padding: 1em;
		max-inline-size: 25em;
	}

	h2 {
		font-size: 1.125em;
		margin: 0;
	}

	p {
		margin-block: 0.375em;
		font-size: 0.875em;
	}

	p:last-child {
		margin-block-end: 0;
	}

	.card-link {
		text-decoration: none;
	}

	.card-link::after {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		z-index: 2;
	}

	.lift-on-focus {
		transition: all 0.2s ease-in-out;
		box-shadow: var(--grounded);
	}

	.lift-on-focus:hover, .lift-on-focus:focus-within {
		transform: scale(1.025);
		box-shadow: var(--elevated);
	}

	.lift-on-focus:active {
		transition: all 0.08s ease-out;
		transform: scale(1);
		box-shadow: var(--grounded);
	}
</style>