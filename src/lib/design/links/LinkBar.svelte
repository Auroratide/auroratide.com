<script lang="ts">
    import * as color from '../color'
    import type { Link } from './types'

    export let links: Link[]
</script>

<aside aria-label="Related Article Links" class="link-bar">
    {#each links as link}
        <a class="as-button" href={link.href} style={link.color ? `--btn-color: ${color.fromJson(link.color)};` : ''}>
            <span>{link.title}</span>
            {#if link.icon}
                <vector-icon icon={link.icon}></vector-icon>
            {/if}
        </a>
    {/each}
</aside>

<style>
    .link-bar {
        position: absolute;
        top: var(--header-height);
        left: 0;
        right: 0;
        text-align: center;
    }

    .link-bar a {
        position: relative;
        margin: 0 var(--sp-st-o);
        font-size: calc(1.125 * var(--font-sz-earth));
        top: -0.75em;
    }

    .link-bar a vector-icon {
        margin-left: var(--sp-st-be);
    }

    .link-bar a.as-button::before {
        border: var(--bd-fx-he) solid var(--skin-content);
    }
</style>
