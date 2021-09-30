import { DarkModeSwitch } from '.'
import { component } from '@/testing/component'
import { fireEvent, screen } from '@testing-library/svelte'

describe('DarkModeSwitch', () => {
    test('toggling', async () => {
        component(DarkModeSwitch).render()

        await fireEvent.click(screen.getByLabelText('Dark Mode'))
        expect(document.body.className).toContain('theme-dark')

        await fireEvent.click(screen.getByLabelText('Dark Mode'))
        expect(document.body.className).not.toContain('theme-dark')
    })
})
