<script lang="ts">
    import { Avatar } from '@/client/Avatar'
    import { socials, navigation, NavVisibility } from '@/client/routes'
    import { Container } from '@/client/Container'
</script>

<Container>
    <div class="top-bar">
        <div class="logo"><a href="/"><Avatar /></a></div>
        <div class="title"><h1><a href="/">Auroratide</a></h1></div>
        <div class="subtitle">Coder and Teacher</div>
        <div class="socials">
            <ul>
                {#each Object.values(socials) as social}
                    <li><a href={social.link}>
                        <vector-icon icon={social.icon}></vector-icon>
                    </a></li>
                {/each}
            </ul>
        </div>
        <nav class="nav">
            <ul>
                {#each Object.values(navigation).filter(item => item.visibility <= NavVisibility.Visible) as item}
                    <li><a href={item.link}>{item.name}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
</Container>

<style>
    .top-bar {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: 1fr auto;
        grid-template-areas: 
            "title logo socials"
            "subtitle logo nav";
        column-gap: 1em;
        overflow: hidden;
        padding: 0 0.25em;
    }

    .logo {
        grid-area: logo;
        font-size: 3.5em;
        align-self: center;
    }

    .title {
        grid-area: title;
    }

    .title h1 {
        font-size: var(--sizing-font-md);
    }

    .title a {
        color: var(--palette-greyscale-100);
    }

    .subtitle {
        grid-area: subtitle;
        font-size: var(--sizing-font-sm);
        align-self: center;
        font-weight: var(--typography-light);
    }

    .socials {
        grid-area: socials;
        align-self: center;
    }

    .socials ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: right;
        margin: 0 calc(-1 * var(--sizing-spacing-xs));
    }

    .socials ul li {
        display: inline-block;
        margin: 0 var(--sizing-spacing-xs);
    }

    .socials a {
        color: var(--skin-color-text-secondary);
    }

    .nav {
        grid-area: nav;
        font-size: var(--sizing-font-sm);
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0 calc(-1 * var(--sizing-spacing-sm));
        text-align: right;
    }

    .nav ul li {
        display: inline-block;
        margin: 0 var(--sizing-spacing-sm);
    }

    .nav a {
        color: var(--skin-color-text-secondary);
    }
</style>
