import { BinaryPair } from "./BinaryPair";
import { Canvas } from "./Canvas";
import { Player } from "./Player";
import { Starfield } from "./Starfield";
import { Timer } from "./Timer";

export type Game = {
	running: boolean
	player: Player
	starfield: Starfield
	binaryTimer: Timer,
	binaryPairs: BinaryPair[],
	time: number
	lastFrame: number
}

function resetCanvas() {
	const ctx = Canvas.ctx
	const W = Canvas.width
	const H = Canvas.height

	ctx.fillStyle = '#05060f';
	ctx.fillRect(0, 0, W, H);

	const spaceGrad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7);
	spaceGrad.addColorStop(0, 'rgba(15, 12, 30, 0.3)');
	spaceGrad.addColorStop(1, 'rgba(5, 6, 15, 0)');
	ctx.fillStyle = spaceGrad;
	ctx.fillRect(0, 0, W, H);
}

function update(game: Game) {
	game.time += 1

	Player.update(game.player, game.time)
	Player.control(game.player)
	game.binaryPairs.forEach((b) => BinaryPair.update(b))
	Starfield.update(game.starfield)

	Timer.update(game.binaryTimer)
}

function draw(game: Game) {
	resetCanvas()

	Starfield.draw(game.starfield)
	game.binaryPairs.forEach((b) => BinaryPair.draw(b))
	Player.draw(game.player)
}

function loop(game: Game) {
	update(game)
	draw(game)
	if (game.running)
		game.lastFrame = window.requestAnimationFrame(() => loop(game))
}

export const Game = {
	create(): Game {
		const binaryPairs: BinaryPair[] = []

		return {
			running: false,
			player: Player.create(),
			starfield: Starfield.create(),
			binaryTimer: Timer.create(200, 400, () => binaryPairs.push(BinaryPair.random())),
			binaryPairs,
			time: 0,
			lastFrame: -1,
		}
	},

	start(game: Game) {
		game.running = true
		loop(game)
	},

	stop(game: Game) {
		game.running = false
		window.cancelAnimationFrame(game.lastFrame)
	},
} as const