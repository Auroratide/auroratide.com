<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { FocusOnMe } from '@/client/FocusOnMe'

    import { navigation, UrlBuilder } from '@/client/routes'
    const assetRoot = new UrlBuilder().assets().page(navigation.About.link)
</script>

<DocumentInfo title="About" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        <FocusOnMe>
            <article class="page">
                <Content>
                    <hgroup>
                        <h1 class="greeting">Hi! I'm Timothy.</h1>
                        <h2 class="tagline">Coding is my craft. Teaching is my passion.</h2>
                    </hgroup>
                    <img-colorscape class="profile" colorscape="{assetRoot.asset('profile/colorscape.svg')}">
                        <img src={assetRoot.asset('profile/1080w.png')} alt="" />
                    </img-colorscape>
                    <p>A long time ago, I had a graphing calculator which came with a bunch of games on it. But one day, a nefarious colleague deleted all those games. Desperate, I sought a manual hoping they could be restored, but I stumbled upon something much better.</p>
                    <p>The games could not be undeleted. Instead, they could be recreated.</p>
                    <p>That's how I discovered programming. Since then, I've dabbled in websites, game development, artificial intelligence, and more. It turns out coding is much like magic.</p>
                    <p>Nowadays, I work as an independent developer. I deal mostly with Javascript code (fun stuff like Svelte, React, or Pixi). So if you're a frontend developer or perhaps a game designer, hopefully you will find the content on my site enriching!</p>
                </Content>
            </article>
        </FocusOnMe>
    </Container>
</DocumentInfo>

<style>
    .page {
        position: relative;
    }

    .greeting, .tagline {
        text-align: center;
    }

    .tagline {
        line-height: 1.25;
        margin-bottom: var(--sizing-spacing-md);
    }
    
    .profile {
        display: block;
        width: 80vw;
        height: 80vw;
        max-width: 20em;
        max-height: 20em;
        border-radius: 20em;
        overflow: hidden;
        margin: auto;
        margin-bottom: var(--sizing-spacing-lg);
        box-shadow: 0 0.25em 0.5em -0.25em var(--palette-shade-050);
    }

    @media screen and (min-width: 75rem) {
        .greeting, .tagline {
            text-align: left;
        }

        .profile {
            width: 30em;
            height: 30em;
            max-width: 30em;
            max-height: 30em;
            float: right;
            margin: -8.5em -5em 0 1em;
        }
    }
</style>
