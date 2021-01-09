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
    small {
        display: block;
        margin-left: 0;
        margin-bottom: var(--spacing-xl);
        padding: var(--spacing-sm) var(--spacing-md) var(--spacing-sm) var(--spacing-xl);
        border-left: var(--border-lg) solid;
        font-style: italic;
        font-weight: var(--typography-normal);
        border-left-color: var(--theme-primary);
    }

    small.warning {
        border-left-color: var(--theme-warning);
    }

    small.success {
        border-left-color: var(--theme-success);
    }

    small.danger {
        border-left-color: var(--theme-danger);
    }
</style>
