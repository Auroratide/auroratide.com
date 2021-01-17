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

export type Navigation = {
    name: string,
    link: string,
}

export const navigation: Record<'Home' | 'Posts' | 'About' | 'Legal', Navigation> = {
    Home: {
        name: 'Home',
        link: '/',
    },
    Posts: {
        name: 'Posts',
        link: '/posts',
    },
    About: {
        name: 'About',
        link: '/about',
    },
    Legal: {
        name: 'Legal',
        link: '/legal',
    },
}
