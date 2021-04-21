import connect from './connect'

import { ArticleImage } from './ArticleImage'
import { ConnectNineDots } from './ConnectNineDots'
import { ImageSteganographer } from './ImageSteganographer'
import { VectorIcon } from './VectorIcon'
import { WhodokuWidget } from './WhodokuWidget'

export const register = () => {
    connect(ArticleImage)
    connect(ConnectNineDots)
    connect(ImageSteganographer)
    connect(VectorIcon)
    connect(WhodokuWidget)
}
