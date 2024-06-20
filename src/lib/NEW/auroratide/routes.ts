export const Routes = {
	Home: {
		href: () => "/",
	},
	Posts: {
		href: (id?: string) => `/posts${id == null ? "" : "/" + id}`,
	},
	Portfolio: {
		href: (id?: string) => `/portfolio${id == null ? "" : "/" + id}`,
		cover: (id: string) => `/portfolio/${id}/cover.webp`,
	},
	Art: {
		href: (id?: string) => `/art${id == null ? "" : "/" + id}`,
		cover: {
			main: (id: string) => `/art/${id}/cover.webp`,
			colorscape: (id: string) => `/art/${id}/cover.svg`,
		},
		colorscape: (id: string) => `/art/${id}/colorscape.svg`,
	},
	Stories: {
		href: (id?: string) => `/stories${id == null ? "" : "/" + id}`,
	},
	Streams: {
		href: () => "/streams",
	}
} as const

export const Nav = [ {
	href: Routes.Posts.href(),
	name: "Content I Wrote",
}, {
	href: Routes.Portfolio.href(),
	name: "Everything I've Built",
}, {
	href: Routes.Stories.href(),
	name: "Stories I Authored",
}, {
	href: Routes.Streams.href(),
	name: "Streams, Maybe",
}, {
	href: Routes.Art.href(),
	name: "Art I Drew",
} ]
