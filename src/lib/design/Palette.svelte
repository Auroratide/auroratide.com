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
        margin-bottom: var(--sp-st-s);
        flex: 0 0 16em;
        padding: 0 var(--sp-st-s);
    }

    h2 {
        margin: 0 0 var(--sp-st-be) 0;
        font-size: var(--font-sz-neptune);
    }
</style>
