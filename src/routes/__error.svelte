<script lang="ts" context="module">
    import type { ErrorLoad } from '@sveltejs/kit'

    export const load: ErrorLoad = async ({ status }) => {
        if (status === 404) {
            return {
                props: {
                    title: 'Seems like there\'s nothing here.',
                    message: 'The page you\'re looking for is not available. Try using the top navigation bar to find cool, awesome content! Or, click the button below to go back to the home page.',
                },
            }
        } else {
            return {
                props: {
                    title: 'Something went horribly wrong.',
                    message: 'I recommend you try refreshing the page. If that doesn\'t fix it, I dunno, guess I need to fix something!',
                },
            }
        }
    }
</script>

<script lang="ts">
    import Error from '$lib/design/Error.svelte'
    import { UrlBuilder } from '$lib/routes'

    export let title: string
    export let message: string
</script>

<Error title="Uh oh!" subtitle={title}>
    <p>{message}</p>
    <a class="as-button" href={new UrlBuilder().home()}>Home</a>
</Error>
