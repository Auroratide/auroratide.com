<script lang="ts">
    import type { Resource, ResourceStore } from '@/client/resources'

    export let resource: ResourceStore<Resource>

    let items: Resource[] = null
    $: items = resource.list()
</script>

{#if items !== null}
    {#each items as item}
        <p>{item.id}</p>
    {/each}
{/if}
