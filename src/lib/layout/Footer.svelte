<script lang="ts">
    import { socials, navigation, external, NavVisibility } from '../routes'
    import Container from './Container.svelte'

    const currentYear = new Date().getUTCFullYear()
</script>

<Container>
    <div class="footer">
        <div class="socials">
            <ul>
                {#each Object.values(socials) as social}
                    <li><a aria-label={social.name} href={social.link} style="background: {social.color};">
                        <vector-icon icon={social.icon}></vector-icon>
                    </a></li>
                {/each}
            </ul>
        </div>
        <div class="nav">
            <ul>
                {#each Object.values(navigation).filter(item => item.visibility <= NavVisibility.Limited) as item}
                    <li><a href={item.link}>{item.name}</a></li>
                {/each}
            </ul>
        </div>
        <small class="license">&copy; {currentYear} Timothy Foster, All Rights Reserved</small>
        <small class="source">Made with Svelte. Check out the <a href="{external.Source.link}">source code</a>!</small>
    </div>
</Container>

<style>
    .footer {
        padding: var(--sp-st-ge) 0;
        text-align: center;
    }

    .socials {
        margin-bottom: var(--sp-paragraph);
        font-size: var(--font-sz-uranus);
    }

    .socials ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    .socials ul li {
        display: inline-block;
        margin: 0 var(--sp-st-o);
    }

    .socials a {
        --width: 2.375em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--skin-banner-text);
        border: 0 solid var(--skin-banner);
        width: var(--width);
        height: var(--width);
        border-radius: calc(var(--width) / 2);
        transition: border-width var(--transition-quick);
    }

    .socials a:hover {
        border-width: var(--bd-fx-c);
    }

    .nav {
        font-size: var(--font-sz-neptune);
        margin-bottom: var(--sp-paragraph);
    }

    .nav ul {
        list-style: none;
        padding: 0;
        text-align: center;
    }

    .nav ul li {
        display: inline-block;
        margin: 0 var(--sp-st-s);
    }

    .nav a {
        color: var(--skin-banner-text);
        text-decoration: none;
    }

    .nav a:hover, .nav a:focus {
        text-decoration: underline;
    }

    .license, .source {
        display: block;
        font-size: var(--font-sz-earth);
    }

    .license {
        margin-bottom: var(--sp-paragraph);
    }

    .source {
        opacity: 0.9;
    }

    .source a {
        color: var(--skin-banner-text);
        text-decoration: underline;
    }

    .source a:hover {
        text-decoration: none;
    }
</style>
