import { DarkModeSwitch } from '.'
import { component } from '@/testing/component'
import { act, fireEvent, screen } from '@testing-library/svelte'
import { isDark } from '@/client/stash/theme'

describe('DarkModeSwitch', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    test('toggling', async () => {
        component(DarkModeSwitch).render()

        await fireEvent.click(screen.getByLabelText('Dark Mode'))
        expect(document.body.className).toContain('theme-dark')

        await fireEvent.click(screen.getByLabelText('Dark Mode'))
        expect(document.body.className).not.toContain('theme-dark')
    })

    test('dark is on already', async () => {
        isDark.set(true)

        component(DarkModeSwitch).render()
        expect(document.body.className).toContain('theme-dark')

        await fireEvent.click(screen.getByLabelText('Dark Mode'))
        expect(document.body.className).not.toContain('theme-dark')
    })
})
