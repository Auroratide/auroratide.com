<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { FocusOnMe } from '@/client/FocusOnMe'
</script>

<DocumentInfo title="Accessibility" description="Statement about this website's accessibility goals.">
    <Container>
        <Content>
            <FocusOnMe>
                <h1>Accessibility</h1>
            </FocusOnMe>
            <p>The Internet is for all people, not just some people. As such, it is both my aspiration and my duty to make this website and all my products as accessible to to everyone as possible, regardless of ability. Whether it be articles, videos, games, or whatever it is I even make, I want everyone to feel included.</p>
            <p>To that end, I devote time to studying and applying good accessibility practices. Some of the things I do include:</p>
            <ul>
                <li>Reading established guidelines and standards, and evaluating my content against them</li>
                <li>Testing every widget and article in a variety of conditions (for example, using a screen reader or foregoing a mouse)</li>
                <li>Providing at least two ways of accessing content (what I call the principle of engaging two senses)</li>
                <li>Only utilizing third-party components which themselves consider accessibility</li>
            </ul>
            <h2>Conformance</h2>
            <p>The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. My website is partially conformant with <strong>WCAG 2.1 Level AA</strong>, meaning some parts of the website may not fully conform to the standard.</p>
            <p>In particular, I know shortcomings come from older material from a time when, as a beginner, I was far less aware of the importance and techniques of accessibility. Additionally, the WCAG is a large and verbose standard, and as I am a single person I do what I can to meet as many of its principles as possible.</p>
            <h2>Feedback</h2>
            <p>I am very open to discourse about improving the accessibility of anything I do! If anything hinders you from reading my articles or using my things, please let me know.</p>
            <p><strong><a href="https://github.com/Auroratide/auroratide.com/issues/new?assignees=&labels=accessibility&template=accessibility-issue.md&title=">Create an issue on Github</a></strong>, and I will definitely look into it!</p>
        </Content>
    </Container>
</DocumentInfo>

<style>
    h1 {
        text-align: center;
    }
</style>
