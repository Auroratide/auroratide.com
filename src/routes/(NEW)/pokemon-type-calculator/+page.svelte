<script lang="ts">
	import type { PokemonType } from '@auroratide/pokemon-types'
	import { defensiveMultipliers } from '@auroratide/pokemon-types'
	import TypeOption from './TypeOption.svelte'
	import Multipliers from './Multipliers.svelte'
	import { StaticPage } from '$lib/NEW/design-system/pages'
	import { page } from "$app/stores"
    import { PageContent } from '$lib/NEW/design-system/PageContent';

	const allTypes: PokemonType[] = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']

	// Cannot use bind:group through components: https://github.com/sveltejs/svelte/issues/2308
	// Workaround: https://svelte.dev/repl/6a17f4105e2b4bcd8d2df3eaff5bce0d?version=3.38.3
	let typesChecked = allTypes.map(() => false)
	$: selectedTypes = allTypes.filter((_, i) => typesChecked[i])
	$: allMultipliers = selectedTypes.length > 0 ?
		Object.entries(defensiveMultipliers(selectedTypes)).map(([type, multiplier]) => ({ name: type as PokemonType, multiplier })) :
		[]
	$: vulnerable = allMultipliers.filter(it => it.multiplier > 1)
	$: resistant = allMultipliers.filter(it => 0 < it.multiplier && it.multiplier < 1)
	$: immune = allMultipliers.filter(it => it.multiplier === 0)
	$: neutral = allMultipliers.filter(it => it.multiplier === 1)
</script>

<StaticPage title="Pokemon Type Calculator" description="Calculate vulnerabilities and resistances of pokemon types, including pokemon with three or more types." pathname={$page.url.pathname}>
	<PageContent slot="content">
		<div class="pokemon">
			<p class="instructions">Select types below to calculate the damage multipliers of a pokemon with that typing. Yes, you can even imagine a hypothetical pokemon with three or more types!</p>
			<fieldset>
				<legend>Choose Types</legend>
				{#each allTypes as type, index}
					<TypeOption {type} bind:checked={typesChecked[index]} />
				{/each}
			</fieldset>
			<h2>Results</h2>
			<dl>
				<div>
					<dt>Vulnerable:</dt>
					<Multipliers values={vulnerable} />
				</div><div>
					<dt>Resistant:</dt>
					<Multipliers values={resistant} />
				</div><div>
					<dt>Immune:</dt>
					<Multipliers values={immune} />
				</div><div>
					<dt>Neutral:</dt>
					<Multipliers values={neutral} />
				</div>
			</dl>
		</div>
	</PageContent>
</StaticPage>

<style>
	.pokemon {
		--skin-type-text: hsl(0, 0%, 100%);
		--skin-pokemon-normal: hsl(60, 26%, 46%);
		--skin-pokemon-fighting: hsl(3, 66%, 45%);
		--skin-pokemon-flying: hsl(255, 76%, 70%);
		--skin-pokemon-poison: hsl(300, 43%, 44%);
		--skin-pokemon-ground: hsl(44, 58%, 43%);
		--skin-pokemon-rock: hsl(49, 58%, 41%);
		--skin-pokemon-bug: hsl(66, 72%, 35%);
		--skin-pokemon-ghost: hsl(263, 27%, 47%);
		--skin-pokemon-steel: hsl(240, 15%, 61%);
		--skin-pokemon-fire: hsl(25, 84%, 50%);
		--skin-pokemon-water: hsl(222, 82%, 65%);
		--skin-pokemon-grass: hsl(100, 50%, 41%);
		--skin-pokemon-electric: hsl(48, 100%, 35%);
		--skin-pokemon-psychic: hsl(342, 70%, 60%);
		--skin-pokemon-ice: hsl(180, 50%, 42%);
		--skin-pokemon-dragon: hsl(258, 85%, 60%);
		--skin-pokemon-dark: hsl(24, 22%, 36%);
		--skin-pokemon-fairy: hsl(347, 50%, 63%);
		--skin-pokemon-none: hsl(0, 0%, 0%);

		padding: var(--sp-st-o);
		font-size: clamp(1rem, 2.667vw, 1.25rem);
	}

	fieldset {
		display: flex;
		flex-wrap: wrap;
		gap: 0;
		justify-content: space-evenly;
		padding: 0.25em;
	}

	legend {
		font-weight: bold;
	}

	dl {
		background: none;
		border: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	dl div {
		display: flex;
		gap: 0.5em;
		flex-wrap: wrap;
	}

	dt {
		width: 100%;
		color: var(--t-fg-b);
	}
</style>
