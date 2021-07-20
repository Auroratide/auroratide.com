<header aria-label="Site Header">
    <slot name="header"></slot>
</header>
<main aria-label="Site Content">
    <slot></slot>
</main>
<footer aria-label="Site Footer">
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
