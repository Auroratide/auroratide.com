<script lang="ts">
    export let tag: string
</script>

<div class="container">
    <slot></slot>
</div>

<style>
    .container {
        max-width: 75em;
        margin: 0 auto;
    }
</style>
