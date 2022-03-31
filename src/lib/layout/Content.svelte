<div class="content" class:has-sidebar={$$slots.sidebar}>
    <div class="content-typography">
        <slot></slot>
    </div>
    <slot name="sidebar"></slot>
    <slot name="after"></slot>
</div>

<style>
    .content {
        background: var(--skin-content);
        padding: var(--sp-st-s);
    }

    @media screen and (min-width: 75rem) {
        .content {
            padding: var(--sp-st-ge);
        }

        .content.has-sidebar {
            display: grid;
            grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
            padding: var(--sp-st-ge) calc(var(--sp-st-ge) - var(--sp-st-o));
        }

        .content.has-sidebar > :global(*) {
            padding: 0 var(--sp-st-o);
        }
    }
</style>
