import connect from './connect'

import { ArticleImage } from './ArticleImage'
import { ConnectNineDots } from './ConnectNineDots'
import { HorizontalFlex } from './HorizontalFlex'
import { ImageSteganographer } from './ImageSteganographer'
import { MajorPoint } from './MajorPoint'
import { PopoutImage } from './PopoutImage'
import { SubTheme } from './SubTheme'
import { VectorIcon } from './VectorIcon'
import { WhodokuWidget } from './WhodokuWidget'

export const register = () => {
    connect(ArticleImage)
    connect(ConnectNineDots)
    connect(HorizontalFlex)
    connect(ImageSteganographer)
    connect(MajorPoint)
    connect(PopoutImage)
    connect(SubTheme)
    connect(VectorIcon)
    connect(WhodokuWidget)
}
