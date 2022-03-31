<script lang="ts">
    export let title: string
    export let icon: string
</script>

<header>
    <vector-icon icon={icon} />
    <h1>{title}</h1>
</header>

<style>
    header {
        position: relative;
        height: var(--header-height);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background: var(--article-color);
        overflow: hidden;
    }

    h1 {
        position: relative;
        width: 100%;
        padding: var(--sp-st-s);
        color: var(--palette-greyscale-100);
        text-align: center;
        background: var(--palette-shade-033);
        margin: 0;
        line-height: 1;
    }
    
    vector-icon {
        position: absolute;
        color: var(--palette-shade-033);
        font-size: 24em;
        align-self: center;
        height: 1em;
    }
</style>
