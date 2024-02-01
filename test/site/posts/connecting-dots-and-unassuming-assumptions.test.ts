import { test, expect, Page, Locator } from "@playwright/test"

test("nine dots puzzle", async ({ page }) => {
    await page.goto("/posts/connecting-dots-and-unassuming-assumptions")

    const puzzle = page.getByTestId("nine-dots-puzzle").getByTestId("puzzle-area")

    await fail(puzzle)
    await expect(page.getByText(/Try again/)).toBeVisible()

    await page.getByRole("button", { name: "Reset" }).click()
    
    await solve(puzzle)
    await expect(page.getByText("You did it!")).toBeVisible()
})

const fail = async (puzzle: Locator) => {
    await puzzle.click({ position: { x: 80, y: 80 } })
    await puzzle.click({ position: { x: 220, y: 80 } })
    await puzzle.click({ position: { x: 220, y: 220 } })
    await puzzle.click({ position: { x: 80, y: 220 } })
    await puzzle.click({ position: { x: 80, y: 80 } })
}

const solve = async (puzzle: Locator) => {
    await puzzle.click({ position: { x: 80, y: 80 } })
    await puzzle.click({ position: { x: 280, y: 80 } })
    await puzzle.click({ position: { x: 80, y: 280 } })
    await puzzle.click({ position: { x: 80, y: 80 } })
    await puzzle.click({ position: { x: 240, y: 240 } })
}
