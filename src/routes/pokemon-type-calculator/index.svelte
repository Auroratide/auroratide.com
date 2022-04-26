<script lang="ts">
    import type { PokemonType } from '@auroratide/pokemon-types'
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import FocusOnMe from '$lib/layout/FocusOnMe.svelte'
    import { UrlBuilder, navigation } from '$lib/routes'
    import { buildOpenGraph } from '$lib/open-graph'
    import { defensiveMultipliers } from '@auroratide/pokemon-types'
    import TypeTag from './_TypeTag.svelte'
    import TypeOption from './_TypeOption.svelte'
    import DamageMultiplier from './_DamageMultiplier.svelte'
    import Multipliers from './_Multipliers.svelte'

    const allTypes: PokemonType[] = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']

    const og = buildOpenGraph({
        title: 'Pokemon Type Calculator',
        url: new UrlBuilder().withBase().static(navigation.PokemonTypeCalculator),
    }).website()

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

<DocumentInfo {og} title="Pokemon Type Calculator" description="Calculate vulnerabilities and resistances of pokemon types, including pokemon with three or more types.">
    <Container>
        <div class="pokemon">
            <FocusOnMe><h1 class="title">Pokemon Type Calculator</h1></FocusOnMe>
            <p class="instructions">Select types below to calculate the damage multipliers of a pokemon with that typing. Yes, you can even imagine a hypothetical pokemon with three or more types!</p>
            <fieldset>
                <legend>Choose Types</legend>
                {#each allTypes as type, index}
                    <TypeOption {type} bind:checked={typesChecked[index]} />
                {/each}
            </fieldset>
            <h2>Results</h2>
            <dl>
                <dt>Vulnerable:</dt>
                <Multipliers values={vulnerable} />
                <dt>Resistant:</dt>
                <Multipliers values={resistant} />
                <dt>Immune:</dt>
                <Multipliers values={immune} />
                <dt>Neutral:</dt>
                <Multipliers values={neutral} />
            </dl>
        </div>
    </Container>
</DocumentInfo>

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

    .title, .instructions {
        text-align: center;
    }

    fieldset {
        display: flex;
        flex-wrap: wrap;
        gap: var(--sp-st-o);
        justify-content: space-evenly;
        padding: var(--sp-st-s);
    }

    legend {
        font-weight: bold;
    }

    dt {
        margin-bottom: var(--sp-st-o);
    }
</style>
