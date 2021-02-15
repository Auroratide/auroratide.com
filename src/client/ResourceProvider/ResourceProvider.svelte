<script lang="ts">
    import type { SvelteComponent } from 'svelte'
    import type { Resource, SvelteResource } from '@/client/resources'

    export let store: SvelteResource<Resource>
    export let component: SvelteComponent
</script>

<svelte:component this={component} resource={$store} />
