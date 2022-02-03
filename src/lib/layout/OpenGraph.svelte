<script lang="ts">
    export let title: string
    export let image: string = 'favicon/0512.png'
    export let url: string

    export let article: {
        published: Date,
        author: string,
        section: string,
        tags: string[],
    } = undefined

    $: type = article !== undefined ? 'article' : 'website'
</script>

<svelte:head>
    <meta property="og:title" content={title} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />

    {#if article !== undefined}
        <meta property="og:article:published_time" content={article.published.toISOString()} />
        <meta property="og:article:author" content={article.author} />
        <meta property="og:article:section" content={article.section} />
        {#each article.tags as tag}
            <meta property="og:article:tag" content={tag} />
        {/each}
    {/if}
</svelte:head>

<slot></slot>
