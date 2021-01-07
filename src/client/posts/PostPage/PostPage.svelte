<script lang="ts">
    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'

    export let api: PostsApi = new FetchApi(fetch.bind(window))

    let promise = api.one('steganography')
</script>

{#await promise}
    <p>...waiting</p>
{:then value}
    {@html value.content}
{/await}
