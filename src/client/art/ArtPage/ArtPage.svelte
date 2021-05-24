<script lang="ts">
    import { Error } from '@/client/Error'
    import { UrlBuilder } from '@/client/routes'
</script>

<Error title="Uh oh!" subtitle="This part of the site is not done yet.">
    <p>I&apos;m still kinda working on getting the art section of the site up and running. Try using the top navigation bar to find cool, awesome content! Or, click the button below to go back to the home page.</p>
    <a class="as-button" href={new UrlBuilder().home()}>Home</a>
</Error>
