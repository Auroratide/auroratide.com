<script lang="ts">
    import { afterUpdate } from 'svelte'
    import { highlighter } from './syntax-highlighter'

    export let content: string | undefined
    let container: HTMLElement

    afterUpdate(() => {
        if (content != null && container)
            highlighter.highlightAllUnder(container)
    })
</script>

<div bind:this={container}>
    {@html content}
</div>
