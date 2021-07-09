<script lang="ts">
    import { afterUpdate } from 'svelte'

    let ref: HTMLElement
    afterUpdate(() => {
        if (document.activeElement !== ref) {
            ref.focus({ preventScroll: true })
        }
    })
</script>

<div bind:this={ref} tabindex="-1">
    <slot></slot>
</div>
