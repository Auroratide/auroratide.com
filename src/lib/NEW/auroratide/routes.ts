export const Routes = {
	Posts: {
		href: (id?: string) => `/posts${id == null ? "" : "/" + id}`
	},
} as const
