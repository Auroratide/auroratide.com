<script lang="ts">
    import { onMount } from 'svelte'
    import { isDark } from '../stash/theme'
    import { quadInOut } from 'svelte/easing'

    onMount(() => {
        document.body.classList.toggle('theme-dark', $isDark)
    })

    const toggle = () => {
        $isDark = !$isDark
        document.body.classList.toggle('theme-dark', $isDark)
    }

    const spinFade = (node: HTMLElement, params: any) => ({
        delay: 0,
        duration: 256,
        easing: quadInOut,
        css: (t: number) => `
            opacity: ${t};
            transform: rotate(${360 * t}deg);
        `,
    })
</script>

<button role="switch" aria-label="Dark Mode" aria-checked="{$isDark}" on:click={toggle}>
    {#if $isDark}
        <vector-icon class="dark" icon="moon" transition:spinFade></vector-icon>
    {:else}
        <vector-icon class="light" icon="sun" transition:spinFade></vector-icon>
    {/if}
</button>

<style>
    button {
        background: none;
        padding: var(--sizing-spacing-sm);
        border-radius: 0;
        display: inline-grid;
        grid-template-columns: 1fr;
    }

    button::before {
        display: none;
    }

    vector-icon {
        transition: color var(--transition-quick);
        grid-area: 1 / 1;
    }

    button:hover .light, button:focus .light {
        color: var(--palette-livian-yellow);
    }

    button:hover .dark, button:focus .dark {
        color: var(--palette-winter-grey);
    }
</style>
