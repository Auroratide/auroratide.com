import App from './App.svelte'
import { render } from '@testing-library/svelte'

describe('App', () => {
    test.skip('rendering', () => {
        expect(() => render(App)).not.toThrow()
    })
})
