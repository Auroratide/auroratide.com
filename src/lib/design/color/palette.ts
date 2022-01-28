const asVar = (name: string) => `var(--palette-${name})`

const color = (name: string) => ({
    whiteOnColor: asVar(`${name}-wc`),
    colorOnBlack: asVar(`${name}-cb`),
    lightOverlay: asVar(`${name}-lo`),
    darkOverlay: asVar(`${name}-do`),
})

export const Palette = {
    greyscale: {
        100: asVar('greyscale-100'),
    },
    colors: {
        DeepBlue: asVar('deep-blue'),
        AuroraBlue: asVar('aurora-blue'),
        AuroraGreen: asVar('aurora-green'),
        FableLavender: asVar('fable-lavender'),
        FablePink: asVar('fable-pink'),
        LivianYellow: asVar('livian-yellow'),
        EventideBlack: asVar('eventide-black'),
        WinterGrey: asVar('winter-grey'),
        AutumnRed: asVar('autumn-red'),
        AutumnOrange: asVar('autumn-orange'),
        AellaGreen: asVar('aella-green'),
    },
    newColors: {
        DeepBlue: asVar('deep-blue'),
        AuroraBlue: color('aurorablue'),
        AuroraGreen: color('auroragreen'),
        FableLavender: color('fablelavender'),
        FablePink: color('fablepink'),
        LivianYellow: color('livianyellow'),
        AutumnRed: color('autumnred'),
        AutumnOrange: color('autumnorange'),
        AellaGreen: color('aellagreen'),
        EventideBlack: color('eventideblack'),
        WinterGrey: color('wintergrey'),
    },
    brands: {
        Dev: asVar('dev'),
        Github: asVar('github'),
        ItchIo: asVar('itch-io'),
        LinkedIn: asVar('linked-in'),
        Twitter: asVar('twitter'),
        Facebook: asVar('facebook'),
        Windows: asVar('windows'),
        Android: asVar('android'),
        Adobe: asVar('adobe'),
        StackOverflow: asVar('stack-overflow'),
    }
}
