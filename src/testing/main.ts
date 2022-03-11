import { assert } from "./util"

function add(a: number, b: number) : number {
    return a + b
}

assert("add(a, b)", 4, add(3, 2))

