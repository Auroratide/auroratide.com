<script lang="ts">
    import { UrlBuilder } from '@/client/routes'
    import type { GalleryItem } from '../../types'

    export let id: string
    export let gallery: GalleryItem[]
</script>

<ul class="gallery">
    {#each gallery as item}
        <li>
            <figure>
                <img src={new UrlBuilder().assets().post(id).asset(item.image)} alt={item.caption} />
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

    img {
        display: block;
        max-width: 100%;
        max-height: 15em;
        margin-bottom: var(--sizing-spacing-sm);
    }
</style>
