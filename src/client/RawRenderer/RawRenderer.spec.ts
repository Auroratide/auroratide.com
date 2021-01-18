import { RawRenderer } from '.'
import { component } from '@/testing/component'
import { screen } from '@testing-library/svelte'

describe('RawRenderer', () => {
    test('rendering', () => {
        component(RawRenderer)
            .prop('content', `
                <a href="/home">Hello</a>
            `).render()

        expect(screen.getByText('Hello')).toHaveAttribute('href', '/home')
    })

    test('syntax highlighting', () => {
        component(RawRenderer)
            .prop('content', `
                <pre>
                    <code class="language-js">
                        const x = 5;
                    </code>
                </pre>
            `).render()

        expect(screen.getByText('const')).toHaveClass('token', 'keyword')
    })
})
