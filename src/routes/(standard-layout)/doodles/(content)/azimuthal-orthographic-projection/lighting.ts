import * as Three from "three"

export function createLight() {
	const light = new Three.PointLight(0xffffff, 1, 100)
	light.position.set(5, 5, 5)

	return light
}
