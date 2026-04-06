import { Canvas } from "./Canvas"
import { Star } from "./Star"

export type BinaryPair = {
	x: number,
	y: number,
	angle: number,
	angularSpeed: number,
	alpha: Star,
	beta: Star,
	vy: number,
}

const ORBIT_RADIUS = 10

export const BinaryPair = {
	random(): BinaryPair {
		return {
			x: Math.random() * (Canvas.width - 120) + 60,
			y: Canvas.height + 40,
			angle: Math.random() * Math.PI * 2,
			angularSpeed: (Math.random() * 0.015 + 0.008) * (Math.random() < 0.5 ? 1 : -1),
			alpha: Star.random(),
			beta: Star.random(),
			vy: 0.4 + Math.random() * 0.15,
		}
	},

	eliminateOffscreen(pairs: BinaryPair[]): BinaryPair[] {
		return pairs.filter((it) => it.y < -50)
	},

	update(b: BinaryPair) {
		b.y -= b.vy
		b.angle += b.angularSpeed
	},

	draw(b: BinaryPair) {
		const ctx = Canvas.ctx

		b.alpha.x = b.x + Math.cos(b.angle) * ORBIT_RADIUS;
		b.alpha.y = b.y + Math.sin(b.angle) * ORBIT_RADIUS;
		b.beta.x = b.x + Math.cos(b.angle + Math.PI) * ORBIT_RADIUS;
		b.beta.y = b.y + Math.sin(b.angle + Math.PI) * ORBIT_RADIUS;

		// Faint orbit trail
		ctx.strokeStyle = 'rgba(100, 120, 180, 0.06)';
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.arc(b.x, b.y, ORBIT_RADIUS, 0, Math.PI * 2);
		ctx.stroke();

		Star.draw(b.alpha)
		Star.draw(b.beta)
	},
} as const