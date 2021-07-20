<script lang="ts">
    import type { Link } from './types'
    import * as color from '@/client/color'

    export let links: Link[]
</script>

<aside class="link-bar">
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
        top: calc(var(--header-height) - 0.75em);
        left: 0;
        right: 0;
        text-align: center;
    }

    .link-bar a {
        margin: 0 var(--sizing-spacing-sm);
    }

    .link-bar a vector-icon {
        margin-left: var(--sizing-spacing-xs);
    }

    .link-bar a.as-button::before {
        border: var(--sizing-border-sm) solid var(--skin-color-content);
    }
</style>
