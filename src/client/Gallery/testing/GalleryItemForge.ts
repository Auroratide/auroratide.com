import type { GalleryItem } from '../types'

type Options = {
    image?: string,
    alt?: string,
    caption?: string,
}

export class GalleryItemForge {
    create(options: Options = {}): GalleryItem {
        return {
            image: options.image ?? 'stuff.png',
            alt: options.alt ?? 'alt',
            caption: options.caption ?? 'Some caption',
        }
    }
}
