<script lang="ts">
    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { UrlBuilder, navigation } from '@/client/routes'
    import { FocusOnMe } from '@/client/FocusOnMe'
</script>

<DocumentInfo title="Whodoku" description="Fun sudoku widget which is actually an inside joke between me and some friends.">
    <Container>
        <FocusOnMe><h1 class="title">Whodoku!</h1></FocusOnMe>
        <p class="instructions">Tap an empty square until it is the face you want!</p>
        <whodoku-widget assetsPath={new UrlBuilder().assets().page(navigation.Whodoku.link).base()}></whodoku-widget>
    </Container>
</DocumentInfo>

<style>
    .title, .instructions {
        text-align: center;
    }

    whodoku-widget {
        margin-bottom: var(--sizing-spacing-xl);
    }
</style>
