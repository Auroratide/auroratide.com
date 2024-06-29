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

const p = (x: number, y: number) => ({ x, y })
const dot1 = p(100, 100)
const dot3 = p(290, 100)
const dot7 = p(100, 290)
const dot9 = p(290, 290)
const pastDot3 = p(dot3.x + 70, dot3.y)
const pastDot7 = p(dot7.x, dot7.y + 70)

const fail = async (puzzle: Locator) => {
	await puzzle.click({ position: dot1 })
	await puzzle.click({ position: dot3 })
	await puzzle.click({ position: dot9 })
	await puzzle.click({ position: dot7 })
	await puzzle.click({ position: dot1 })
}

const solve = async (puzzle: Locator) => {
	await puzzle.click({ position: dot1 })
	await puzzle.click({ position: pastDot3 })
	await puzzle.click({ position: pastDot7 })
	await puzzle.click({ position: dot1 })
	await puzzle.click({ position: dot9 })
}
