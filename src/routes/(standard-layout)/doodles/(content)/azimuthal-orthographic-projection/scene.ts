import * as Three from "three"

export function createScene(container: HTMLElement) {
	const aspect = container.clientWidth / container.clientHeight

	const scene = new Three.Scene()

	const perspectiveCam = new Three.PerspectiveCamera(75, aspect / 2, 0.1, 1000)
	perspectiveCam.position.z = 5

	const frustumSize = 4
	const orthoCam = new Three.OrthographicCamera(
		-frustumSize * aspect / 4,
		frustumSize * aspect / 4,
		frustumSize / 2,
		-frustumSize / 2,
		0.1,
		1000,
	)
	orthoCam.position.z = 10

	const renderer = new Three.WebGLRenderer({ antialias: true })
	renderer.setSize(container.clientWidth, container.clientHeight)
	renderer.setScissorTest(true)

	container?.appendChild(renderer.domElement)

	function onResizeWindow() {
		const w = container.clientWidth
		const h = container.clientHeight
		const aspect = w / h

		orthoCam.left = -frustumSize * aspect / 4,
		orthoCam.right = frustumSize * aspect / 4,
		orthoCam.top = frustumSize / 2,
		orthoCam.bottom = -frustumSize / 2,
		orthoCam.updateProjectionMatrix()

		perspectiveCam.aspect = aspect / 2
		perspectiveCam.updateProjectionMatrix()

		renderer.setSize(w, h)
	}

	function rerender() {
		const w = container.clientWidth
		const h = container.clientHeight

		renderer.setScissor(0, 0, w, h)
		renderer.setViewport(0, 0, w, h)
		renderer.clear()

		renderer.setScissor(0, 0, w / 2, h)
		renderer.setViewport(0, 0, w / 2, h)
		renderer.render(scene, orthoCam)

		renderer.setScissor(w / 2, 0, w / 2, h)
		renderer.setViewport(w / 2, 0, w / 2, h)
		renderer.render(scene, perspectiveCam)
	}

	window.addEventListener("resize", onResizeWindow)

	function cleanup() {
		window.removeEventListener("resize", onResizeWindow)
	}

	return {
		scene,
		cleanup,
		rerender,
	}
}
