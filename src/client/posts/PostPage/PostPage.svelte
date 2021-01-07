<script lang="ts">
    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'

    export let api: PostsApi = new FetchApi(fetch.bind(window))
    export let id: string

    let promise = api.one(id)
</script>

{#await promise}
    <p>...waiting</p>
{:then value}
    <h1>{value.title}</h1>
    {@html value.content}
{/await}
