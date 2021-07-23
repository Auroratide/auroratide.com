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
    }

    .skip-link:focus {
        top: 0;
        left: 0;
    }
</style>
