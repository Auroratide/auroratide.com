import App from './App.svelte'
import { render } from '@testing-library/svelte'

describe('App', () => {
    test('rendering', () => {
        expect(() => render(App, {
            props: {
                name: 'world'
            }
        })).not.toThrow()
    })
})
