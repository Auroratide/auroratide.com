import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
	testDir: "./test/site",
	outputDir: "./.playwright/results",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [["html", { open: "never", outputFolder: "./.playwright/report" }]],
	use: {
		baseURL: "http://localhost:3000",
		screenshot: "only-on-failure",
		headless: true,
	},

	// TODO: mobile setup
	projects: [ {
		name: "chromium",
		use: { ...devices["Desktop Chrome"] },
	} ],

	webServer: {
		command: "pnpm build && pnpm start --port 3000",
		port: 3000,
		reuseExistingServer: !process.env.CI,
	},
})