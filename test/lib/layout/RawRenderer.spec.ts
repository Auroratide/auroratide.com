import RawRenderer from '../../../src/lib/design/RawRenderer.svelte'
import TestContainer from './RawRenderer_Example.svelte'
import { component } from '../../testing/component'
import { screen, fireEvent } from '@testing-library/svelte'

describe('RawRenderer', () => {
    test('rendering', () => {
        component(RawRenderer)
            .prop('content', `
                <a href="/home">Hello</a>
            `).render()

        expect(screen.getByText('Hello')).toHaveAttribute('href', '/home')
    })

    test('syntax highlighting', async () => {
        component(TestContainer)
            .prop('contentA', `
                <pre>
                    <code class="language-js">
                        const x = 5;
                    </code>
                </pre>
            `)
            .prop('contentB', `
                <pre>
                    <code class="language-js">
                        let x = 5;
                    </code>
                </pre>
            `)
            .render()

        expect(screen.getByText('const')).toHaveClass('token', 'keyword')

        // This toggling is to ensure that when the same component is updated, the syntax highlighting occurs
        await fireEvent.click(screen.getByText('Toggle'))
        expect(screen.getByText('let')).toHaveClass('token', 'keyword')

        await fireEvent.click(screen.getByText('Toggle'))
        expect(screen.getByText('const')).toHaveClass('token', 'keyword')
    })
})
