<header>
    <slot name="header"></slot>
</header>
<main>
    <slot></slot>
</main>
<footer>
    <slot name="footer"></slot>
</footer>

<style>
    header {
        background: var(--skin-color-bg-secondary);
        color: var(--skin-color-text-secondary);
    }

    main {
        min-height: 10em;
    }

    footer {
        background: var(--skin-color-bg-secondary);
        color: var(--skin-color-text-secondary);
    }
</style>
