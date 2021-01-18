import connect from './connect'

import { ArticleImage } from './ArticleImage'
import { ColoredText } from './ColoredText'
import { ImageSteganographer } from './ImageSteganographer'
import { MajorPoint } from './MajorPoint'
import { MaslowsHierarchyOfNeeds } from './MaslowsHierarchyOfNeeds'
import { SideText } from './SideText'
import { SubTheme } from './SubTheme'
import { VectorIcon } from './VectorIcon'

export const register = () => {
    connect(ArticleImage)
    connect(ColoredText)
    connect(ImageSteganographer)
    connect(MajorPoint)
    connect(MaslowsHierarchyOfNeeds)
    connect(SideText)
    connect(SubTheme)
    connect(VectorIcon)
}
