<svelte:options customElement="decrementor-widget" />

<script lang="ts">
    export let initialvalue: number
    export let increment: number

    let value = initialvalue
    const decrement = () => value -= increment
</script>

<div class="value">{value}</div>
<button part="button" on:click={decrement}>Decrement</button>

<style>
    :host {
        display: block;
        text-align: center;
        margin-bottom: 2em;
    }

    .value {
        font-weight: 700;
        margin-bottom: 0.25em;
        font-size: 1.5em;
    }
</style>
