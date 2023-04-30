<script lang="ts">
    import type { OpenGraph } from '../open-graph'

    export let title: string = ''
    export let description: string = ''
    export let og: OpenGraph | undefined = undefined

    let addedPart: string
    $: addedPart = title ? `${title} | ` : ''
</script>

<svelte:head>
    <title>{addedPart}Auroratide</title>
    {#if description}
        <meta name="description" content={description} />
    {/if}

    {#if og !== undefined}
        <meta property="og:title" content={og.title} />
        <meta property="og:image" content={og.image} />
        <meta property="og:url" content={og.url} />
        <meta property="og:type" content={og.type} />
        <meta property="og:site_name" content="Auroratide" />

        {#if description}
            <meta property="og:description" content={description} />
        {/if}

        {#if og.article !== undefined}
            {#if og.article.published != null}
                <meta property="og:article:published_time" content={og.article.published?.toISOString()} />
            {/if}
            <meta property="og:article:author" content={og.article.author} />
            <meta property="og:article:section" content={og.article.section} />
            {#each og.article.tags as tag}
                <meta property="og:article:tag" content={tag} />
            {/each}
        {/if}
    {/if}
</svelte:head>

<slot></slot>
