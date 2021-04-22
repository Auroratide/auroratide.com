import connect from './connect'

import { ConnectNineDots } from './ConnectNineDots'
import { ImageSteganographer } from './ImageSteganographer'
import { VectorIcon } from './VectorIcon'

export const register = () => {
    connect(ConnectNineDots)
    connect(ImageSteganographer)
    connect(VectorIcon)
}
