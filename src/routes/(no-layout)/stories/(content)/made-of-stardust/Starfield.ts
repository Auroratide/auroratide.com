import { Canvas } from "./Canvas"
import { StarColors, Star } from "./Star"

export type Starfield = {
	stars: Star[],
}

export type BackgroundStar = Star & {
	alpha: number,
	twinkleSpeed: number,
	twinklePhase: number,
	speed: number,
}

const INITIAL_COUNT = 260
const SCROLL_SPEED = 0.08

function randomStar(): BackgroundStar {
	return {
    x: Math.random() * Canvas.width,
    y: Math.random() * Canvas.height,
    radius: Math.random() * 1.4 + 0.3,
	 color: StarColors[3],
	 glowIntensity: 0.5,
    alpha: Math.random() * 0.5 + 0.1,
    twinkleSpeed: Math.random() * 0.02 + 0.005,
    twinklePhase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.15 + 0.05,
  }
}

export const Starfield = {
	create(): Starfield {
		const initialStars: Star[] = []
		for (let i = 0; i < INITIAL_COUNT; ++i) {
			initialStars.push(randomStar())
		}

		return {
			stars: initialStars,
		}
	},

	update(starfield: Starfield) {
		starfield.stars.forEach((star) => {
			star.y -= SCROLL_SPEED

			if (star.y < 0) {
				star.y += Canvas.height
			}
		})
	},

	draw(starfield: Starfield) {
		starfield.stars.forEach((star) => {
			Star.draw(star)
		})
	},
} as const