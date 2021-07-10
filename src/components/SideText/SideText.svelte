<svelte:options tag="side-text" />

<script lang="ts">
    export let warning: (boolean | '') = false
    export let success: (boolean | '') = false
    export let danger: (boolean | '') = false
</script>

<small
  class:warning={warning || warning === ''}
  class:success={success || success === ''}
  class:danger={danger || danger === ''}
>
    <slot></slot>
</small>

<style>
    :host {
        display: block;
    }

    small {
        display: block;
        margin: 0;
        padding: 0.25em 0.5em 0.25em 1.5em;
        border-left: 0.375rem solid;
        font-style: italic;
        font-weight: normal;
        border-left-color: var(--skin-color-info);
        background: rgba(var(--skin-rgb-info), 0.06);
    }

    small.warning {
        border-left-color: var(--skin-color-warning);
        background: rgba(var(--skin-rgb-warning), 0.06);
    }

    small.success {
        border-left-color: var(--skin-color-success);
        background: rgba(var(--skin-rgb-success), 0.06);
    }

    small.danger {
        border-left-color: var(--skin-color-danger);
        background: rgba(var(--skin-rgb-danger), 0.06);
    }
</style>
