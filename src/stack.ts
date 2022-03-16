export default class Stack {

	readonly array: number[]

	constructor(array: number[]) {
		this.array = array
	}

	push(n: number) {
		this.array.push(n)
	}

	pop(): number {
		return this.array[this.array.length - 1]!
	}

	peek() : number {
		return this.array[this.array.length - 1]
	}
}