export type Ordered = {
	order: number
}

export const byOrder = (a: Ordered, b: Ordered) =>
	a.order - b.order