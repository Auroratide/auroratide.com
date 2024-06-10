<script lang="ts">
    import { Color, Theme } from "$lib/NEW/design-system/Color";
    import { Icon } from "$lib/NEW/design-system/Icon";
	import type { ArticleType } from "../ArticleType"

	export let value: ArticleType["links"]
</script>

<ul class="no-list row">
	{#each value as link}
		<li class="{Theme(link.color)}">
			<a href="{link.href}" class="label-button {Color.text.fg.a} {Color.bg.primary.a}">
				<span class="icon-bg">
					<Icon icon="{link.icon}" />
				</span>
				<span>{link.title}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.no-list {
		list-style: none;
		padding: 0;
		font-size: 0.875em;
	}

	.row {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}

	.label-button {
		display: inline-block;
		letter-spacing: 0.05ch;
		border-radius: 0.25em;
		text-decoration: none;
		line-height: 1;
		padding-block: 0.375em;
		padding-inline: 1.5em 0.875em;
		overflow: hidden;
		position: relative;
	}

	.label-button:hover, .label-button:focus {
		text-decoration: none;
		filter: brightness(1.25);
	}

	.label-button:active { filter: brightness(0.875); }

	.icon-bg {
		position: absolute;
		display: block;
		font-size: 2em;
		top: calc(50% + 0.0625em);
		left: -0.15em;
		transform: translateY(-50%);
		opacity: 0.25;
	}
</style>