<script lang="ts">
    export let date: Date

    const weekday = (date: Date) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getUTCDay()]
    const day = (date: Date) => date.getUTCDate().toString().padStart(2, '0')
    const month = (date: Date) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getUTCMonth()]
    const year = (date: Date) => date.getUTCFullYear()

    const format = (date: Date) => `${weekday(date)}, ${day(date)} ${month(date)} ${year(date)}`

    const isValid = (date: Date) => !isNaN(date.getTime())
</script>

{#if isValid(date)}
    <time datetime={date.toISOString()}>{format(date)}</time>
{/if}

<style>
    time {
        display: block;
        font-weight: var(--typography-light);
        margin-bottom: var(--sizing-spacing-p);
    }
</style>
