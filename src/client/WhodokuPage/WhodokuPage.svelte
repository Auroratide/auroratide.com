<script lang="ts">
    import { DocumentTitle } from '@/client/DocumentTitle'
    import { Container } from '@/client/Container'
    import { UrlBuilder, navigation } from '@/client/routes'
</script>

<DocumentTitle title="Whodoku">
    <Container>
        <h1 class="title">Whodoku!</h1>
        <p class="instructions">Tap an empty square until it is the face you want!</p>
        <whodoku-widget assetsPath={new UrlBuilder().assets().page(navigation.Whodoku.link).base()}></whodoku-widget>
    </Container>
</DocumentTitle>

<style>
    .title, .instructions {
        text-align: center;
    }

    whodoku-widget {
        margin-bottom: var(--sizing-spacing-xl);
    }
</style>
