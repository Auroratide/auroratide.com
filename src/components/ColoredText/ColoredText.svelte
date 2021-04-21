<svelte:options tag="colored-text" />

<script lang="ts">
    export let color: string
</script>

<span style="color: {color};"><slot></slot></span>
