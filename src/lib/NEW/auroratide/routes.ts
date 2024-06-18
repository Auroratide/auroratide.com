export const Routes = {
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
} as const

export const Nav = [ {
	href: Routes.Posts.href(),
	name: "Content I Wrote",
}, {
	href: Routes.Portfolio.href(),
	name: "Stuff I Built",
}, {
	href: Routes.Posts.href(),
	name: "Games I Designed",
}, {
	href: Routes.Posts.href(),
	name: "Tools I Made",
}, {
	href: Routes.Art.href(),
	name: "Art I Drew",
} ]
