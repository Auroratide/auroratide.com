<section class="experience">
    <h2>Experience</h2>
    <section class="position">
        <header>
            <h3>Auroratide</h3>
            <p class="role">Founder, Technical Author</p>
            <p class="duration"><time datetime="2021-05">May 2021</time> - Present</p>
        </header>
        <section>
            <ul>
                <li>Achieved over 30,000 views through technical writing on topics including web accessibility, web components, and frontend best practices.</li>
                <li>Built <a href="https://sifetti.com">sifetti.com</a>, a full-stack authenticated web application for efficiently organizing notes, currently integrating feedback received from by beta users.</li>
                <li>Composed three reusable web components with thousands of weekly downloads.</li>
                <li>Discovered, tested, and fixed a bug in the open source SvelteKit web framework.</li>
            </ul>
        </section>
    </section>
    <hr />
    <section class="position">
        <header>
            <h3>ThoughtWorks</h3>
            <p class="role">Senior Consultant Developer</p>
            <p class="duration"><time datetime="2016-08">Aug 2016</time> - <time datetime="2021-04">Apr 2021</time></p>
        </header>
        <section>
            <h4>Co-Tech Lead - Healthcare Client</h4>
            <ul>
                <li>Revamped the client's data pipeline by introducing a horizontally scalable message queue for processing of claims in parallel, making the system 90% faster.</li>
                <li>Led the design of a Domain Specific Language to bridge communication between the business and developers, shortening the development lifecycle by 40 days.</li>
                <li>Proposed and implemented an architecture that reduced the number of claims our queue needed to process from billions to millions. </li>
                <li>Presented a live view into our data pipeline to the client CEO and CTO, built using Javascript and Express connected to our Kotlin REST API.</li>
            </ul>
            <h4>Trainer in China/India - ThoughtWorks University</h4>
            <ul>
                <li>Mentored 18 entry-level developers and career changers in the fundamentals of agile delivery, test-driven code, and industry software principles.</li>
                <li>Created a visualization of the curriculum which doubled the program's capacity for trainees, enabling the trainer team to identify redundancies.</li>
                <li>Engaged a few dozen trainees in optional sessions about creativity and received feedback about the success of the techniques within their teams.</li>
            </ul>
            <h4>Frontend Tech Anchor - Home Mortgaging Client</h4>
            <ul>
                <li>Published the client's first online origination experience, integrating an isolated React app into the existing Ruby on Rails site to decouple their pipelines.</li>
                <li>Accelerated our deployment to production by four weeks after I introduced Pact contract testing and API stubbing to the team.</li>
                <li>Created codebase alignment through workshops about state management with Redux Sagas, testing React with Enzyme, and functional testing with Testcafe.</li>
                <li>Established a model for working as a distributed US/India team, which became a standard across multiple teams on the client.</li>
            </ul>
            <h4>API Developer - Food Distribution Client</h4>
            <ul>
                <li>Enabled the use of state-of-the-art features by upgrading our Postgres database after I proposed a migration strategy to ensure data integrity.</li>
                <li>Created consistency in the error handling of our inventory REST API after I built an aspect-oriented validation framework in Groovy.</li>
            </ul>
        </section>
    </section>
</section>

<style>
    .experience {
        grid-area: experience;
    }

    .position header {
        margin-bottom: 0.5em;
    }

    hr {
        width: 25%;
    }

    .position .role {
        margin: 0;
    }

    .position .duration {
        font-size: 1em;
        font-weight: bold;
        margin: 0;
    }

    .position h3 {
        font-size: 1.25em;
        font-weight: bold;
        margin: 0;
        line-height: 1;
    }

    .position h4 {
        font-style: normal;
        font-size: 1em;
        font-weight: bold;
    }

    li {
        text-align: left;
    }

    @media screen and (min-width: 75rem), print {
        .position header {
            display: flex;
            align-items: center;
        }

        .position .role {
            margin: 0;
        }

        .position .role::before {
            content: '—';
            margin: 0 0.25em;
        }

        .position .duration {
            flex: 1;
            text-align: right;
        }
    }

    @media print {
        .experience {
            padding: 1.5em;
        }

        li {
            margin-bottom: 0.25em;
        }
    }
</style>