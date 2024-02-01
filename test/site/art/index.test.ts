import { test, expect } from "@playwright/test"

test("navigating art", async ({ page }) => {
    await page.goto("/art")

    const articles = page.locator("article")

    await expect(await articles.count()).toBeGreaterThan(0)

    const firstArticle = articles.first()
    const title = await firstArticle.locator("h2").innerText()

    await firstArticle.click()
    await expect(page.locator("h1")).toHaveText(title)
})
