<script lang="ts">
    import { Container } from '@/client/Container'
    import { IconName } from '@/components/VectorIcon/IconName'
</script>

<Container>
    <div class="top-bar">
        <div class="logo">Logo</div>
        <div class="title"><h1>Auroratide</h1></div>
        <div class="subtitle">Coder and Teacher</div>
        <div class="socials">
            <ul>
                <li><a href="https://www.linkedin.com/in/timothy-foster-224946120">
                    <vector-icon icon={IconName.LinkedIn}></vector-icon>
                </a></li>
                <li><a href="https://github.com/Auroratide">
                    <vector-icon icon={IconName.GithubAlt}></vector-icon>
                </a></li>
                <li><a href="https://stackoverflow.com/users/6163066/auroratide">
                    <vector-icon icon={IconName.StackOverflow}></vector-icon>
                </a></li>
            </ul>
        </div>
        <nav class="nav">
            <ul>
                <li><a href="/posts">Posts</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </div>
</Container>

<style>
    .top-bar {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "logo title socials"
            "logo subtitle nav";
    }

    .logo {
        grid-area: logo;
    }

    .title {
        grid-area: title;
    }

    .title h1 {
        font-size: var(--sizing-font-md);
    }

    .subtitle {
        grid-area: subtitle;
        font-size: var(--sizing-font-sm);
    }

    .socials {
        grid-area: socials;
    }

    .socials ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: right;
    }

    .socials ul li {
        display: inline-block;
    }

    .socials a {
        color: var(--skin-color-text-secondary);
    }

    .nav {
        grid-area: nav;
        font-size: var(--sizing-font-sm);
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0 calc(-1 * var(--sizing-spacing-md));
        text-align: right;
    }

    .nav ul li {
        display: inline-block;
        margin: 0 var(--sizing-spacing-md);
    }

    .nav a {
        color: var(--skin-color-text-secondary);
    }
</style>
