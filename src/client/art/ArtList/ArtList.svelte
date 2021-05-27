<script lang="ts">
    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'
    import { CatastrophicError } from '@/client/CatastrophicError'
    import type { Resource, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'
    import type { ArtItem } from '../types'
    import { UrlBuilder } from '@/client/routes'

    import * as color from '@/client/color'

    export let resource: Resource<ArtItem>

    let items: Maybe<ArtItem[]> = Pending
    $: items = resource.list()
</script>

<DocumentInfo title="Art" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        {#if items === Pending}
            <Loading text="Fetching posts..." large />
        {:else if items === Missing}
            <CatastrophicError />
        {:else}
            <ul class="item-list">
                {#each items.filter(it => it.publishedAt) as item}
                    <li>
                        <a aria-label={item.title} class="item" href={new UrlBuilder().artItem(item.id)} style="--article-color: {color.fromJson(item.color)}; --bg-color: {color.fromJson(item.background)};">
                            <article class="item">
                                <img src={new UrlBuilder().assets().artItem(item.id).asset(item.image.original)} alt={item.title} />
                            </article>
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
    </Container>
</DocumentInfo>

<style>
    .item-list {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: var(--sizing-spacing-md);
        padding: var(--sizing-spacing-md);
    }

    .item-list > li {
        display: grid;
        overflow: hidden;
        position: relative;
        margin: 0;
    }

    .item-list > li::before {
        content: '';
        padding-bottom: 100%;
    }

    .item {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--bg-color);
    }

    .item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>