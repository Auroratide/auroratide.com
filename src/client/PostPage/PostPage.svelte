<script lang="ts">
    const request = new Request('/api/posts/steganography.json')
    let promise = fetch(request)
        .then(res => res.json())
</script>

{#await promise}
    <p>...waiting</p>
{:then value}
    {@html value.content}
{/await}
