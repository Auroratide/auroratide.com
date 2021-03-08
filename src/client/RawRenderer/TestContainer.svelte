<script lang="ts">
    import RawRenderer from './RawRenderer.svelte'

    export let contentA: string
    export let contentB: string

    let content = contentA

    const onClick = () => {
        if (content === contentA)
            content = contentB
        else
            content = contentA
    }
</script>

<RawRenderer {content} />

<button on:click={onClick}>Toggle</button>
