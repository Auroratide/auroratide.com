<script lang="ts">
    let {
        store,
        component,
        ...restProps
    } = $$props
</script>

<svelte:component this={component} resource={$store} {...restProps} />
