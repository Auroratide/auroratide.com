<svelte:options tag="major-point" />

<strong class="major-point">
    <slot></slot>
</strong>

<style>
    :host {
        display: block;
        font-size: 1.5em;
        text-align: center;
        padding: 1em 1.5em;
        font-weight: 300;
        margin: 0;
        line-height: 1.5;
    }

    .major-point {
        display: block;
        font-weight: normal;
    }

    .major-point ::slotted(p) {
        text-align: center;
    }
</style>
