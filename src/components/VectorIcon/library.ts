import { IconName } from './IconName'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons/faHourglassHalf'
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'

export const library = {
    [IconName.HourglassHalf]: faHourglassHalf,
    [IconName.Image]: faImage,
    [IconName.LayerGroup]: faLayerGroup,

    [IconName.LinkedIn]: faLinkedinIn,
    [IconName.GithubAlt]: faGithubAlt,
    [IconName.StackOverflow]: faStackOverflow,
}
