import App from './App.svelte'
import { register } from './components/register'

register()
const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
})

export default app
