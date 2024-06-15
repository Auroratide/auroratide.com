export const Routes = {
	Posts: {
		href: (id?: string) => `/posts${id == null ? "" : "/" + id}`
	},
	Websites: {
		href: (id?: string) => `/websites${id == null ? "" : "/" + id}`
	},
	Tools: {
		href: (id?: string) => `/tools${id == null ? "" : "/" + id}`
	},
	Games: {
		href: (id?: string) => `/games${id == null ? "" : "/" + id}`
	},
	Art: {
		href: (id?: string) => `/art${id == null ? "" : "/" + id}`
	},
} as const

export const Nav = [ {
	href: Routes.Posts.href(),
	name: "Content I Wrote",
}, {
	href: Routes.Posts.href(),
	name: "Websites I Built",
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
