import { test, expect } from "@playwright/test"

// I have no clue why, but this refuses to work in headless mode
test.skip("dark mode", async ({ page }) => {
    await page.goto("/")

    const darkModeSwitch = page.getByRole("switch", { name: "Dark Mode" })

    await darkModeSwitch.click()
    await expect(page.locator("body")).toHaveClass("theme-dark")

    await darkModeSwitch.click()
    await expect(page.locator("body")).not.toHaveClass("theme-dark")
})

test("license", async ({ page }) => {
    await page.goto("/")

    const year = new Date().getFullYear()
    const expectedCopyright = new RegExp(`© ${year}`)
    await expect(page.getByText(expectedCopyright)).toBeVisible()

    await expect(page.getByText(/Timothy Foster/)).toBeVisible()
})
