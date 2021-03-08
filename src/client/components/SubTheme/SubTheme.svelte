<script lang="ts">
    export let info: (boolean | '') = false
    export let warning: (boolean | '') = false
    export let success: (boolean | '') = false
    export let danger: (boolean | '') = false
</script>

<div
    class:info={info || info === ''}
    class:warning={warning || warning === ''}
    class:success={success || success === ''}
    class:danger={danger || danger === ''}
>
    <slot></slot>
</div>
