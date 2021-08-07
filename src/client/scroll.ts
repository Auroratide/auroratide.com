import wait from '@auroratide/wait'

export const scroll = {
    toTop: () => wait.milliseconds(1).then(() => window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })),
    toHash: () => wait.milliseconds(1).then(() => {
        const elem = document.getElementById(location.hash?.substring(1))
        if (elem) {
            return window.scrollBy(0, elem.getBoundingClientRect().top)
        } else {
            return null
        }
    }),
}
