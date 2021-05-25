import { IconName } from '@/components/VectorIcon/IconName'
import { Palette } from '@/client/color'

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

export const navigation: Record<'Posts' | 'Portfolio' | 'Art' | 'About' | 'Legal' | 'Whodoku' | 'Styleguide', Navigation> = {
    Posts: {
        name: 'Posts',
        link: '/posts',
        visibility: NavVisibility.Visible,
    },
    Portfolio: {
        name: 'Portfolio',
        link: '/portfolio',
        visibility: NavVisibility.Visible,
    },
    Art: {
        name: 'Art',
        link: '/art',
        visibility: NavVisibility.Hidden,
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
    },
    Styleguide: {
        name: 'Styleguide',
        link: '/styleguide',
        visibility: NavVisibility.Hidden,
    },
}

export type ExternalReference = {
    name: string,
    link: string,
}

export const external: Record<'Source', ExternalReference> = {
    Source: {
        name: 'source',
        link: 'https://github.com/Auroratide/auroratide.com',
    },
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

    assets(): AssetUrlBuilder {
        return new AssetUrlBuilder(this.url)
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

    portfolio(): string {
        return `${this.url}${navigation.Portfolio.link}${this.api ? `/index${UrlBuilder.API_SUFFIX}` : ''}`
    }

    portfolioItem(id: string): string {
        return `${this.url}${navigation.Portfolio.link}/${id}${this.api ? UrlBuilder.API_SUFFIX : ''}`
    }

    art(): string {
        return `${this.url}${navigation.Art.link}${this.api ? `/index${UrlBuilder.API_SUFFIX}` : ''}`
    }

    artItem(id: string) {
        return `${this.url}${navigation.Art.link}/${id}${this.api ? UrlBuilder.API_SUFFIX : ''}`
    }
}

class AssetUrlBuilder {
    private url: string
    constructor(url: string) {
        this.url = `${url}/assets`
    }

    page(location: string): AssetUrlBuilder {
        this.url += location
        return this
    }

    post(id: string): AssetUrlBuilder {
        this.url += `${navigation.Posts.link}/${id}`
        return this
    }

    portfolioItem(id: string): AssetUrlBuilder {
        this.url += `${navigation.Portfolio.link}/${id}`
        return this
    }

    artItem(id: string): AssetUrlBuilder {
        this.url += `${navigation.Art.link}/${id}`
        return this
    }

    base(): string {
        return this.url
    }

    asset(file: string): string {
        return `${this.url}/${file}`
    }
}
