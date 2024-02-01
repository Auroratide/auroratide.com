import { test, expect, Page, Locator } from "@playwright/test"

test("steganography", async ({ page }) => {
    await page.goto("/posts/steganography")

    const text = "This is a test message long enough to override the default message"

    await page.getByLabel("Message").fill(text)
    await page.getByRole("button", { name: /Encode/ }).click()

    await page.getByLabel("Message").fill("")

    await page.getByRole("button", { name: /Decode/ }).click()

    await expect(page.getByLabel("Message")).toHaveValue(text)
})
