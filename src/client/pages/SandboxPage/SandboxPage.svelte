<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { FocusOnMe } from '@/client/FocusOnMe'
    import { Loading } from '@/client/Loading'
    import { RawRenderer } from '@/client/RawRenderer'

    export let fetch: (input: RequestInfo) => Promise<Response> = window.fetch

    const content = fetch('/api/sandbox/index.json')
        .then(res => res.json())
</script>

<DocumentInfo title="Sandbox" description="A page for me to test things">
    <Container>
        <Content>
            <FocusOnMe>
                <h1>Sandbox</h1>
            </FocusOnMe>
            {#await content}
                <Loading large text="Fetching content..." />
            {:then value}
                <RawRenderer content={value.content} />
            {/await}
        </Content>
    </Container>
</DocumentInfo>
