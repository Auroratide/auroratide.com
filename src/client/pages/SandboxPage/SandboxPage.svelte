<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { FocusOnMe } from '@/client/FocusOnMe'
    import { Loading } from '@/client/Loading'
    import { RawRenderer } from '@/client/RawRenderer'

    let loaded = false
    function load() {
        loaded = true
    }

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
                {#if loaded}
                    <side-text success>Everything has loaded!</side-text>
                {:else}
                    <Loading text="Waiting for page to fully load..." />
                {/if}
                <RawRenderer content={value.content} />
                <img src="/assets/posts/the-bounce-of-rubber-juggle/bounce.webp" alt="" on:load={load} />
            {/await}
        </Content>
    </Container>
</DocumentInfo>

<style>
    side-text {
        font-size: var(--sizing-font-lg);
    }
</style>
