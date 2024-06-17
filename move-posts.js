import path from "node:path"
import fs from "node:fs/promises"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OLD_POSTS = path.resolve(__dirname, "content", "portfolio")

async function main() {
	const posts = await fs.readdir(OLD_POSTS)

	const results = await Promise.allSettled(posts.map(async (post) => {
		const metaPath = path.join(OLD_POSTS, post, "meta.json")
		const contentPath = path.join(OLD_POSTS, post, "content.md")

		const meta = JSON.parse(await fs.readFile(metaPath, { encoding: "utf-8" }))
		// if (meta.links != null || meta.gallery != null) {
		// 	throw new Error(`${post} needs manual intervention`)
		// }

		const yml = createYml(meta)
		const content = await fs.readFile(contentPath, { encoding: "utf-8" })

		await fs.writeFile(contentPath, yml + "\n" + content)
		await fs.rm(metaPath)
	}))

	results.filter((it) => it.status === "rejected").forEach((it) => {
		console.log(it.reason)
	})
}

main()

function createYml(json) {
	return `---
id: ${json.id}
title: "${json.title}"
category: ${json.category}
tags:
  ${json.tags.map((tag) => `- ${tag}`).join("\n  ")}
icon: ${json.icon}
color: ${convertColor(json.color)}
cover:
  alt: ""
summary: "${json.summary}"
summaryDisp: ""
publishedAt: ${json.published_at}
order: 0
links:
  ${(json.links ?? []).map((link) => convertLink(link, json.icon, json.color)).join("\n  ")}
---
`
}

function convertColor(color) {
	let value
	if (typeof color === "string") {
		value = color
	} else {
		value = color.value
	}

	switch (value) {
		case "eventide-black":
		case "eventideblack":
		case "aurora-blue":
		case "aurorablue":
			return "blue"
		case "aurora-green":
		case "auroragreen":
		case "aellagreen":
		case "aella-green":
			return "green"
		case "fable-lavender":
		case "fablelavender":
		case "fable-pink":
		case "fablepink":
			return "purple"
		case "livian-yellow":
		case "livianyellow":
		case "autumnorange":
		case "autumn-orange":
			return "yellow"
		case "autumn-red":
		case "autumnred":
		case "winter-grey":
		case "wintergrey":
			return "red"
		default: return "blue"
	}
}

function convertLink(link, icon, color) {
	return `- title: ${link.title}
    href: ${link.href}
    icon: ${link.icon ?? icon}
    color: ${convertColor(link.color ?? color)}`
}