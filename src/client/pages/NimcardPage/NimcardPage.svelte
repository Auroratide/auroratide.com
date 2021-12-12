<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { FocusOnMe } from '@/client/FocusOnMe'
    import { Nimcard } from '@/client/pages/NimcardPage/Nimcard'
</script>

<DocumentInfo title="Nimcard" description="A strategy card game">
    <Container>
        <Content>
            <FocusOnMe>
                <h1>Nimcard</h1>
            </FocusOnMe>
            <Nimcard />
        </Content>
    </Container>
</DocumentInfo>

<style>
    h1 {
        text-align: center;
        margin-bottom: var(--sizing-spacing-md);
    }
</style>
