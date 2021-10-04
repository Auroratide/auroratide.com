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
        font-weight: normal;
        border-left-color: var(--skin-info-banner);
        background: var(--skin-info-overlay);
    }

    small.warning {
        border-left-color: var(--skin-warning-banner);
        background: var(--skin-warning-overlay);
    }

    small.success {
        border-left-color: var(--skin-success-banner);
        background: var(--skin-success-overlay);
    }

    small.danger {
        border-left-color: var(--skin-danger-banner);
        background: var(--skin-danger-overlay);
    }
</style>
