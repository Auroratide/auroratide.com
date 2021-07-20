import App from './App.svelte'
import { posts } from './pages/posts/store'
import { portfolio } from './pages/portfolio/store'
import { art } from './pages/art/store'

const app = new App({
    target: document.body,
    props: {
        posts,
        portfolio,
        art,
    }
})

export default app
