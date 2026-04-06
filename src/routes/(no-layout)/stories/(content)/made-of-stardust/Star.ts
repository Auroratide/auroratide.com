import { Canvas } from "./Canvas"

export type StarColor = {
	name: string,
	oklch: (alpha?: number) => string,
}

export const StarColors: StarColor[] = [
	{ name: 'red', oklch: (alpha: number = 1) => `oklch(0.7089 0.1837 28.72 / ${alpha})` },
	{ name: 'orange', oklch: (alpha: number = 1) => `oklch(0.8058 0.1527 68.43 / ${alpha})` },
	{ name: 'yellow', oklch: (alpha: number = 1) => `oklch(0.9454 0.1444 102.84 / ${alpha})` },
	{ name: 'white', oklch: (alpha: number = 1) => `oklch(0.9418 0.02835 281.5023 / ${alpha})` },
	{ name: 'blue', oklch: (alpha: number = 1) => `oklch(0.7482 0.1235 244.75 / ${alpha})` },
]

export type Star = {
	x: number,
	y: number,
	radius: number,
	color: StarColor,
	glowIntensity: number
	alpha?: number
	// size: number,
	// alpha: number,
	// twinkleSpeed: number,
	// twinklePhase: number,
	// speed: number,
}

function mapToRange(value: number, x: number, y: number) {
	const clamped = Math.max(x, Math.min(y, value));
	const normalized = (clamped - x) / (y - x);
	return Math.min(4, Math.floor(normalized * 5));
}

export const Star = {
	random(): Star {
		const radius = Math.random() * 3.5 + 3

		return {
			x: 0,
			y: 0,
			radius,
			color: StarColors[mapToRange(radius, 3, 6.5)],
			glowIntensity: 1,
		}
	},

	draw(star: Star) {
		const ctx = Canvas.ctx
		const { x, y, radius, color, glowIntensity, alpha = 1 } = star
		const grad = ctx.createRadialGradient(x, y, 0, x, y, radius * 5);
		grad.addColorStop(0, color.oklch(glowIntensity * 0.5 * alpha));
		grad.addColorStop(0.3, color.oklch(glowIntensity * 0.15 * alpha));
		grad.addColorStop(1, color.oklch(0));
		ctx.beginPath();
		ctx.arc(x, y, radius * 5, 0, Math.PI * 2);
		ctx.fillStyle = grad;
		ctx.fill();

		// Core
		const core = ctx.createRadialGradient(x, y, 0, x, y, radius);
		core.addColorStop(0, '#fff');
		core.addColorStop(0.4, color.oklch(alpha));
		core.addColorStop(1, color.oklch(alpha * 0.3));
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.fillStyle = core;
		ctx.fill();
	},

	// createForBackground(): Star {
	// 	return {
	// 		x: Math.random() * W,
	// 		y: Math.random() * H,
	// 		size: Math.random() * 1.4 + 0.3,
	// 		alpha: Math.random() * 0.5 + 0.1,
	// 		twinkleSpeed: Math.random() * 0.02 + 0.005,
	// 		twinklePhase: Math.random() * Math.PI * 2,
	// 		speed: Math.random() * 0.15 + 0.05,
	// 	}
	// },
} as const