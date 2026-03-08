import * as Three from "three"

export function createSphere() {
	const radius = 2
	const geometry = new Three.SphereGeometry(radius, 64, 64)
	const material = new Three.MeshBasicMaterial({
		color: 0x2a2a2a,
		wireframe: false,
	})

	const sphere = new Three.Mesh(geometry, material)

	for (let i = 0; i < Math.PI; i += Math.PI / 6) {
		for (let j = 0; j < Math.PI * 2; j += Math.PI / 6) {
			sphere.add(createCircleOnSphere(radius, i, j))
		}
	}

	return sphere
}

function createCircleOnSphere(radius: number, lat: number, long: number) {
	const location = sphereLocation(radius, lat, long)

	const geometry = new Three.CircleGeometry(0.15, 32)
	const color = new Three.Color(Math.random(), Math.random(), Math.random())
	const material = new Three.MeshBasicMaterial({
		color: color,
		side: Three.DoubleSide,
	})

	const circle = new Three.Mesh(geometry, material)

	circle.position.set(...location)
	circle.lookAt(0, 0, 0)
	circle.rotateY(Math.PI)

	return circle
}

function sphereLocation(radius: number, theta: number, phi: number): [number, number, number] {
	return [
		radius * Math.sin(phi) * Math.cos(theta),
		radius * Math.sin(phi) * Math.sin(theta),
		radius * Math.cos(phi),
	]
}
