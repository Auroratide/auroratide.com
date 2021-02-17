<script lang="ts">
    import { DocumentTitle } from '@/client/DocumentTitle'
    import { Container } from '@/client/Container'
</script>

<DocumentTitle title="Whodoku">
    <Container>
        <h1 class="title">Whodoku!</h1>
        <p class="instructions">Tap an empty square until it is the face you want!</p>
        <whodoku-widget assetsPath="/assets/whodoku"></whodoku-widget>
    </Container>
</DocumentTitle>

<style>
    .title, .instructions {
        text-align: center;
    }
</style>
