export const IconName = {
	AngleDoubleDown: 'angle-double-down',
	AngleDoubleLeft: 'angle-double-left',
	AngleDoubleRight: 'angle-double-right',
	AngleDoubleUp: 'angle-double-up',
	AngleDown: 'angle-down',
	AngleLeft: 'angle-left',
	AngleRight: 'angle-right',
	AngleUp: 'angle-up',
	Archive: 'archive',
	AssistiveListeningSystems: 'assistive-listening-systems',
	Atom: 'atom',
	Bomb: 'bomb',
	Book: 'book',
	BookOpen: 'book-open',
	Boxes: 'boxes',
	Brain: 'brain',
	Bug: 'bug',
	Calculator: 'calculator',
	CandyCane: 'candy-cane',
	ChalkboardTeacher: 'chalkboard-teacher',
	ChartLine: 'chart-line',
	Check: 'check',
	ChessQueen: 'chess-queen',
	ChessRook: 'chess-rook',
	Code: 'code',
	CookieBite: 'cookie-bite',
	CommentDots: 'comment-dots',
	Crosshairs: 'crosshairs',
	Css3Alt: 'css3-alt',
	Cube: 'cube',
	Database: 'database',
	Diamonds: 'diamonds',
	DiceD20: 'dice-d20',
	DotCircle: 'dot-circle',
	Dragon: 'dragon',
	EllipsisH: 'ellipsis-h',
	Envelope: 'envelope',
	ExchangeAlt: 'exchange-alt',
	ExclamationTriangle: 'exclamation-triangle',
	ExpandArrowsAlt: 'expand-arrows-alt',
	EyeDropper: 'eye-dropper',
	Filter: 'filter',
	Fingerprint: 'fingerprint',
	Fire: 'fire',
	Folder: 'folder',
	FolderMinus: 'folder-minus',
	Gamepad: 'gamepad',
	Gavel: 'gavel',
	Globe: 'globe',
	GripLinesVertical: 'grip-lines-vertical',
	Hammer: 'hammer',
	HandPointer: 'hand-pointer',
	HatCowboySide: 'hat-cowboy-side',
	Heart: 'heart',
	HospitalAlt: 'hospital-alt',
	HourglassHalf: 'hourglass-half',
	ICursor: 'i-cursor',
	Image: 'image',
	Key: 'key',
	LayerGroup: 'layer-group',
	LevelUpAlt: 'level-up-alt',
	Lightbulb: 'lightbulb',
	Link: 'link',
	LowVision: 'low-vision',
	MapMarkerAlt: 'map-marker-alt',
	Medal: 'medal',
	Mobile: 'mobile',
	Moon: 'moon',
	Music: 'music',
	Newspaper: 'newspaper',
	PaintBrush: 'paint-brush',
	Palette: 'palette',
	Pause: 'pause',
	Paw: 'paw',
	Phone: 'phone',
	Play: 'play',
	Plus: 'plus',
	ProjectDiagram: 'project-diagram',
	QuestionCircle: 'question-circle',
	Rocket: 'rocket',
	SearchPlus: 'search-plus',
	Seedling: 'seedling',
	Server: 'server',
	Shapes: 'shapes',
	Shower: 'shower',
	SmileWink: 'smile-wink',
	Spades: 'spades',
	SquareFull: 'square-full',
	Stamp: 'stamp',
	Suitcase: 'suitcase',
	SuitcaseRolling: 'suitcase-rolling',
	Sun: 'sun',
	Sync: 'sync',
	TableTennis: 'table-tennis',
	Tag: 'tag',
	Taxi: 'taxi',
	Th: 'th',
	Tty: 'tty',
	Thumbtack: 'thumbtack',
	Times: 'times',
	TrafficLight: 'traffic-light',
	TruckMoving: 'truck-moving',
	Undo: 'undo',
	Users: 'users',
	UserTie: 'user-tie',
	Utensils: 'utensils',
	Water: 'water',

	Android: 'android',
	Dev: 'dev',
	ItchIo: 'itch-io',
	LinkedIn: 'linked-in',
	Github: 'github',
	GithubAlt: 'github-alt',
	Html5: 'html5',
	Kafka: 'kafka',
	Npm: 'npm',
	React: 'react',
	RedditAlien: 'reddit-alien',
	StackOverflow: 'stack-overflow',
	Unity: 'unity',
	Windows: 'windows',
} as const

export type IconName = typeof IconName[keyof typeof IconName]

export function isValidIcon(icon: string | undefined | null): icon is IconName {
	return icon != null && (Object.values(IconName) as string[]).includes(icon)
}
