<script lang="ts">
    import { Palette } from '../design/color'
    import { Avatar } from '../design/Avatar'
    import { socials, navigation, NavVisibility } from '../routes'
    import Container from './Container.svelte'
    import SkipLink from './SkipLink.svelte'
    import DarkModeSwitch from '../design/DarkModeSwitch.svelte'
</script>

<Container>
    <div class="top-bar">
        <div class="logo">
            <a href="/" aria-label="Homepage"><Avatar shadowColor={Palette.newColors.DeepBlue} shadowWidth="1.25em" /></a>
        </div>
        <div class="title">
            <SkipLink />
            <a class="page-title" href="/">Auroratide</a>
        </div>
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
        <div class="theme">
            <DarkModeSwitch />
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
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
            "logo title subtitle theme"
            "logo nav nav theme";
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
        align-self: center;
        position: relative;
    }

    .title a {
        font-size: var(--sizing-font-md);
        line-height: 1.25;
        color: var(--palette-greyscale-100);
    }

    .subtitle {
        grid-area: subtitle;
        align-self: center;
        font-size: var(--sizing-font-sm);
        align-self: center;
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
        color: var(--skin-banner-text);
    }

    .theme {
        grid-area: theme;
        font-size: var(--sizing-font-sm);
        text-align: right;
        align-self: center;
    }

    .nav {
        grid-area: nav;
        font-size: var(--sizing-font-sm);
        align-self: center;
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0 calc(-1 * var(--sizing-spacing-sm));
        text-align: left;
    }

    .nav ul li {
        display: inline-block;
        margin: 0;
    }

    .nav a {
        display: inline-block;
        padding: 0 var(--sizing-spacing-sm);
        color: var(--skin-banner-text);
    }

    @media screen and (min-width: 75rem) {
        .top-bar {
            grid-template-columns: auto 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: 
                "logo title theme"
                "logo subtitle nav";
            column-gap: 1.625em;
            max-height: 5.625em;
            overflow: visible;
        }

        .logo {
            font-size: 6.75em;
            align-self: start;
        }

        .subtitle {
            margin-left: 0;
        }

        .subtitle::before {
            display: none;
        }

        .theme {
            margin-right: calc(-1 * var(--sizing-spacing-sm));
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
