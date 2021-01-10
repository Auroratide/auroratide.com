<svelte:options tag="major-point" />

<script lang="ts">
    export let text: string
</script>

<p class="major-point"><em>{text}</em></p>

<style>
    .major-point {
        font-size: 1.5em;
        text-align: center;
        padding: 1em 1.5em;
        font-weight: 300;
    }

    .major-point em {
        font-style: normal;
    }
</style>
