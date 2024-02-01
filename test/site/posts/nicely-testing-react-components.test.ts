import { test, expect } from "@playwright/test"

test("decrementor widget", async ({ page }) => {
    await page.goto("/posts/nicely-testing-react-components")

    const decrementButton = page.getByRole("button", { name: "Decrement" })

    await expect(page.getByText("100")).toBeVisible()
    
    await decrementButton.click()
    
    await expect(page.getByText("100")).not.toBeVisible()
    await expect(page.getByText("98")).toBeVisible()
})
