import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
    const content = await fetch('/api/sandbox/index.json')
        .then(res => res.json())
        .then(json => json.content)
    
    return {
        content,
    }
}
