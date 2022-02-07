<script lang="ts">
    import { socials } from '$lib/routes'
</script>

<address>
    <ul>
        <li><strong>Email:</strong> <a href="mailto:tf.auroratide@gmail.com">tf.auroratide@gmail.com</a></li>
        <li><strong>Github:</strong> <a href={socials.Github.link}>github.com/Auroratide</a></li>
        <li><strong>LinkedIn:</strong> <a href={socials.LinkedIn.link}>timothy-foster-224946120</a></li>
        <li><strong>Portfolio:</strong> <a href="https://auroratide.com/portfolio">auroratide.com/portfolio</a></li>
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
</style>