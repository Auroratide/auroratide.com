<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import Content from '$lib/layout/Content.svelte'
    import FocusOnMe from '$lib/layout/FocusOnMe.svelte'
</script>

<DocumentInfo title="Carica Namespace" description="Namespace for Carica.">
    <Container>
        <Content>
            <FocusOnMe>
                <h1>Carica Namespace</h1>
            </FocusOnMe>
            <p>This page is the namespace for Carica XML attributes. I don't exactly know what to put here yet, so here's a link to the <a href="https://github.com/Auroratide/carica">Carica Github</a> instead.</p>
        </Content>
    </Container>
</DocumentInfo>

<style>
    h1 {
        text-align: center;
    }
</style>
