import { IconName } from './components/VectorIcon/IconName'
import { Palette } from './palette'

export type Social = {
    name: string,
    icon: string,
    color: string,
    link: string,
}

export const socials: Record<'LinkedIn' | 'Github' | 'StackOverflow', Social> = {
    LinkedIn: {
        name: 'Linked In',
        icon: IconName.LinkedIn,
        color: Palette.brands.LinkedIn,
        link: 'https://www.linkedin.com/in/timothy-foster-224946120',
    },
    Github: {
        name: 'Github',
        icon: IconName.GithubAlt,
        color: Palette.brands.Github,
        link: 'https://github.com/Auroratide',
    },
    StackOverflow: {
        name: 'Stack Overflow',
        icon: IconName.StackOverflow,
        color: Palette.brands.StackOverflow,
        link: 'https://stackoverflow.com/users/6163066/auroratide',
    },
}

export enum NavVisibility {
    Visible,
    Limited,
    Hidden,
}

export type Navigation = {
    name: string,
    link: string,
    visibility: NavVisibility,
}

export const navigation: Record<'Posts' | 'About' | 'Legal' | 'Whodoku', Navigation> = {
    Posts: {
        name: 'Posts',
        link: '/posts',
        visibility: NavVisibility.Visible,
    },
    About: {
        name: 'About',
        link: '/about',
        visibility: NavVisibility.Visible,
    },
    Legal: {
        name: 'Legal',
        link: '/legal',
        visibility: NavVisibility.Limited,
    },
    Whodoku: {
        name: 'Whodoku',
        link: '/whodoku',
        visibility: NavVisibility.Hidden,
    }
}

export class UrlBuilder {
    static API_SUFFIX = '.json'
    private url: string
    private api: boolean

    constructor() {
        this.url = ''
        this.api = false
    }

    withBase(): UrlBuilder {
        this.url = 'https://auroratide.com'
        return this
    }

    apiFor(): UrlBuilder {
        this.api = true
        return this
    }

    home(): string {
        return `${this.url}/`
    }

    posts(): string {
        return `${this.url}${navigation.Posts.link}${this.api ? `/index${UrlBuilder.API_SUFFIX}` : ''}`
    }

    post(id: string): string {
        return `${this.url}${navigation.Posts.link}/${id}${this.api ? UrlBuilder.API_SUFFIX : ''}`
    }
}
