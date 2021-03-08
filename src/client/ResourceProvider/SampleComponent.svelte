<script lang="ts">
    import type { Resource, ResourceItem, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'

    export let resource: Resource<ResourceItem>

    let items: Maybe<ResourceItem[]> = Pending
    $: items = resource.list()
</script>

{#if items !== Pending && items !== Missing}
    {#each items as item}
        <p>{item.id}</p>
    {/each}
{/if}
