<script lang="ts">
    const skip = () => {
        document.getElementById('main').focus()
    }
</script>

<a class="skip-link as-button" href="#main" on:click={skip}>Skip to Content</a>

<style>
    .skip-link {
        text-align: center;
        position: absolute;
        left: -9999px;
        font-size: var(--font-sz-uranus);
    }

    .skip-link:focus {
        position: fixed;
        top: var(--sp-st-s);
        left: var(--sp-st-s);
        z-index: 999;
    }

    .skip-link:focus::after {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--palette-shade-033);
        z-index: -2;
    }
</style>
