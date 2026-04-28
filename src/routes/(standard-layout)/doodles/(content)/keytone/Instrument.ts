import type { Note } from "./Note"
import { Pitch } from "./Pitch"

export class Instrument {
	private readonly notes: Record<Pitch, Note>

	constructor(private readonly createNote: (pitch: Pitch) => Note) {
		this.notes = [...Array(Pitch.Max - Pitch.Min)]
			.map((_, i) => i)
			.reduce((notes, pitch) => ({
				...notes,
				[pitch]: this.createNote(pitch),
			}), {})
	}

	get(pitch: Pitch): Note {
		return this.notes[pitch]
	}
}
