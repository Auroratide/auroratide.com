<script lang="ts">
    import Container from '../layout/Container.svelte'

    export let title: string
    export let subtitle: string
</script>

<Container>
    <div class="error">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div class="content content-typography">
            <slot></slot>
        </div>
    </div>
</Container>

<style>
    .error {
        text-align: center;
        padding: var(--sp-st-ge) var(--sp-st-s);
    }

    h1 {
        font-size: calc(3.5 * var(--font-sz-jupiter));
        text-shadow: var(--bd-fx-he) var(--bd-fx-he) 0 var(--palette-shade-033);
        opacity: 0.5;
        line-height: 1;
        margin-bottom: var(--sp-st-be);
    }

    h2 {
        font-size: var(--font-sz-saturn);
        font-weight: var(--typography-normal);
        opacity: 0.5;
        line-height: 1;
        margin-bottom: var(--sp-st-s);
    }

    .content {
        margin: 0 auto;
    }

    @media screen and (min-width: 75rem) {
        .content {
            padding: 0 calc(5 * var(--sp-st-ge));
        }
    }
</style>
