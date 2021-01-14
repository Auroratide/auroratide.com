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
    :host, :global(side-text) {
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
    }

    small.warning {
        border-left-color: var(--skin-color-warning);
    }

    small.success {
        border-left-color: var(--skin-color-success);
    }

    small.danger {
        border-left-color: var(--skin-color-danger);
    }
</style>
