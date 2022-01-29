<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import Content from '$lib/layout/Content.svelte'

    import Header from './_header.svelte'
    import Contact from './_contact.svelte'
    import Skills from './_skills.svelte'
    import Education from './_education.svelte'
    import Experience from './_experience.svelte'
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

    @media screen and (min-width: 75rem) {
        .resume {
            display: grid;
            grid-template-columns: 25fr 9fr;
            grid-template-rows: auto auto 1fr;
            grid-template-areas:
                "header contact"
                "experience skills"
                "experience education";
            gap: 2em;
        }
    }

    @media print {
        .resume {
            font-size: 12px;
            display: grid;
            grid-template-columns: 5fr 2fr;
            grid-template-rows: auto auto 1fr;
            grid-template-areas:
                "header contact"
                "experience skills"
                "experience education";
            gap: 2em;
        }
    }
</style>
