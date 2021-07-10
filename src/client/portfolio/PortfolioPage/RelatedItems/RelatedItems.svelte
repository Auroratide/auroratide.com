<script lang="ts">
    import { UrlBuilder } from '@/client/routes'
    import type { PortfolioItem } from '../../types'

    import * as color from '@/client/color'

    export let items: PortfolioItem[]
</script>

<ul class="related-items">
    {#each items as item}
        <li>
            <a class="item" style="--item-color: {color.fromJson(item.color)};" href={new UrlBuilder().portfolioItem(item.id)}>
                <vector-icon icon={item.icon} />
                <span class="title">{item.title}</span>
            </a>
        </li>
    {/each}
</ul>

<style>
    .related-items {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .related-items a {
        text-decoration: none;
    }

    .item {
        position: relative;
        display: block;
        background: var(--palette-shade-067);
        color: var(--palette-greyscale-100);
        padding: calc(0.75 * var(--sizing-spacing-sm)) var(--sizing-spacing-sm);
        overflow: hidden;
        margin-bottom: var(--sizing-spacing-md);
        transition: background var(--transition-quick);
        text-align: left;
        line-height: 1.5;
    }

    .item vector-icon {
        font-size: 4.5em;
        position: absolute;
        right: calc(0.25 * var(--sizing-spacing-sm));
        top: calc(-0.25 * var(--sizing-spacing-xs));
        color: var(--palette-shade-050);
        z-index: 1;
        transition: color var(--transition-quick);
    }

    .item .title {
        position: relative;
        font-size: var(--sizing-font-xs);
        font-weight: var(--typography-normal);
        z-index: 2;
    }

    .item:hover,
    .item:active {
        background: var(--item-color);
        text-decoration: none;
    }

    .item:hover vector-icon,
    .item:active vector-icon {
        color: var(--palette-shade-033);
    }
</style>
