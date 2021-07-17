<script lang="ts">
    import { Palette } from '@/client/color'
    import { Avatar } from '@/client/Avatar'
    import { socials, navigation, NavVisibility } from '@/client/routes'
    import { Container } from '@/client/Container'
</script>

<Container>
    <div class="top-bar">
        <div class="logo"><a href="/" aria-label="Homepage"><Avatar shadowColor={Palette.colors.DeepBlue} shadowWidth="1.25em" /></a></div>
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
        <nav class="nav" aria-label="Site Navigation">
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
        grid-template-columns: auto auto 1fr;
        grid-template-rows: 1fr auto;
        grid-template-areas: 
            "logo title subtitle"
            "logo nav nav";
        column-gap: 1em;
        overflow: hidden;
        padding: 0 0.25em;
    }

    .top-bar a {
        text-decoration: none;
    }

    .top-bar a:hover, .top-bar a:focus {
        text-decoration: underline;
    }

    .logo {
        grid-area: logo;
        font-size: 3.75em;
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
        margin-left: calc(-1 * var(--sizing-spacing-sm));
        opacity: 0.9;
    }

    .subtitle::before {
        content: '\2022';
        margin-right: var(--sizing-spacing-sm);
    }

    .socials {
        display: none; /* Looks better without; leaving here in case I change my mind */
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
        text-align: left;
    }

    .nav ul li {
        display: inline-block;
    }

    .nav a {
        display: inline-block;
        padding: 0 var(--sizing-spacing-sm);
        color: var(--skin-color-text-secondary);
    }

    @media screen and (min-width: 75rem) {
        .top-bar {
            grid-template-columns: auto 1fr 1fr;
            grid-template-rows: 1fr auto;
            grid-template-areas: 
                "logo title socials"
                "logo subtitle nav";
            column-gap: 1.5em;
            max-height: 5em;
            overflow: visible;
        }

        .logo {
            font-size: 6em;
            align-self: start;
        }

        .subtitle {
            margin-left: 0;
        }

        .subtitle::before {
            display: none;
        }

        .nav ul {
            margin: 0 calc(-1 * var(--sizing-spacing-md));
            text-align: right;
        }

        .nav ul li a {
            padding: 0 var(--sizing-spacing-md);
        }
    }
</style>
