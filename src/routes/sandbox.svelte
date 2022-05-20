<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit'

    export const load: Load = async ({ fetch }) => {
        const content = await fetch('/api/sandbox/index.json')
            .then(res => res.json())
            .then(json => json.content)
        
        return {
            props: {
                content,
            },
        }
    }
</script>

<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import Content from '$lib/layout/Content.svelte'
    import RawRenderer from '$lib/design/RawRenderer.svelte'

    export let content: string
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
