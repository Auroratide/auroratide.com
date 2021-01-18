<script lang="ts">
    import { highlighter } from '@/client/syntax-highlighter'

    export let content: string
    let container: HTMLElement

    $: if (container) highlighter.highlightAllUnder(container)
</script>

<div bind:this={container}>
    {@html content}
</div>
