<script lang="ts">
    export let title: string = ''
    let addedPart: string
    $: addedPart = title ? ` - ${title}` : ''
</script>

<svelte:head>
    <title>Auroratide{addedPart}</title>
</svelte:head>

<slot></slot>
