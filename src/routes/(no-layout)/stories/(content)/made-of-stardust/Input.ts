const keys: Record<string, boolean> = {}

function onKeyDown(e: KeyboardEvent) {
	keys[e.key.toLowerCase()] = true
	if (['arrowup','arrowdown','arrowleft','arrowright',' '].includes(e.key.toLowerCase())) {
		e.preventDefault()
	}
}

function onKeyUp(e: KeyboardEvent) {
	keys[e.key.toLowerCase()] = false
}

export const Input = {
	listen() {
		window.addEventListener("keydown", onKeyDown)
		window.addEventListener("keyup", onKeyUp)
	},

	unlisten() {
		window.removeEventListener("keydown", onKeyDown)
		window.removeEventListener("keyup", onKeyUp)
	},

	isDown(key: string): boolean {
		return keys[key]
	},
} as const
