<script lang="ts">
    export let name: string
</script>

<section class="palette">
    <h2>{name}</h2>
    <slot></slot>
</section>

<style>
    .palette {
        text-align: center;
        margin-bottom: var(--sizing-spacing-md);
        flex: 0 0 12.5em;
        padding: 0 var(--sizing-spacing-md);
    }

    h2 {
        margin: 0 0 var(--sizing-spacing-xs) 0;
        font-size: var(--sizing-font-sm);
    }
</style>
