<script lang="ts">
    import Container from '../layout/Container.svelte'
    import FocusOnMe from '../layout/FocusOnMe.svelte'

    export let title: string
    export let subtitle: string
</script>

<Container>
    <div class="error">
        <FocusOnMe>
            <h1>{title}</h1>
        </FocusOnMe>
        <h2>{subtitle}</h2>
        <div class="content content-typography">
            <slot></slot>
        </div>
    </div>
</Container>

<style>
    .error {
        text-align: center;
        padding: var(--sizing-spacing-xl) var(--sizing-spacing-md);
    }

    h1 {
        font-size: calc(3.5 * var(--sizing-font-xl));
        text-shadow: var(--sizing-border-sm) var(--sizing-border-sm) 0 var(--palette-shade-033);
        opacity: 0.5;
        line-height: 1;
        margin-bottom: var(--sizing-spacing-xs);
    }

    h2 {
        font-size: var(--sizing-font-lg);
        font-weight: var(--typography-normal);
        opacity: 0.5;
        line-height: 1;
        margin-bottom: var(--sizing-spacing-md);
    }

    .content {
        margin: 0 auto;
    }

    @media screen and (min-width: 75rem) {
        .content {
            padding: 0 calc(5 * var(--sizing-spacing-xl));
        }
    }
</style>
