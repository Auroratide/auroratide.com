import type { Link } from '../types'
import type { Color } from '@/client/color'
import { ColorForge } from '@/client/color/testing/ColorForge'

type Options = {
    title?: string
    href?: string
    icon?: string
    color?: Color
}

export class LinkForge {
    create(options: Options = {}): Link {
        return {
            title: options.title ?? 'Link',
            href: options.href ?? 'http://localhost:3000',
            icon: options.icon ?? 'icon',
            color: options.color ?? new ColorForge().hex('000000'),
        }
    }
}
