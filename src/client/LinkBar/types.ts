import type { Color } from '@/client/color'

export type Link = {
    readonly title: string
    readonly href: string
    readonly icon?: string
    readonly color?: Color | string
}
