<script lang="ts">
    export let title: string = ''
    export let description: string = ''

    let addedPart: string
    $: addedPart = title ? ` - ${title}` : ''
</script>

<svelte:head>
    <title>Auroratide{addedPart}</title>
    {#if description}
        <meta name="description" content={description} />
    {/if}
</svelte:head>

<slot></slot>
