<script lang="ts">
    import type { Post } from '../../types'
    import { UrlBuilder } from '@/client/routes'

    export let post: Post
</script>

<a class="related-post" style="--item-color: var(--palette-{post.color});" href={new UrlBuilder().post(post.id)}>
    <vector-icon icon={post.icon} />
    <span class="title">{post.title}</span>
</a>

<style>
    .related-post {
        position: relative;
        display: block;
        background: var(--palette-shade-067);
        color: var(--palette-greyscale-100);
        padding: var(--sizing-spacing-sm);
        overflow: hidden;
        margin-bottom: var(--sizing-spacing-md);
        transition: background var(--transition-quick);
        text-align: left;
        line-height: 1.5;
    }

    .related-post vector-icon {
        font-size: calc(1.5 * var(--sizing-font-xl));
        position: absolute;
        right: var(--sizing-spacing-xs);
        top: calc(-0.5 * var(--sizing-spacing-xs));
        color: var(--palette-shade-050);
        z-index: 1;
        transition: color var(--transition-quick);
    }

    .related-post .title {
        position: relative;
        z-index: 2;
    }

    .related-post:hover,
    .related-post:active {
        background: var(--item-color);
        text-decoration: none;
    }

    .related-post:hover vector-icon,
    .related-post:active vector-icon {
        color: var(--palette-shade-033);
    }
</style>
