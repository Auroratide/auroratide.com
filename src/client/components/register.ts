import connect from './connect'

import { ArticleImage } from './ArticleImage'
import { ColoredText } from './ColoredText'
import { ConnectNineDots } from './ConnectNineDots'
import { DateDisplay } from './DateDisplay'
import { DecrementorWidget } from './DecrementorWidget'
import { HorizontalFlex } from './HorizontalFlex'
import { ImageSteganographer } from './ImageSteganographer'
import { MajorPoint } from './MajorPoint'
import { MaslowsHierarchyOfNeeds } from './MaslowsHierarchyOfNeeds'
import { PopoutImage } from './PopoutImage'
import { ResponsiveImage } from './ResponsiveImage'
import { SideText } from './SideText'
import { SubTheme } from './SubTheme'
import { VectorIcon } from './VectorIcon'
import { WhodokuWidget } from './WhodokuWidget'

export const register = () => {
    connect(ArticleImage)
    connect(ColoredText)
    connect(ConnectNineDots)
    connect(DateDisplay)
    connect(DecrementorWidget)
    connect(HorizontalFlex)
    connect(ImageSteganographer)
    connect(MajorPoint)
    connect(MaslowsHierarchyOfNeeds)
    connect(PopoutImage)
    connect(ResponsiveImage)
    connect(SideText)
    connect(SubTheme)
    connect(VectorIcon)
    connect(WhodokuWidget)
}
