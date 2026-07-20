// The 3D–8Q memory taxonomy from "From Human Memory to AI Memory: A Survey on
// Memory Mechanisms in the Era of LLMs" (Wu et al., 2025 — arXiv:2504.15965).
//
// Memory is categorized along three *binary* dimensions, so every model falls
// onto one of the 8 corners (octants) of a cube:
//
//   object : personal  ↔ system          (whose information)
//   form   : non-parametric ↔ parametric (how it is stored)
//   time   : short  ↔ long               (how long it is kept)
//
// The default dataset below is curated to at most 6 models per octant, keeping
// the approaches the paper discusses directly in its prose. Each `summary` is
// paraphrased from that prose (Sections 2–4 of the paper).

export type ObjectDim = 'personal' | 'system'
export type FormDim = 'non-parametric' | 'parametric'
export type TimeDim = 'short' | 'long'

export type MemoryModel = {
    name: string
    object: ObjectDim
    form: FormDim
    time: TimeDim
    abbr?: string     // two-letter glyph shown on the dot
    summary?: string  // one-sentence "what's unique", from the paper
}

export type Octant = {
    numeral: string
    object: ObjectDim
    form: FormDim
    time: TimeDim
    role: string
    description: string
    color: number
}

export const octantKey = (object: ObjectDim, form: FormDim, time: TimeDim) =>
    `${object}|${form}|${time}`

// Table 1 of the paper: the eight quadrants, their cognitive role, and function.
// Colors: personal octants use warm hues, system octants use cool hues, echoing
// the site's palette.
export const OCTANTS: Record<string, Octant> = {
    [octantKey('personal', 'non-parametric', 'short')]: {
        numeral: 'I', object: 'personal', form: 'non-parametric', time: 'short',
        role: 'Conversational Memory',
        description: 'Multi-turn dialogue — real-time context within a session.',
        color: 0xf2c14e,
    },
    [octantKey('personal', 'non-parametric', 'long')]: {
        numeral: 'II', object: 'personal', form: 'non-parametric', time: 'long',
        role: 'Episodic Memory',
        description: 'Retention & retrieval of user history across sessions.',
        color: 0xe5646e,
    },
    [octantKey('personal', 'parametric', 'short')]: {
        numeral: 'III', object: 'personal', form: 'parametric', time: 'short',
        role: 'Contextual Memory',
        description: 'Caching for acceleration of contextual understanding.',
        color: 0xf0894e,
    },
    [octantKey('personal', 'parametric', 'long')]: {
        numeral: 'IV', object: 'personal', form: 'parametric', time: 'long',
        role: 'Identity Memory',
        description: 'Personalized knowledge editing into the weights.',
        color: 0xe08fd6,
    },
    [octantKey('system', 'non-parametric', 'short')]: {
        numeral: 'V', object: 'system', form: 'non-parametric', time: 'short',
        role: 'Working Memory',
        description: 'Reasoning & planning intermediate outputs.',
        color: 0x5fd08a,
    },
    [octantKey('system', 'non-parametric', 'long')]: {
        numeral: 'VI', object: 'system', form: 'non-parametric', time: 'long',
        role: 'Procedural Memory',
        description: 'Reflection & refinement of learned skills.',
        color: 0x46c7c7,
    },
    [octantKey('system', 'parametric', 'short')]: {
        numeral: 'VII', object: 'system', form: 'parametric', time: 'short',
        role: 'Attention Memory',
        description: 'KV-cache management & reuse for efficient inference.',
        color: 0x6aa8f0,
    },
    [octantKey('system', 'parametric', 'long')]: {
        numeral: 'VIII', object: 'system', form: 'parametric', time: 'long',
        role: 'Semantic Memory',
        description: 'Parametric knowledge structures baked into the model.',
        color: 0xa98bf0,
    },
}

export const octantFor = (m: MemoryModel): Octant =>
    OCTANTS[octantKey(m.object, m.form, m.time)]

// Tolerant normalization so <octrant-item> authors can write "np", "long-term",
// "sys", etc. Anything unrecognized falls back to the first pole.
export const normalizeObject = (v: string | null): ObjectDim =>
    (v ?? '').toLowerCase().startsWith('sys') ? 'system' : 'personal'

export const normalizeForm = (v: string | null): FormDim => {
    const s = (v ?? '').toLowerCase()
    if (s.includes('non') || s === 'np') return 'non-parametric'
    if (s.includes('param') || s === 'p') return 'parametric'
    return 'non-parametric'
}

export const normalizeTime = (v: string | null): TimeDim => {
    const s = (v ?? '').toLowerCase()
    return s.startsWith('l') ? 'long' : 'short'
}

// Fallback two-letter glyph for author-supplied items without an `abbr`.
export const deriveAbbr = (name: string): string => {
    const letters = name.replace(/[^A-Za-z0-9]/g, '')
    if (letters.length === 0) return '??'
    return (letters[0].toUpperCase() + (letters[1] ?? '')).slice(0, 2)
}

type Entry = { name: string; abbr: string; summary: string }

const group = (
    object: ObjectDim, form: FormDim, time: TimeDim, entries: Entry[],
): MemoryModel[] => entries.map((e) => ({ ...e, object, form, time }))

// Curated default dataset (≤6 per octant, paper-discussed approaches only).
export const DEFAULT_MODELS: MemoryModel[] = [
    // I — Personal · Non-parametric · Short (multi-turn dialogue)
    ...group('personal', 'non-parametric', 'short', [
        { name: 'ChatGPT', abbr: 'CG', summary: 'Dialogue stored as "user" and "assistant". The conversation transcript IS the short-term memory.' },
        { name: 'DeepSeek', abbr: 'DS', summary: 'Dialogue stored as "user" and "assistant". The conversation transcript IS the short-term memory.' },
        { name: 'Claude', abbr: 'Cl', summary: 'Dialogue stored as "user" and "assistant". The conversation transcript IS the short-term memory.' },
    ]),
    // II — Personal · Non-parametric · Long (episodic memory)
    ...group('personal', 'non-parametric', 'long', [
        { name: 'MemoryBank', abbr: 'MB', summary: 'Builds a profile of a user based on conversation history, and uses the Ebbinghaus Forgetting Curve to reinforce memories by recency and importance.' },
        { name: 'A-MEM', abbr: 'AM', summary: 'Uses the Zettelkasten notetaking method to create knowledge networks, associating memories with each other.' },
        { name: 'HippoRAG', abbr: 'HR', summary: 'A RAG-based system that constructs knowledge graphs over entities and phrases, as well as concepts.' },
        { name: 'RMM', abbr: 'RM', summary: 'Reflective Memory Management: combines Prospective Reflection for summarization with Retrospective Reflection for retrieval.' },
        { name: 'RET-LLM', abbr: 'RL', summary: 'Monitors and updates its factual knowledge of the world in real-time.' },
        { name: 'LD-Agent', abbr: 'LD', summary: 'Uses persona modeling to build profiles of users and agents.' },
    ]),
    // III — Personal · Parametric · Short (caching for acceleration)
    ...group('personal', 'parametric', 'short', [
        { name: 'Prompt Cache', abbr: 'PC', summary: 'Precomputes frequently requested conversation history to save time.' },
        { name: 'Contextual Retrieval', abbr: 'CR', summary: 'Applies prompt caching to RAG to reduce the overhead of generating contextualized chunks.' },
    ]),
    // IV — Personal · Parametric · Long (personalized knowledge editing)
    ...group('personal', 'parametric', 'long', [
        { name: 'Character-LLM', abbr: 'Ch', summary: 'Trains LLMs to role-play historical figures (such as Cleopatra) using records of their experiences.' },
        { name: 'AI-Native Memory', abbr: 'AN', summary: 'Argues that each person should have a personal LLM model (called LPM, or large personal model) as opposed to long text for memory.' },
        { name: 'MemoRAG', abbr: 'MR', summary: 'Compresses a user\'s entire body of knowledge into a parametric KV cache that the LLM uses to enhance a normal RAG query.' },
        { name: 'Echo', abbr: 'Ec', summary: 'An LLM fine-tuned to reason temporally, using primarily episodic data.' },
    ]),
    // V — System · Non-parametric · Short (reasoning & planning)
    ...group('system', 'non-parametric', 'short', [
        { name: 'ReAct', abbr: 'RA', summary: 'Reasons by verifying thoughts with actions (searches, calculations), grounding the thoughts in reality.' },
        { name: 'Reflexion', abbr: 'Rx', summary: 'When it fails, it assesses the failure and reattempts using the assessment as additional context.' },
    ]),
    // VI — System · Non-parametric · Long (reflection & refinement)
    ...group('system', 'non-parametric', 'long', [
        { name: 'Voyager', abbr: 'Vy', summary: 'Creates a reusable skill library over time based on external feedback.' },
        { name: 'Buffer of Thoughts', abbr: 'BT', summary: 'Stores thought patterns into a memory repository that it later recalls in order to enhance chain-of-thought reasoning.' },
        { name: 'Agent Workflow Memory', abbr: 'AW', summary: 'Chooses one of several reusable workflows to guide reasoning on a task based on the task\'s goals.' },
        { name: 'Think-in-Memory', abbr: 'TM', summary: 'Generates new thoughts after thinking (post-thinking) that it later recalls when relevant.' },
        { name: 'Retroformer', abbr: 'Rt', summary: 'Keeps reflections of failures as long-term memory that it uses as context for future queries.' },
    ]),
    // VII — System · Parametric · Short (KV management & reuse)
    ...group('system', 'parametric', 'short', [
        { name: 'vLLM', abbr: 'vL', summary: 'A high-efficiency serving system built on PagedAttention, a virtual-memory-inspired mechanism enabling flexible sharing across requests.' },
        { name: 'ChunkKV', abbr: 'CK', summary: 'Compresses the KV cache by grouping tokens into semantic chunks, keeping the most informative ones and enabling layer-wise index reuse.' },
        { name: 'LLM.int8()', abbr: 'L8', summary: 'Dynamically chooses how precisely to represent semantics internally to improve memory efficiency.' },
        { name: 'KV Cache', abbr: 'KV', summary: 'Stores attention keys and values generated during sequence generation so they can be reused in later inference steps.' },
        { name: 'RAGCache', abbr: 'RC', summary: 'A multilevel dynamic caching system for RAG that caches intermediate knowledge states and overlaps retrieval with inference.' },
    ]),
    // VIII — System · Parametric · Long (parametric memory structures)
    ...group('system', 'parametric', 'long', [
        { name: 'MemoryLLM', abbr: 'ML', summary: 'A mechanism for editing a model directly with new knowledge so it integrates with old knowledge.' },
        { name: 'WISE', abbr: 'Wi', summary: 'Retains pretrained knowledge, but keeps an editable side memory model that the LLM can choose when relevant.' },
    ]),
]
