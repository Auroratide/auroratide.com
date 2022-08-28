<script lang="ts">
    import type { PageData } from './$types'
    import PostsList from './posts/+page.svelte'

    export let data: PageData
</script>

<PostsList {data} />
