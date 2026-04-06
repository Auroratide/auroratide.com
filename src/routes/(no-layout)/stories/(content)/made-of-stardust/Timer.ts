export type Timer = {
	minWait: number,
	maxWait: number,
	cooldown: number,
	callback: () => void
}

export const Timer = {
	create(minWait: number, maxWait: number, callback: () => void): Timer {
		return {
			minWait,
			maxWait,
			callback,
			cooldown: maxWait,
		}
	},

	update(timer: Timer) {
		timer.cooldown -= 1
		if (timer.cooldown <= 0) {
			timer.callback()
			timer.cooldown = Math.floor(Math.random() * (timer.maxWait - timer.minWait)) + timer.minWait
		}
	},
} as const