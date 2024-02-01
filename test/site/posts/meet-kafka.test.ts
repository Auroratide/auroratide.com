import { test, expect } from "@playwright/test"

test("slide shows", async ({ page }) => {
    await page.goto("/posts/meet-kafka")

    const slide1 = page.getByAltText(/Hey Kirk here's a message!/)
    const slide2 = page.getByAltText(/Thanks Pat, I'll hold onto this./)
    const slide3 = page.getByAltText(/Hey Kirk, got a message for me yet?/)
    const slide4 = page.getByAltText(/Sure do! Here's a copy./)

    const nextButton = page.getByRole("button", { name: "Next" }).nth(0)
    const prevButton = page.getByRole("button", { name: "Prev" }).nth(0)

    const skipToButton = (n: number) => page.getByRole("button", { name: `${n}` }).nth(0)

    // Playwright thinks the element is visible since it's just out of an overflow container, but it's not
    // so we use the aria-hidden attribute instead to test for this
    await expect(slide1).toHaveAttribute("aria-hidden", "false")
    await expect(slide2).toHaveAttribute("aria-hidden", "true")
    await expect(slide3).toHaveAttribute("aria-hidden", "true")
    await expect(slide4).toHaveAttribute("aria-hidden", "true")

    await nextButton.click()

    await expect(slide1).toHaveAttribute("aria-hidden", "true")
    await expect(slide2).toHaveAttribute("aria-hidden", "false")
    await expect(slide3).toHaveAttribute("aria-hidden", "true")
    await expect(slide4).toHaveAttribute("aria-hidden", "true")

    await nextButton.click()

    await expect(slide1).toHaveAttribute("aria-hidden", "true")
    await expect(slide2).toHaveAttribute("aria-hidden", "true")
    await expect(slide3).toHaveAttribute("aria-hidden", "false")
    await expect(slide4).toHaveAttribute("aria-hidden", "true")

    await prevButton.click()

    await expect(slide1).toHaveAttribute("aria-hidden", "true")
    await expect(slide2).toHaveAttribute("aria-hidden", "false")
    await expect(slide3).toHaveAttribute("aria-hidden", "true")
    await expect(slide4).toHaveAttribute("aria-hidden", "true")

    await skipToButton(4).click()

    await expect(slide1).toHaveAttribute("aria-hidden", "true")
    await expect(slide2).toHaveAttribute("aria-hidden", "true")
    await expect(slide3).toHaveAttribute("aria-hidden", "true")
    await expect(slide4).toHaveAttribute("aria-hidden", "false")
})
