export function isFullPageOverlayRoute(pathname: string): boolean {
	return /art\/.+$/.test(pathname)
}
