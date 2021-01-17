import { IconName } from './IconName'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons/faHourglassHalf'
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup'
import { faShower } from '@fortawesome/free-solid-svg-icons/faShower'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'

export const library = {
    [IconName.AngleDoubleDown]: faAngleDoubleDown,
    [IconName.AngleDoubleLeft]: faAngleDoubleLeft,
    [IconName.AngleDoubleRight]: faAngleDoubleRight,
    [IconName.AngleDoubleUp]: faAngleDoubleUp,
    [IconName.HourglassHalf]: faHourglassHalf,
    [IconName.Image]: faImage,
    [IconName.LayerGroup]: faLayerGroup,
    [IconName.Shower]: faShower,

    [IconName.LinkedIn]: faLinkedinIn,
    [IconName.GithubAlt]: faGithubAlt,
    [IconName.StackOverflow]: faStackOverflow,
}
