import App from './App.svelte'
import { posts } from './posts/store'
import { register } from './components/register'

register()
const app = new App({
    target: document.body,
    props: {
        posts
    }
})

export default app
