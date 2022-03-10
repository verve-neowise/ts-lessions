// ikkita sonni summasi
// let a: number = 5
// let b: number = 9
// console.log(a + b)


// ikkita sonni summasini chiqaradigan funksiya

// Function declaration
// 1. named function - nomlangan funksiya
//       name ( parameters ) : type { block }
// 1 > void - bo`shliq
function plus (a: number , b: number, c: number) {
  console.log(a + b + c)
}

plus(5, 9, 5)
plus(7, 3, 1)


// 2 > with result
// ikki sonni ko`paytiradi
function multiplicate(a: number, b: number) : number {
  console.log("a son keldi: ", a);
  console.log("b son keldi: ", b);

  let m: number = a + b

  return a * b
}

let a: number = multiplicate(5, 3)

console.log(a)

