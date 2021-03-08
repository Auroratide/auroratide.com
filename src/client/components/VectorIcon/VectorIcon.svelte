<script lang="ts">
    import { library } from './library'

    export let icon: string

    let iconData: any = library[icon]
    let viewBox = '0 0 0 0'
    let path = ''

    $: {
        iconData = library[icon]
        if (iconData) {
            viewBox = `0 0 ${iconData.icon[0]} ${iconData.icon[1]}`
            path = iconData.icon[4]
        }
    }
</script>

<svg
  aria-hidden="true"
  focusable="false"
  role="img"
  data-icon={icon}
  xmlns="http://www.w3.org/2000/svg"
  class="vector-icon"
  viewBox={viewBox}
>
    <path fill="currentColor" d={path} />
</svg>

<style>
    :host, :global(vector-icon) {
        display: inline-block;
        height: 1em;
        line-height: 1;
    }

    .vector-icon {
        width: 1em;
        height: 1em;
        line-height: 1;
        overflow: visible;
        display: inline-block;
    }
</style>
