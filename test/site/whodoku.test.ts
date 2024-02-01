import { test, expect, Page, Locator } from "@playwright/test"
import sudoku from 'sudoku'

test("whodoku", async ({ page }) => {
    await page.goto("/whodoku")

    await expect(page.getByText("It's solved! Yay!")).not.toBeVisible()

    await solve(page)
    await expect(page.getByText("It's solved! Yay!")).toBeVisible()

    await page.getByRole("button", { name: "Reset" }).click()
    await expect(page.getByText("It's solved! Yay!")).not.toBeVisible()
})

const getBoardValues = (squares: HTMLElement[]): (number | null)[] =>
    squares.map((square) => {
        const img = square.querySelector('img')

        if (img) {
            return parseInt(img.alt) - 1
        }

        return null
    })

const clickSquares = (squares: HTMLElement[], numberOfTimesToClick: number[]) => {
    for (let i = 0; i < squares.length; i++) {
        const square = squares[i]
        const clicks = numberOfTimesToClick[i]

        for (let j = 0; j < clicks; j++) {
            square.click()
        }
    }
}

const solve = async (page: Page) => {
    const allSquares = page.getByTitle('Sudoku Square')

    const unsolved = await allSquares.evaluateAll(getBoardValues)
    const solved = sudoku.solvepuzzle(unsolved)

    const numberOfTimesToClick = solved.map((value, index) => {
        return unsolved[index] == null ? value + 1 : 0
    })

    await allSquares.evaluateAll(clickSquares, numberOfTimesToClick)
}
