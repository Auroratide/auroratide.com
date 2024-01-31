<svelte:options customElement="date-display" />

<script lang="ts">
    export let date: Date
    let forceDate: Date
    $: forceDate = new Date(date)

    const day = (date: Date) => date.getUTCDate().toString().padStart(2, '0')
    const month = (date: Date) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getUTCMonth()]
    const year = (date: Date) => date.getUTCFullYear()

    const format = (date: Date) => `${day(date)} ${month(date)} ${year(date)}`

    const isValid = (date: Date) => date && !isNaN(date.getTime())
</script>

{#if isValid(forceDate)}
    <time datetime={forceDate.toISOString()}>{format(forceDate)}</time>
{/if}
