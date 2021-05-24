import App from './App.svelte'
import { posts } from './posts/store'
import { portfolio } from './portfolio/store'
import { art } from './art/store'

const app = new App({
    target: document.body,
    props: {
        posts,
        portfolio,
        art,
    }
})

export default app
