<script lang="ts">
    import type { SvelteComponent } from 'svelte'
    import type { SvelteStore, ResourceItem } from '@/client/resources'

    export let store: SvelteStore<ResourceItem>
    export let component: typeof SvelteComponent

    let otherProps: object = {}

    $: {
        let {
            store : removeStore,
            component : removeComponent,
            ...restProps
        } = $$props

        otherProps = restProps
    }
</script>

<svelte:component this={component} resource={$store} {...otherProps} />
