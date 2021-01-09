<svelte:options tag="maslows-hierarchy-of-needs" />

<figure>
    <div class="layer self-actualization">
        <strong>Self-Actualization</strong>
        <p>Need for self-expression and meeting personal goals</p>
    </div>
    <div class="layer esteem">
        <strong>Esteem</strong>
        <p>Need for respect, recognition, and self worth</p>
    </div>
    <div class="layer belonging">
        <strong>Belonging</strong>
        <p>Need for friendship, family, and intimacy</p>
    </div>
    <div class="layer safety">
        <strong>Safety</strong>
        <p>Need for security, consistency, employment, and health</p>
    </div>
    <div class="layer physiological">
        <strong>Physiological</strong>
        <p>Need for food, water, air, and sleep</p>
    </div>
</figure>

<style>
    figure {
        margin: 0;
    }

    .layer {
        margin-bottom: 0.25em;
        padding: 0.25em 0.25em 0.5em calc(26% + 0.25em);
        color: #ffffff;
    }

    .layer strong {
        display: block;
        font-size: 1.5em;
        margin-bottom: 0.25em;
        font-weight: 700;
    }

    .layer p {
        margin: 0;
        text-align: left;
        line-height: 1;
    }

    .self-actualization {
        clip-path: polygon(26% 0, 100% 0, 100% 100%, 21% 100%);
        background-color: var(--maslow-color-selfactualization);
    }

    .esteem {
        clip-path: polygon(20.75% 0, 100% 0, 100% 100%, 15.75% 100%);
        background-color: var(--maslow-color-esteem);
    }

    .belonging {
        clip-path: polygon(15.5% 0, 100% 0, 100% 100%, 10.5% 100%);
        background-color: var(--maslow-color-belonging);
    }

    .safety {
        clip-path: polygon(10.25% 0, 100% 0, 100% 100%, 5.25% 100%);
        background-color: var(--maslow-color-safety);
    }

    .physiological {
        clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%);
        background-color: var(--maslow-color-physiological);
    }
</style>
