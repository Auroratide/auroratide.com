declare module "*.md" {
	const attributes: Record<string, unknown>

	const toc: { level: string, content: string }[]

	const html: string
}