import wait from '@auroratide/wait'

export const scroll = {
    toTop: () => wait.milliseconds(1).then(() => window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    }))
}
