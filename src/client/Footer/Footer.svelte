<script lang="ts">
    import { socials, navigation } from '@/client/routes'
    import { Container } from '@/client/Container'

    const currentYear = new Date().getUTCFullYear()
</script>

<Container>
    <div class="footer">
        <div class="socials">
            <ul>
                {#each Object.values(socials) as social}
                    <li><a href={social.link} style="background: {social.color};">
                        <vector-icon icon={social.icon}></vector-icon>
                    </a></li>
                {/each}
            </ul>
        </div>
        <div class="nav">
            <ul>
                {#each Object.values(navigation) as item}
                    <li><a href={item.link}>{item.name}</a></li>
                {/each}
            </ul>
        </div>
        <small class="license">&copy; {currentYear} Timothy Foster, All Rights Reserved</small>
    </div>
</Container>

<style>
    .footer {
        padding: var(--sizing-spacing-xl) 0;
        text-align: center;
    }

    .socials {
        margin-bottom: var(--sizing-spacing-p);
        font-size: var(--sizing-font-md);
    }

    .socials ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    .socials ul li {
        display: inline-block;
        margin: 0 var(--sizing-spacing-sm);
    }

    .socials a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--skin-color-text-secondary);
        border: 0 solid var(--skin-color-bg-secondary);
        width: 2.25em;
        height: 2.25em;
        border-radius: 1.125em;
        transition: border-width var(--transition-quick);
    }

    .socials a:hover {
        border-width: var(--sizing-border-md);
    }

    .nav {
        font-size: var(--sizing-font-sm);
        margin-bottom: var(--sizing-spacing-p);
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0 calc(-1 * var(--sizing-spacing-md));
        text-align: center;
    }

    .nav ul li {
        display: inline-block;
        margin: 0 var(--sizing-spacing-md);
    }

    .nav a {
        color: var(--skin-color-text-secondary);
    }

    .license {
        font-size: 87.5%;
        font-weight: var(--typography-light);
    }
</style>
