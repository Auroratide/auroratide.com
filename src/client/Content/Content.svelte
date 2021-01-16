<div class="content" class:has-sidebar={$$slots.sidebar}>
    <slot></slot>
    <slot name="sidebar"></slot>
</div>

<style>
    .content {
        background: var(--skin-color-content);
        padding: var(--sizing-spacing-md);
    }

    @media screen and (min-width: 75rem) {
        .content {
            padding: var(--sizing-spacing-xl);
        }

        .content.has-sidebar {
            display: grid;
            grid-template-columns: 3fr 1fr;
            padding: var(--sizing-spacing-xl) calc(var(--sizing-spacing-xl) - var(--sizing-spacing-sm));
        }

        .content.has-sidebar > * {
            padding: 0 var(--sizing-spacing-sm);
        }
    }
</style>
