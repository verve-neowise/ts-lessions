// isOdds([])

import { assert } from "../testing/util";

// default declaration
// function isOdds ( arr: number[] ) {

// }

// anonimus declaration
// const isOdds1 = function ( arr: number[] ) {

// }


type Predicate = (n: number) => boolean

const isOdds = (arr: number[], p: Predicate) => {
	let m: number[] = []
	for (const element of arr) {
		
		if (p(element)) {
			m.push(element)
		}
	}
	return m
}

// let arr2 = [1, 2, 2, 3, 3, 4, 5, 6,67].filter((n: number) => n % 2 === 1)


// console.log(
// 	isOdds(, (n: number) => n % 2 == 0),
// 	isOdds([1, 2, 2, 3, 3, 4, 5, 6,67], (n: number) => n % 2 == 1),
// 	isOdds([1, 2, 2, 3, 3, 4, 5, 6,67], (n: number) => n % 3 == 0)
// );

let m = [1, 2, 3, 4, 4, 5, 5, 6, 6]


// // m.filter()
// m.fill()
// m.find()
// m.map()

// function fill(m) {

// }













// assert('isOdd', [1, 3, 5], isOdds([1, 2, 3, 4, 5, 6]))
// assert('isEven', [2, 4, 6], isEven([1, 2, 3, 4, 5, 6]))
// assert('is3Div', [3, 6], is3Div([1, 2, 3, 4, 5, 6]))
















