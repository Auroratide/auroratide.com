<div class="horizontal-flex">
    <slot></slot>
</div>

<style>
    :host, :global(horizontal-flex) {
        display: block;
    }

    .horizontal-flex {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .horizontal-flex > :global(*) {
        margin: 0 0.5rem 1.5rem;
    }
</style>
