import { Input } from "./Input"
import { Canvas } from "./Canvas";
import { Star, StarColors } from "./Star";

export type Player = Star & {
	vx: number,
	vy: number,
	accel: number,
	friction: number,
	maxSpeed: number,
}

export const Player = {
	create(): Player {
		return {
			x: 0, y: 0,
			vx: 0, vy: 0,
			radius: 10,
			color: StarColors[3],
			glowIntensity: 1,
			accel: 0.45,
			friction: 0.965,
			maxSpeed: 5,
		}
	},

	reset(player: Player) {
		player.x = Canvas.width / 2;
		player.y = Canvas.height * 0.7;
		player.vx = 0;
		player.vy = 0;
	},

	update(player: Player, time: number) {
		player.glowIntensity = Math.sin(time * 0.05) * 0.15 + 0.85
	},

	control(player: Player) {
		let ax = 0, ay = 0;
		if (Input.isDown("arrowleft") || Input.isDown('a')) ax -= 1;
		if (Input.isDown('arrowright') || Input.isDown('d')) ax += 1;
		if (Input.isDown('arrowup') || Input.isDown('w')) ay -= 1;
		if (Input.isDown('arrowdown') || Input.isDown('s')) ay += 1;

		// Normalize diagonal
		if (ax !== 0 && ay !== 0) {
			const inv = 1 / Math.SQRT2;
			ax *= inv;
			ay *= inv;
		}

		player.vx += ax * player.accel;
		player.vy += ay * player.accel;

		// Friction
		player.vx *= player.friction;
		player.vy *= player.friction;

		// Clamp speed
		const speed = Math.hypot(player.vx, player.vy);
		if (speed > player.maxSpeed) {
			player.vx = (player.vx / speed) * player.maxSpeed;
			player.vy = (player.vy / speed) * player.maxSpeed;
		}

		player.x += player.vx;
		player.y += player.vy;

		// Boundary clamping
		const margin = player.radius;
		player.x = Math.max(margin, Math.min(Canvas.width - margin, player.x));
		player.y = Math.max(margin, Math.min(Canvas.height - margin, player.y));
	},

	draw(player: Player) {
		const ctx = Canvas.ctx
		Star.draw(player)

		const speed = Math.hypot(player.vx, player.vy);
		if (speed > 0.5) {
			const trailAlpha = Math.min(speed / player.maxSpeed, 1) * 0.2;
			ctx.strokeStyle = `rgba(232, 234, 255, ${trailAlpha})`;
			ctx.lineWidth = player.radius * 0.5;
			ctx.lineCap = 'round';
			ctx.beginPath();
			ctx.moveTo(player.x, player.y);
			ctx.lineTo(player.x - player.vx * 4, player.y - player.vy * 4);
			ctx.stroke();
		}
	}
} as const
