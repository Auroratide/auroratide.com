<section class="experience">
    <h2>Experience</h2>
    <section class="position">
        <header>
            <h3>Auroratide Founder and Creator</h3>
            <p class="duration"><time datetime="2021-05">May 2021</time> - Present</p>
        </header>
        <section>
            <ul>
                <li>Achieved over 30,000 views through technical writing on topics including web accessibility and semantics, authoring and testing web components, specification-centered HTML/CSS development, and Kotlin concurrency.</li>
                <li>Built <a href="https://sifetti.com">sifetti.com</a>, a full-stack authenticated web application for efficiently organizing notes, currently integrating feedback received from by beta users.</li>
                <li>Composed three reusable web components with thousands of weekly downloads.</li>
            </ul>
        </section>
    </section>
    <hr />
    <section class="position">
        <header>
            <h3>ThoughtWorks</h3>
            <p class="role">Senior Consultant Developer</p>
            <p class="duration"><time>2016</time> - <time datetime="2021-04">Apr 2021</time></p>
        </header>
        <section>
            <h4>Healthcare Client - Query Language Co-Tech Lead</h4>
            <ul>
                <li>Shortened the development cycle of new features by 40 days after I led the team in designing a Kotlin Domain Specific Language which bridged communication gaps between the business and the developers.</li>
                <li>Processed billions of claims 90% faster than the existing system after I proposed a mechanism for reusing historical results with RabbitMQ at the core.</li>
                <li>Presented a live view into our data pipeline to the client CEO and CTO, built using Javascript and Express connected to our Kotlin REST API.</li>
            </ul>
            <h4>ThoughtWorks University - Trainer in China/India</h4>
            <ul>
                <li>Mentored 18 entry-level developers and career changers in the fundamentals of agile delivery, test-driven code, and industry software principles, enabling them to successfully deliver an e-commerce product to their client.</li>
                <li>Doubled the program's capacity for trainees after I visualized the overall curriculum with a chart that enabled the trainer team to identify redundancies and revise the program.</li>
                <li>Engaged a few dozen trainees in optional sessions about creativity and received feedback about the success of the techniques within their teams.</li>
            </ul>
            <h4>Home Mortgaging Client - Frontend Tech Anchor</h4>
            <ul>
                <li>Published the client's first online origination experience, integrating an isolated React app into the existing Ruby on Rails site to decouple their pipelines.</li>
                <li>Accelerated our deployment to production by four weeks after I introduced Pact contract testing and API stubbing to the team.</li>
                <li>Created codebase alignment through the presentation of several workshops ranging in topics from asynchronous state management with Redux Sagas, testing React component behavior with Enzyme, and functional testing with Testcafe.</li>
                <li>Established a model for working as a distributed US/India team, which became a standard across multiple teams on the client.</li>
            </ul>
            <h4>Food Distribution Client - API Developer</h4>
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
        display: flex;
        align-items: center;
    }

    hr {
        width: 25%;
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
        font-size: 1em;
        font-weight: bold;
        margin: 0;
    }

    .position h3 {
        font-size: 1.25em;
        font-weight: bold;
    }

    .position h4 {
        font-style: normal;
        font-size: 1em;
        font-weight: bold;
    }

    li {
        text-align: left;
    }

    @media print {
        .experience {
            padding: 1.5em;
        }

        li {
            margin-bottom: 0.15em;
        }
    }
</style>