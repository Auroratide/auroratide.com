<svelte:options tag="horizontal-flex" />

<div class="horizontal-flex">
    <slot></slot>
</div>

<style>
    :host {
        display: block;
    }

    .horizontal-flex {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .horizontal-flex > ::slotted(*) {
        margin: 0 0.5rem 1.5rem;
    }
</style>
