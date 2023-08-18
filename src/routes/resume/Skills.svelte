<section class="skills">
    <h2>Skills</h2>
    <ul class="categories">
        <li>
            <strong>Languages:</strong>
            <ul>
                <li>Typescript, Javascript</li>
                <li>HTML, CSS, SCSS</li>
                <li>Kotlin, Java, C#</li>
                <li>SQL</li>
            </ul>
        </li>
        <li>
            <strong>Technologies:</strong>
            <ul>
                <li>React, Svelte</li>
                <li>NodeJS, Express</li>
                <li>AWS, Docker</li>
                <li>Jest, Playwright, JUnit</li>
                <li>Spring, Ktor, RabbitMQ</li>
                <li>Git</li>
                <li>Postgres, MongoDB</li>
                <li>Web Components</li>
            </ul>
        </li>
        <li>
            <strong>Practices:</strong>
            <ul>
                <li>Web Accessibility</li>
                <li>REST API Design</li>
                <li>Automated Testing</li>
                <li>CI/CD Pipelines</li>
                <li>Agile Delivery</li>
            </ul>
        </li>
    </ul>
</section>

<style>
    .skills {
        grid-area: skills;
    }

    .categories {
        list-style: none;
        padding: 0;
    }

    .categories ul {
        list-style: none;
        margin-bottom: 1em;
        padding-left: 1em;
    }

    .categories li {
        line-height: 1;
        margin-bottom: 0.15em;
    }

    .categories ul li::before {
        content: '-';
        margin-right: 0.5em;
    }

    @media print {
        .skills {
            background: var(--skin-bg);
            padding: 1.5em;
        }
    }
</style>
