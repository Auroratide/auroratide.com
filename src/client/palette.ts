const asVar = (name: string) => `var(--palette-${name})`

export const Palette = {
    greyscale: {
        100: asVar('greyscale-100'),
    },
    colors: {
        DeepBlue: asVar('deep-blue'),
        AuroraBlue: asVar('aurora-blue'),
        AuroraGreen: asVar('aurora-green'),
        FableLavender: asVar('fable-lavendar'),
        FablePink: asVar('fable-pink'),
        LivianYellow: asVar('livian-yellow'),
        EventideBlack: asVar('eventide-black'),
        WinterGrey: asVar('winter-grey'),
        AutumnRed: asVar('autumn-red'),
        AutumnOrange: asVar('autumn-orange'),
        AellaGreen: asVar('aella-green'),
    },
    brands: {
        Github: asVar('github'),
        LinkedIn: asVar('linked-in'),
        Twitter: asVar('twitter'),
        Facebook: asVar('facebook'),
        Windows: asVar('windows'),
        Android: asVar('android'),
        Adobe: asVar('adobe'),
        StackOverflow: asVar('stack-overflow'),
    }
}
