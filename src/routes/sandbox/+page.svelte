<script lang="ts">
    import type { PageData } from './$types'
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import Content from '$lib/layout/Content.svelte'
    import RawRenderer from '$lib/design/RawRenderer.svelte'

    export let data: PageData
    $: content = data.content
</script>

<DocumentInfo title="Sandbox" description="A page for me to test things">
    <Container>
        <Content>
            <h1>Sandbox</h1>
            <RawRenderer content={content} />
        </Content>
    </Container>
</DocumentInfo>

<style>
    h1 {
        text-align: center;
        margin-bottom: var(--sp-st-s);
    }
</style>
