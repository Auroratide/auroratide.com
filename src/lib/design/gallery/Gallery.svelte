<script lang="ts">
    import type { AssetUrlBuilder } from '../../routes'
    import type { GalleryItem } from './types'

    export let root: AssetUrlBuilder
    export let gallery: GalleryItem[]    
</script>

<ul class="gallery">
    {#each gallery as item}
        <li>
            <figure>
                <img-popout>
                    <img src={root.asset(item.image)} alt={item.alt} />
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
        margin: 0 calc(-1 * var(--sp-st-o));
    }

    .gallery li {
        margin: 0 var(--sp-st-o);
    }

    figure {
        margin: 0 0 var(--sp-paragraph);
    }

    figcaption {
        font-size: var(--font-sz-earth);
        text-align: center;
        opacity: 0.75;
        line-height: 1.25;
    }
</style>
