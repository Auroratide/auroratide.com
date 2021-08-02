<div class="content" class:has-sidebar={$$slots.sidebar}>
    <div class="content-typography">
        <slot></slot>
    </div>
    <slot name="sidebar"></slot>
    <slot name="after"></slot>
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
            grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
            padding: var(--sizing-spacing-xl) calc(var(--sizing-spacing-xl) - var(--sizing-spacing-sm));
        }

        .content.has-sidebar > :global(*) {
            padding: 0 var(--sizing-spacing-sm);
        }
    }
</style>
