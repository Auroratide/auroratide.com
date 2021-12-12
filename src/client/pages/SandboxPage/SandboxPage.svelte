<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { FocusOnMe } from '@/client/FocusOnMe'
    import * as NimcardEngine from '@auroratide/nimcard'
    import { Nimcard } from '@/client/pages/NimcardPage/Nimcard'

    // import { Loading } from '@/client/Loading'
    // import { RawRenderer } from '@/client/RawRenderer'

    // export let fetch: (input: RequestInfo) => Promise<Response> = window.fetch

    // const content = fetch('/api/sandbox/index.json')
    //     .then(res => res.json())

    const scoring = (c: NimcardEngine.Card) => {
        if (c.value === NimcardEngine.Card.Value.Queen && c.suit === NimcardEngine.Card.Suit.Diamonds) {
            return -1000
        } else {
            return 1
        }
    }
</script>

<DocumentInfo title="King's Gambit" description="A page for me to test things">
    <Container>
        <Content>
            <FocusOnMe>
                <h1>King's Gambit</h1>
            </FocusOnMe>
            <div class="sandbox">
                <Nimcard {scoring} />
            </div>
            <!-- {#await content}
                <Loading large text="Fetching content..." />
            {:then value}
                <RawRenderer content={value.content} />
            {/await} -->
        </Content>
    </Container>
</DocumentInfo>

<style>
    h1 {
        text-align: center;
        margin-bottom: var(--sizing-spacing-md);
    }

    .sandbox :global(nimcard-game .player-score) {
        display: none;
    }
</style>