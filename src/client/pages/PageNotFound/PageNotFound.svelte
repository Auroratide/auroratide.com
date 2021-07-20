<script lang="ts">
    import { Error } from '@/client/Error'
    import { UrlBuilder } from '@/client/routes'
</script>

<Error title="Uh oh!" subtitle="Seems like there's nothing here.">
    <p>The page you&apos;re looking for is not available. Try using the top navigation bar to find cool, awesome content! Or, click the button below to go back to the home page.</p>
    <a class="as-button" href={new UrlBuilder().home()}>Home</a>
</Error>
