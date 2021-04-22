import connect from './connect'

import { ConnectNineDots } from './ConnectNineDots'
import { ImageSteganographer } from './ImageSteganographer'

export const register = () => {
    connect(ConnectNineDots)
    connect(ImageSteganographer)
}
