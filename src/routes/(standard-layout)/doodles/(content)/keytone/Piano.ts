import { Instrument } from "./Instrument"
import { Note } from "./Note"
import { Pitch } from "./Pitch"

export class Piano extends Instrument {
	constructor() {
		super((pitch) => new Note(new Audio(`/keytone/piano/${Pitch.toName(pitch)}.mp3`)))
	}
}
