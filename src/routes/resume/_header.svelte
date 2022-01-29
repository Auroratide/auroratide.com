<script lang="ts">
    import FocusOnMe from '$lib/layout/FocusOnMe.svelte'
</script>

<header>
    <FocusOnMe><h1>Timothy Foster</h1></FocusOnMe>
    <strong class="role">Full-Stack Software Engineer</strong>
</header>

<style>
    header {
        grid-area: header;
    }

    .role {
        font-size: 1.25em;
        font-weight: normal;
    }

    h1 {
        line-height: 1;
        font-weight: bold;
        font-size: 3em;
        margin-bottom: 0.125em;
    }
</style>