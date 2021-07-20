<script lang="ts">
    import { disqus } from '@/client/embed/disqus'
    import { UrlBuilder } from '@/client/routes'

    export let id: string
</script>

<h2>Comments</h2>
<div use:disqus={{
    url: new UrlBuilder().withBase().portfolioItem(id),
    id: id,
}}></div>
