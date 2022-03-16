import { assert } from "./util"

function add(a: number, b: number) : number {
    return a + b
}

// assert("compare arrays", [1, 2, 3, 4, 5, 6], [1, 2, 3, 4,5])


let s: string = JSON.stringify([1, 2, 3, 4, 5, 6])
let s1: string = JSON.stringify([1, 2, 3, 4, 5])
console.log(s);
console.log(s1);

