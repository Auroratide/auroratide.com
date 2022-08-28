<script lang="ts">
    import { socials } from '$lib/routes'
</script>

<address>
    <ul>
        <li><vector-icon icon="envelope" aria-label="Email"></vector-icon> <a href="mailto:tf.auroratide@gmail.com">tf.auroratide@gmail.com</a></li>
        <li><vector-icon icon="github" aria-label="Github"></vector-icon> <a href={socials.Github.link}>github.com/Auroratide</a></li>
        <li><vector-icon icon="linked-in" aria-label="LinkedIn"></vector-icon> <a href={socials.LinkedIn.link}>timothy-foster-224946120</a></li>
        <li><vector-icon icon="hammer" aria-label="Portfolio"></vector-icon> <a href="https://auroratide.com">auroratide.com</a></li>
    </ul>
</address>

<style>
    address {
        grid-area: contact;
        font-style: normal;
        font-size: 0.9em;
        margin-bottom: 0.5em;
    }

    address ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    address ul li {
        line-height: 1.15;
        margin: 0;
    }

    address vector-icon {
        vertical-align: middle;
        margin-right: 0.25em;
        font-size: 0.95em;
    }

    @media print {
        address {
            background: var(--skin-banner);
            color: var(--skin-banner-text);
            margin: 0;
            padding: 0 1.5em 1.5em;
        }

        a {
            color: var(--skin-banner-text);
        }
    }
</style>