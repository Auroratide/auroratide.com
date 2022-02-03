<div class="small"><slot name="small"></slot></div>
<div class="large"><slot name="large"></slot></div>

<style>
    .large {
        display: none;
    }

    @media screen and (min-width: 75rem) {
        .small {
            display: none;
        }

        .large {
            display: block;
        }
    }
</style>
