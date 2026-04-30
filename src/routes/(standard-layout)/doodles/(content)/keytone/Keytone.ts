import type { Instrument } from "./Instrument"
import { Pitch } from "./Pitch"

export class Keytone {
	private static keymap: Record<string, Pitch> = Object.fromEntries("bgvfcdxsza1q2w3e4r5t6y7u8i9o0p-[=]/;.l,kmjnh".split("").map((key, pitch) => [key, pitch]))

	constructor (private readonly instrument: Instrument) {}

	onPress = (key: string) => {
		this.instrument.get(Pitch.shiftOctave(Keytone.keymap[key], 1)).press()
	}

	onRelease = (key: string) => {
		this.instrument.get(Pitch.shiftOctave(Keytone.keymap[key], 1)).release()
	}

	getPitchName = (key: string): string => {
		return Pitch.toName(Keytone.keymap[key])
	}
}


/*
w3e4rt6y7u8io

zsxdcvgbhnjm,
*/