export class Note {
	constructor(private readonly note: HTMLAudioElement) {}

	isPlaying(): boolean {
		return !this.note.paused
	}

	press() {
		this.note.pause()
		this.note.currentTime = 0
		this.note.play()
	}

	release() {
		this.note.pause()
	}
}