<svelte:options tag="side-text" />

<script lang="ts">
    export let info: boolean = false
    export let warning: boolean = false
</script>

<aside class:info class:warning>
    <slot></slot>
</aside>

<style>
    aside {
        color: red;
    }
</style>
