<section class="education">
    <h2>Education</h2>
    <div class="contents">
        <p class="degree"><strong>B.S. Computer Science</strong></p>
        <p class="time"><time>2012</time> - <time>2016</time></p>
        <p class="college">Texas A&M University, USA</p>
        <p class="minor"><small>Creative Studies Minor</small></p>
    </div>
</section>

<style>
    .education {
        grid-area: education;
    }

    .education p {
        line-height: 1.25;
        margin: 0;
    }

    .contents {
        display: grid;
        grid-template-areas:
            "degree time"
            "college college"
            "minor minor";
    }

    .degree {
        grid-area: degree;
    }

    .time {
        grid-area: time;
        font-weight: bold;
        font-size: 0.9em;
        align-self: center;
    }

    .college {
        grid-area: college;
    }

    .minor {
        grid-area: minor;
    }

    small {
        font-size: 0.8em;
        font-style: italic;
    }
</style>