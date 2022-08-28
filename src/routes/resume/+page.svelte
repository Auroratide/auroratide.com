<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import Content from '$lib/layout/Content.svelte'

    import Header from './Header.svelte'
    import Contact from './Contact.svelte'
    import Skills from './Skills.svelte'
    import Education from './Education.svelte'
    import Experience from './Experience.svelte'
    import FunFacts from './FunFacts.svelte'
</script>

<DocumentInfo title="Timothy Foster Resume" description="Timothy Foster's resume and qualifications.">
    <Container>
        <Content>
            <article class="resume">
                <Header />
                <Contact />
                <Experience />
                <Skills />
                <Education />
                <FunFacts />
                <div class="blank"></div>
            </article>
        </Content>
    </Container>
</DocumentInfo>

<style>
    .resume :global(h2) {
        background: var(--skin-bg);
        line-height: 1;
        margin: 0 -0.25em 0.5em;
        padding: 0.25em;
    }

    .blank {
        grid-area: blank;
        display: none;
    }

    @media screen and (min-width: 75rem) {
        .resume {
            display: grid;
            grid-template-columns: 25fr 9fr;
            grid-template-rows: auto auto auto 1fr;
            grid-template-areas:
                "header contact"
                "experience skills"
                "experience education"
                "experience fun-facts";
            gap: 2em;
        }
    }

    @media print {
        .resume {
            height: 101.15vh;
            font-size: 13px;
            margin: calc(var(--sp-st-cr) * -1);
            display: grid;
            grid-template-columns: 2fr 5fr;
            grid-template-rows: auto auto auto auto auto 1fr;
            grid-template-areas:
                "header experience"
                "contact experience"
                "skills experience"
                "education experience"
                "fun-facts experience"
                "blank experience";
        }

        .blank {
            display: block;
            background-color: var(--skin-bg);
        }

        .resume :global(h2) {
            background: none;
            margin: 0 0 0.5em 0;
            font-size: 1.75em;
            text-transform: uppercase;
            padding: 0;
        }
    }
</style>
