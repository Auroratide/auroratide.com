<script lang="ts">
    import Page from '$lib/layout/Page.svelte'
    import Navigation from '$lib/layout/Navigation.svelte'
    import Footer from '$lib/layout/Footer.svelte'
</script>

<Page>
    <div slot="header"><Navigation /></div>
    <slot></slot>
    <div slot="footer"><Footer /></div>
</Page>
