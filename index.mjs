import Sum from "./lib/sum.js";
import Task from "./lib/Task.js";
import { liftA2 } from "./utils/index.js";
// // const taskRes = curry((time, x) => new Task((res, rej)=> {
// //     setTimeout(()=> {
// //         res(x)
// //     }, time)
// // }));

// // const taskRej = err => new Task((_, rej) => setTimeout(()=> rej(err), 90));

const two = Sum.of(1).chain(x => Sum.of(x +1)).ap(Sum.of(x => x + 1));
const one = liftA2(x => y => x + y, Sum.of(5), Sum.of(2));
const three = liftA2(x => y => x + y, Task.of(5), Task.of(2));
three.fork(x => console.log('[KO] ', x), x => console.log('[OK] ', x));
console.log({two, one})


