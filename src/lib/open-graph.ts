type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<T>

export type OpenGraph = OpenGraphBase & {
    type: OpenGraphType,
    article?: OpenGraphArticle,
}

export type OpenGraphBase = {
    title: string,
    image: string,
    url: string,
}

export type OpenGraphType = 'website' | 'article'

export type OpenGraphArticle = {
    published: Date,
    author: string,
    section: string,
    tags: string[],
}

export const buildOpenGraph = ({ title, url, image = '/favicon/0512.png' }: MakeOptional<OpenGraphBase, 'image'>) => ({
    article: (article: OpenGraphArticle): OpenGraph => ({
        title,
        url,
        image,
        type: 'article',
        article,
    }),
    website: (): OpenGraph => ({
        title,
        url,
        image,
        type: 'website',
    }),
})
