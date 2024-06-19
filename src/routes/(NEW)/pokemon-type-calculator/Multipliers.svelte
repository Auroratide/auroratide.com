<script lang="ts">
	import type { PokemonType } from '@auroratide/pokemon-types'
	import TypeTag from './TypeTag.svelte'
	import DamageMultiplier from './DamageMultiplier.svelte'

	export let values: {
		name: PokemonType,
		multiplier: number
	}[]
</script>

{#if values.length > 0}
	{#each values as type}
		<dd>
			<TypeTag type={type.name}>
				<DamageMultiplier slot="symbol" multiplier={type.multiplier} />
			</TypeTag>
		</dd>
	{/each}
{:else}
	<dd><TypeTag type="none"></TypeTag></dd>
{/if}

<style>
	dd {
		display: inline-block;
	}
</style>
