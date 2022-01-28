<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import Content from '$lib/layout/Content.svelte'
    import FocusOnMe from '$lib/layout/FocusOnMe.svelte'
    import Palette from '$lib/design/Palette.svelte'
    import Shade from '$lib/design/Shade.svelte'
</script>

<DocumentInfo title="Styleguide" description="My color and branding standards.">
    <Container>
        <Content>
            <article aria-label="Styleguide" class="styleguide">
                <FocusOnMe><h1>Styleguide</h1></FocusOnMe>
                <section class="palettes">
                    <Palette name="Aurora Blue">
                        <Shade label="white-on-color" hsl={{h: 210, s: 68, l: 45}} />
                        <Shade label="color-on-black" hsl={{h: 210, s: 72, l: 57}} />
                        <Shade label="light-overlay" hsl={{h: 207, s: 52, l: 97}} />
                        <Shade label="dark-overlay" hsl={{h: 213, s: 15, l: 14}} />
                    </Palette>
                    <Palette name="Aurora Green">
                        <Shade label="white-on-color" hsl={{h: 155, s: 44, l: 35}} />
                        <Shade label="color-on-black" hsl={{h: 155, s: 50, l: 50}} />
                        <Shade label="light-overlay" hsl={{h: 153, s: 47, l: 97}} />
                        <Shade label="dark-overlay" hsl={{h: 157, s: 12, l: 14}} />
                    </Palette>
                    <Palette name="Fable Lavender">
                        <Shade label="white-on-color" hsl={{h: 262, s: 58, l: 58}} />
                        <Shade label="color-on-black" hsl={{h: 262, s: 64, l: 68}} />
                        <Shade label="light-overlay" hsl={{h: 264, s: 50, l: 97}} />
                        <Shade label="dark-overlay" hsl={{h: 260, s: 10, l: 15}} />
                    </Palette>
                    <Palette name="Fable Pink">
                        <Shade label="white-on-color" hsl={{h: 330, s: 60, l: 49}} />
                        <Shade label="color-on-black" hsl={{h: 330, s: 88, l: 68}} />
                        <Shade label="light-overlay" hsl={{h: 332, s: 83, l: 97}} />
                        <Shade label="dark-overlay" hsl={{h: 328, s: 12, l: 16}} />
                    </Palette>
                    <Palette name="Livian Yellow">
                        <Shade label="white-on-color" hsl={{h: 48, s: 86, l: 29}} />
                        <Shade label="color-on-black" hsl={{h: 48, s: 94, l: 42}} />
                        <Shade label="light-overlay" hsl={{h: 50, s: 63, l: 96}} />
                        <Shade label="dark-overlay" hsl={{h: 46, s: 19, l: 14}} />
                    </Palette>
                    <Palette name="Autumn Red">
                        <Shade label="white-on-color" hsl={{h: 357, s: 68, l: 45}} />
                        <Shade label="color-on-black" hsl={{h: 357, s: 98, l: 60}} />
                        <Shade label="light-overlay" hsl={{h: 359, s: 52, l: 96}} />
                        <Shade label="dark-overlay" hsl={{h: 355, s: 15, l: 13}} />
                    </Palette>
                    <Palette name="Autumn Orange">
                        <Shade label="white-on-color" hsl={{h: 34, s: 60, l: 37}} />
                        <Shade label="color-on-black" hsl={{h: 34, s: 70, l: 52}} />
                        <Shade label="light-overlay" hsl={{h: 36, s: 66, l: 96}} />
                        <Shade label="dark-overlay" hsl={{h: 30, s: 16, l: 15}} />
                    </Palette>
                    <Palette name="Aella Green">
                        <Shade label="white-on-color" hsl={{h: 102, s: 46, l: 36}} />
                        <Shade label="color-on-black" hsl={{h: 102, s: 56, l: 46}} />
                        <Shade label="light-overlay" hsl={{h: 100, s: 43, l: 96}} />
                        <Shade label="dark-overlay" hsl={{h: 104, s: 12, l: 14}} />
                    </Palette>
                    <Palette name="Eventide Black">
                        <Shade label="white-on-color" hsl={{h: 240, s: 8, l: 20}} />
                        <Shade label="color-on-black" hsl={{h: 240, s: 8, l: 56}} />
                        <Shade label="light-overlay" hsl={{h: 240, s: 0, l: 94}} />
                        <Shade label="dark-overlay" hsl={{h: 240, s: 2, l: 13}} />
                    </Palette>
                    <Palette name="Winter Grey">
                        <Shade label="white-on-color" hsl={{h: 200, s: 8, l: 44}} />
                        <Shade label="color-on-black" hsl={{h: 200, s: 12, l: 68}} />
                        <Shade label="light-overlay" hsl={{h: 180, s: 8, l: 97}} />
                        <Shade label="dark-overlay" hsl={{h: 180, s: 1, l: 16}} />
                    </Palette>
                    <Palette name="Deep Blue">
                        <Shade label="standard" hsl={{h: 215, s: 100, l: 10}} />
                    </Palette>
                </section>
            </article>
        </Content>
    </Container>
</DocumentInfo>

<style>
    h1 {
        text-align: center;
    }

    .palettes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
