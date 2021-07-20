<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { FocusOnMe } from '@/client/FocusOnMe'
    import { Palette } from './Palette'
    import { Shade } from './Shade'
</script>

<DocumentInfo title="Styleguide" description="My color and branding standards.">
    <Container>
        <Content>
            <article aria-label="Styleguide" class="styleguide">
                <FocusOnMe><h1>Styleguide</h1></FocusOnMe>
                <section class="palettes">
                    <Palette name="Aurora Blue">
                        <Shade hex={0x448DDD} />
                        <Shade hex={0x2575CB} />
                        <Shade hex={0x2d5E94} />
                    </Palette>
                    <Palette name="Aurora Green">
                        <Shade hex={0x41AAB7} />
                        <Shade hex={0x307F88} />
                        <Shade hex={0x2B727A} />
                    </Palette>
                    <Palette name="Fable Lavender">
                        <Shade hex={0x9D77DD} />
                        <Shade hex={0x895CD6} />
                        <Shade hex={0x694F94} />
                    </Palette>
                    <Palette name="Fable Pink">
                        <Shade hex={0xFB6BB5} />
                        <Shade hex={0xE60579} />
                        <Shade hex={0xA84779} />
                    </Palette>
                    <Palette name="Livian Yellow">
                        <Shade hex={0xD6AB00} />
                        <Shade hex={0x8F7200} />
                        <Shade hex={0x8F7200} />
                    </Palette>
                    <Palette name="Eventide Black">
                        <Shade hex={0x303038} />
                        <Shade hex={0x737387} />
                        <Shade hex={0x202025} />
                    </Palette>
                    <Palette name="Winter Grey">
                        <Shade hex={0xA6B3B9} />
                        <Shade hex={0x657881} />
                        <Shade hex={0x6F787C} />
                    </Palette>
                    <Palette name="Autumn Red">
                        <Shade hex={0xBE2C38} />
                        <Shade hex={0xD03945} />
                        <Shade hex={0x7F1D25} />
                    </Palette>
                    <Palette name="Autumn Orange">
                        <Shade hex={0xD88F30} />
                        <Shade hex={0xA36A1F} />
                        <Shade hex={0x906020} />
                    </Palette>
                    <Palette name="Aella Green">
                        <Shade hex={0x5EBF36} />
                        <Shade hex={0x418325} />
                        <Shade hex={0x3F8024} />
                    </Palette>
                    <Palette name="Deep Blue">
                        <Shade hex={0x001533} />
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
