<script lang="ts">
    import { IconName } from '@/client/components/VectorIcon/IconName'

    export let text: string = null
</script>

<div class="loading">
    <vector-icon class="icon" icon={IconName.HourglassHalf} />
    {#if text}
        <h2 class="text">{text}</h2>
    {/if}
</div>

<style>
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(359deg); }
    }

    @keyframes fade {
        0% { opacity: 0.25; }
        50% { opacity: 0.5; }
        100% { opacity: 0.25; }
    }

    .loading {
        text-align: center;
        padding: calc(2 * var(--sizing-spacing-xl)) 0;
        animation: fade 2048ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    .icon {
        font-size: 5em;
        margin-bottom: var(--sizing-spacing-sm);
        animation: spin 1280ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    .text {
        font-size: 2em;
        font-weight: var(--typography-light);
        font-style: italic;
    }
</style>
