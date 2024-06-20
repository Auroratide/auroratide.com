import type { ThemeName } from "../design-system/Color"
import { IconName } from "../design-system/vector-icon/IconName"

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

export type SocialLink = {
	name: string,
	icon: IconName,
	color: ThemeName,
	href: string,
}

export const Socials = {
	LinkedIn: {
		name: 'Linked In',
		icon: IconName.LinkedIn,
		color: "linked-in",
		href: "https://www.linkedin.com/in/timothy-foster-224946120",
	},
	Github: {
		name: 'Github',
		icon: IconName.GithubAlt,
		color: "github",
		href: "https://github.com/Auroratide",
	},
	StackOverflow: {
		name: 'Stack Overflow',
		icon: IconName.StackOverflow,
		color: "stack-overflow",
		href: "https://stackoverflow.com/users/6163066/auroratide",
	},
} satisfies Record<string, SocialLink>

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
