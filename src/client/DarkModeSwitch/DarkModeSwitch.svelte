<script lang="ts">
    let isDark = false
    $: icon = isDark ? 'moon' : 'sun'

    const toggle = () => {
        isDark = !isDark
        document.body.classList.toggle('theme-dark', isDark)
    }
</script>

<button role="switch" aria-label="Dark Mode" aria-checked="{isDark}" on:click={toggle}>
    <vector-icon icon="{icon}"></vector-icon>
</button>

<style>
    button {
        background: none;
        padding: var(--sizing-spacing-sm);
        border-radius: 0;
    }

    button::before {
        display: none;
    }
</style>
