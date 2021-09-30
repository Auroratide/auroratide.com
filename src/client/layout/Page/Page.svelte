<header aria-label="Site Header">
    <slot name="header"></slot>
</header>
<main id="main" tabindex="-1" aria-label="Site Content">
    <slot></slot>
</main>
<footer aria-label="Site Footer">
    <slot name="footer"></slot>
</footer>

<style>
    header {
        background: var(--skin-banner);
        color: var(--skin-banner-text);
    }

    main {
        min-height: 10em;
    }

    footer {
        background: var(--skin-banner);
        color: var(--skin-banner-text);
    }
</style>
