// function signatures
/***
 * Function signature - bu funksiyaning umumiy deklaratsiyasining bir qismi bo'lib, tarjima vositalariga aynan shu funksiyani boshqalar qatorida aniqlash imkonini beradi. Turli xil dasturlash tillarida imzo ( imzo ) haqida turli xil fikrlar mavjud.
 */

type Num = (number | string)

let num: Num = 5

let num1: Num = 4
let num2: Num = 5
let num3: Num = 5

let b = 5

// function signature
type BinaryFunction = (a: number, b: number) => number

// (number, number) => string
// const add: BinaryFunction = function (a: number, b: number) : number {
		// return a + b
// }

const add: BinaryFunction = (a: number, b: number) => a + b

add(5, 4)

const mm: BinaryFunction = (a: number, b: number) => a * b

console.log(mm(5, 4));

function mult(a: number, b: number) : number {
	return a * b
}

let cc: BinaryFunction = mult
