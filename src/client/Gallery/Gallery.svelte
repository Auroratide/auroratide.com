<script lang="ts">
    import type { AssetUrlBuilder } from '@/client/routes'
    import type { GalleryItem } from './types'

    export let root: AssetUrlBuilder
    export let gallery: GalleryItem[]    
</script>

<ul class="gallery">
    {#each gallery as item}
        <li>
            <figure>
                <img-popout>
                    <img src={root.asset(item.image)} alt={item.caption} />
                </img-popout>
                <figcaption>{item.caption}</figcaption>
            </figure>
        </li>
    {/each}
</ul>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        list-style: none;
        padding: 0;
        margin: 0 calc(-1 * var(--sizing-spacing-sm));
    }

    .gallery li {
        margin: 0 var(--sizing-spacing-sm);
    }

    figure {
        margin: 0 0 var(--sizing-spacing-p);
    }

    figcaption {
        font-size: var(--sizing-font-xs);
        text-align: center;
        opacity: 0.75;
        line-height: 1.25;
    }
</style>
