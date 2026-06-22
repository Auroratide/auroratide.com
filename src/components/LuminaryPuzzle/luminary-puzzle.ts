export default () => {
    const name = 'luminary-puzzle'

    const html = `
        <div id="game"></div>
        <menu id="menu">
            <li><button id="check" type="button" part="button">Check</button></li>
            <li><button id="solve" type="button" part="button">Solve</button></li>
            <li><button id="clear" type="button" part="button">Clear</button></li>
        </menu>
        <p id="feedback"></p>
    `

    const css = `
        :host {
            display: block;
        }

        #game {
            container-type: inline-size;
            margin: auto;
        }

        table {
            border-spacing: 0.25em;
            margin-inline: auto;
            transform: translateX(-1em);
        }

        td {
            border: 0.1em dotted var(--t-fg-a);
            text-align: center;
            border-radius: 0.25em;
            width: 2em;
            height: 2em;
            aspect-ratio: 1;
            line-height: 1;
            position: relative;
        }

        td.reading {
            font-weight: bold;
            background: oklch(18% 0.021 255);
            border-style: solid;
        }

        td.row-clue, td.col-clue, td.corner {
            font-size: 0.875em;
            border: none;
        }

        td.row-clue {
            text-align: end;
            padding: 0.25em;
        }

        td.col-clue {
            text-align: center;
            vertical-align: bottom;
            padding: 0.25em;
        }

        td.star-value {
            border-style: solid;
            border-color: var(--t-yellow-b);
            box-shadow: 0 0 0.25em 0 oklch(1 0 0 / 0.25);
            background: var(--t-bg-b);
        }

        td.star-value::before {
            content: "";
            display: block;
            background: var(--t-yellow-a);
            opacity: 0.25;
            position: absolute;
            inline-size: 100%;
            aspect-ratio: 1;
            inset: 4% 0 auto 0;
            clip-path: polygon(
                50%     5%,
                61.9%   33.62%,
                92.8%   36.09%,
                69.26%  56.26%,
                76.45%  86.41%,
                50%     70.25%,
                23.55%  86.41%,
                30.74%  56.26%,
                7.2%    36.09%,
                38.1%   33.62%
            );
            z-index: 1;
        }

        input {
            border: none;
            background: none;
            display: block;
            inline-size: 100%;
            block-size: 100%;
            position: absolute;
            inset: 0;
            text-align: center;
            font-size: 1em;
            font-family: var(--f-code);
            color: var(--t-yellow-b);
            font-weight: bold;
            box-sizing: border-box;
            z-index: 2;
            letter-spacing: -0.1ch;
        }

        td.no-star input {
            color: var(--t-red-b);
        }

        #menu {
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5em;
            padding: 0;
        }

        #feedback {
            text-align: center;
            font-weight: bold;
            min-block-size: 1.5em;
        }

        #feedback.good {
            color: var(--t-green-b);
        }

        #feedback.bad {
            color: var(--t-red-b);
        }

        button#check {
            background: var(--t-green-a) !important;
        }

        #solve {
            background: var(--t-yellow-a) !important;
        }

        #clear {
            background: var(--t-red-a) !important;
        }

        .visually-hidden {
            clip-path: inset(50%);
            height: 1px;
            width: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
        }
    `

    const template = document.createElement('template')
    template.innerHTML = `${html}<style>${css}</style>`

    window.customElements.define(name, class extends HTMLElement {
        private puzzle: {
            rows: number,
            cols: number,
            rowCounts: (number | null)[],
            colCounts: (number | null)[],
            K: number | null,
            shown: Map<string, number>,
        } = {
            rows: 0,
            cols: 0,
            rowCounts: [],
            colCounts: [],
            K: 0,
            shown: new Map(),
        }

        constructor() {
            super()

            this
                .attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        static get observedAttributes() {
            return ['code']
        }

        connectedCallback() {
            try {
                this.puzzle = this.parsePuzzle(this.getAttribute("code") ?? "")
                this.renderGrid()

                this.shadowRoot?.querySelector("#check")?.addEventListener("click", this.onCheckClick)
                this.shadowRoot?.querySelector("#solve")?.addEventListener("click", this.onSolveClick)
                this.shadowRoot?.querySelector("#clear")?.addEventListener("click", this.onClearClick)
            } catch (e) {
                console.error(e)
            }
        }

        attributeChangedCallback() {
            try {
                this.puzzle = this.parsePuzzle(this.getAttribute("code") ?? "")
                this.renderGrid()
            } catch (e) {
                console.error(e)
            }
        }

        onCheckClick = () => {
            const solution = this.findSolution()
            const userValues = this.getStarValues()

            const correctMessage = "Correct! You solved the puzzle!"
            const wrongMessage = "Hmm, some stars are either misplaced or have the wrong value."

            if (solution == null) {
                this.setFeedback("Oops! Solution not found.", "bad")
                return
            }

            if (solution.stars.length !== userValues.stars.length) {
                this.setFeedback(wrongMessage, "bad")
                return
            }

            for (let i = 0; i < solution.stars.length; ++i) {
                const solutionCell = solution.stars[i]
                const solutionValue = solution.values[i]
                const respectiveCell = userValues.stars.find(([r, c]) => r === solutionCell[0] && c === solutionCell[1])

                if (respectiveCell == null || respectiveCell[2] !== solutionValue) {
                    this.setFeedback(wrongMessage, "bad")
                    return
                }
            }

            this.setFeedback(correctMessage, "good")
        }

        onSolveClick = () => {
            this.clearAllCells()
            const solution = this.findSolution()

            if (solution != null) {
                for (let i = 0; i < solution.stars.length; ++i) {
                    this.markCell(solution.stars[i][0], solution.stars[i][1], solution.values[i])
                }

                this.setFeedback("Here's the solution!", "neutral")
            } else {
                this.setFeedback("Oops! Solution not found.", "bad")
            }
        }

        onClearClick = () => {
            this.clearAllCells()
            this.setFeedback("", "neutral")
        }

        markCell(row: number, column: number, value: number) {
            const cells = Array.from(this.shadowRoot?.querySelectorAll(".cell") ?? [])
            const cell = cells[row * this.puzzle.cols + column]
            const input = cell.querySelector("input")
            if (input) {
                input.value = value.toString()
                cell.classList.add("star-value")
            }
        }

        private setFeedback(message: string, flavor: "good" | "bad" | "neutral") {
            const feedback = this.shadowRoot?.querySelector("#feedback")

            if (feedback != null) {
                feedback.className = ""
                feedback.classList.add(flavor)
                feedback.textContent = message
            }
        }

        private clearAllCells() {
            this.shadowRoot?.querySelectorAll("input").forEach((el) => {
                el.value = ""
                el.closest("td")?.classList.remove("star-value")
            })
        }

        private updateCell = (cell: HTMLElement) => (e: Event) => {
            const input = e.target as HTMLInputElement
            cell.classList.toggle("star-value", input.value !== "" && input.value !== "x")
            cell.classList.toggle("no-star", input.value !== "" && input.value === "x")
        }

        private getStarValues() {
            const cells = Array.from(this.shadowRoot?.querySelectorAll(".cell") ?? [])

            const stars: number[][] = []
            const values: number[] = []

            for (let i = 0; i < cells.length; ++i) {
                const cell = cells[i]
                if (cell.classList.contains("star-value")) {
                    const value = cell.querySelector("input")?.value
                    if (value != null && value.length > 0) {
                        stars.push([Math.floor(i / this.puzzle.cols), i % this.puzzle.cols, parseInt(value)])
                    }
                }
            }

            return { stars }
        }

        private parsePuzzle(enc: string) {
            const parts = enc.trim().split(':');
            if (parts.length !== 4) throw new Error('Expected RxC:row_counts:col_counts:readings');
            const [rows, cols] = parts[0].split('x').map(Number);
            const rowCounts = parts[1].split(',').map(s => s.trim() === '?' ? null : Number(s));
            const colCounts = parts[2].split(',').map(s => s.trim() === '?' ? null : Number(s));
            const rowSum = rowCounts.every(c => c !== null) ? rowCounts.reduce((a, b) => a + b, 0) : null;
            const colSum = colCounts.every(c => c !== null) ? colCounts.reduce((a, b) => a + b, 0) : null;
            const K = rowSum ?? colSum;
            const shown = new Map();

            parts[3].split('/').forEach((rowStr, r) => {
                rowStr.split(',').forEach((cell, c) => {
                const t = cell.trim();
                if (t !== '?') shown.set(`${r},${c}`, parseInt(t));
                });
            });

            return { rows, cols, rowCounts, colCounts, K, shown }
        }

        private renderGrid() {
            const { rows, cols, rowCounts, colCounts, shown } = this.puzzle

            const table = document.createElement("table")
            const tbody = document.createElement("tbody")

            for (let r = -1; r < rows; ++r) {
                const tr = document.createElement("tr")
                for (let c = -1; c < cols; ++c) {
                    const td = document.createElement("td")

                    if (r === -1 && c === -1) {
                        td.classList.add("corner")
                    } else if (r === -1 && c !== -1) {
                        td.classList.add("col-clue")
                        td.textContent = `${colCounts[c] ?? "?"}`
                    } else if (r >= 0 && c === -1) {
                        td.classList.add("row-clue")
                        td.textContent = `${rowCounts[r] ?? "?"}`
                    } else {
                        const isShown = shown.get(`${r},${c}`)
                        if (isShown != null) {
                            td.classList.add("reading")
                            td.classList.add("cell")
                            td.textContent = isShown.toString()
                        } else {
                            const id = `star-${r}-${c}`
                            const label = document.createElement("label")
                            label.classList.add("visually-hidden")
                            label.setAttribute("for", id)
                            label.textContent = `Cell ${r}, ${c}`

                            const input = document.createElement("input")
                            input.id = id
                            input.type = "text"
                            input.autocomplete = "off"
                            input.oninput = this.updateCell(td)

                            td.classList.add("cell")
                            td.appendChild(label)
                            td.appendChild(input)
                        }
                    }

                    tr.appendChild(td)
                }
                tbody.appendChild(tr)
            }

            table.appendChild(tbody)

            this.shadowRoot?.querySelector("#game")?.replaceChildren(table)
        }

        private findSolution() {
            const { shown } = this.puzzle
            const placements = this.generatePlacements()

            for(const stars of placements) {
                const k = stars.length
                const base = Array.from({ length: k }, (_, i) => i + 1)
                for(const values of perms(base)) {
                    let ok = true
                    for(const [key, exp] of shown) {
                        const [r, c] = key.split(',').map(Number)
                        if(readingVal(r, c, stars, values) !== exp) {
                            ok = false
                            break
                        }
                    }
                    if (ok) return { stars, values }
                }
            }

            return null
        }

        private generatePlacements() {
            const { rows, cols, rowCounts, colCounts, K, shown } = this.puzzle;
            const results: number[][][] = []
            const placed: number[][] = []
            const colUsed = new Array(cols).fill(0)
            function bt(row: number) {
                if(row === rows) {
                    if(!colUsed.every((v, i) => colCounts[i] === null || v === colCounts[i]))
                        return
                    if (K !== null && placed.length !== K)
                        return
                    results.push(placed.map(s => [...s]))
                    return
                }
                const needed = rowCounts[row]
                const cands: number[] = []
                for (let c = 0; c < cols; c++) {
                    if (shown.has(`${row},${c}`)) continue
                    if (colCounts[c] !== null && colUsed[c] >= (colCounts[c] ?? 0)) continue
                    if (placed.some(([pr, pc]) => adj(row, c, pr, pc))) continue
                    cands.push(c)
                }
                const maxPick = needed !== null ? needed : cands.length
                function pick(si: number, chosen: number[]) {
                    if (needed === null || chosen.length === needed) {
                        for (const c of chosen) {
                            placed.push([row, c])
                            colUsed[c]++
                        }
                        bt(row + 1)
                        for (const c of chosen) {
                            placed.pop()
                            colUsed[c]--
                        }
                    }
                    if (chosen.length < maxPick) {
                        for (let i = si; i < cands.length; i++) {
                            const c = cands[i]
                            if(chosen.length > 0 && Math.abs(chosen[chosen.length - 1] - c) <= 1) continue
                            pick(i + 1, [...chosen, c])
                        }
                    }
                }
                pick(0, [])
            }

            bt(0)

            return results
        }
    })
}

function* perms(arr: number[]): Iterable<number[]> {
    if (arr.length <= 1) {
        yield [...arr]
        return
    }
    
    for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0,i),...arr.slice(i+1)]
        for (const p of perms(rest))
            yield [arr[i],...p]
    }
}

function readingVal(r: number, c: number, stars: number[][], values: number[]) {
    let s = 0
    for(let i = 0; i < stars.length; i++)
        if(stars[i][0] === r || stars[i][1] === c)
            s += values[i]
        return s
}

function adj(r1: number, c1: number, r2: number, c2: number) {
    return Math.abs(r1 - r2) <= 1 && Math.abs(c1 - c2) <= 1 && !(r1 === r2 && c1 === c2)
}
