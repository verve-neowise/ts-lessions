import Stack from "../stack"
import { assert } from '../testing/util'

let stack = new Stack([1, 2, 3, 4])

let x = stack.pop()

assert('pop value ', 4, x)
assert('stack state ', [1, 2, 3], stack.array)

