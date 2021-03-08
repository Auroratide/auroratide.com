<script lang="ts">
    export let text: string
</script>

<p class="major-point"><em>{text}</em></p>

<style>
    :host, :global(major-point) {
        display: block;
        margin-bottom: 1.5em;
    }

    .major-point {
        font-size: 1.5em;
        text-align: center;
        padding: 1em 1.5em;
        font-weight: 300;
        margin: 0;
        line-height: 1.5;
    }

    .major-point em {
        font-style: normal;
    }
</style>
