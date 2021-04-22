import { prettyDOM } from '@testing-library/svelte'

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeShowing(): CustomMatcherResult
        }
    }
}

expect.extend({
    toBeShowing(received: HTMLElement): jest.CustomMatcherResult {
        let opacity: number = parseInt(received.style.opacity)
        if (isNaN(opacity)) {
            opacity = 1
        }

        if (opacity === 1) {
            return {
                pass: true,
                message: () => `Expected ${prettyDOM(received)} not to be showing`
            }
        } else {
            return {
                pass: false,
                message: () => `Expected ${prettyDOM(received)} to be showing`
            }
        }
    }
})