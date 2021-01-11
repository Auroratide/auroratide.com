<header>
    <slot name="header"></slot>
</header>
<main>
    <slot></slot>
</main>
<footer>
    Footer
</footer>

<style>
    header {
        background: #001533;
        color: #ffffff;
        height: 5.25em;
    }

    main {
        min-height: 10em;
    }

    footer {
        background: #001533;
        color: #ffffff;
        height: 5.25em;
        display: flex;
        align-items: center;
    }
</style>
