import { curry } from "ramda";
import Sum from "./lib/sum.js";
import Task from "./lib/Task.js";
// const { Sum } = require("./lib/sum");
// const { liftA2 } = require('./utils');
// const logger = msg => x =>  console.log(`${msg}: ${x}`);




// const sum1 = x => x + 1;
// const sum2 = x => x + 2;
// // const multBy = curry((x, y) => x * y);
// // const add = curry((x, y)=> x + y);
// // const molo = x => Task.of(x + 7) 


// // const taskRes = curry((time, x) => new Task((res, rej)=> {
// //     setTimeout(()=> {
// //         res(x)
// //     }, time)
// // }));



// // const taskRej = err => new Task((_, rej) => setTimeout(()=> rej(err), 90));
// // // task(1).map(add(980)).map(sum1).chain(molo)
// // taskRes(1)
// // .map(add(2))
// // .chain(molo)
// // .fork(logger('[OK]'), logger('[KO]')) // Hello


// // const tt = Task.of(x => x + 1);
// // const t1 = Task.of(3);

// const added = x => y=> x + y; 

// // const elevation = liftA2(x => y => x + y, Task.of(1), Task.of(2))
// // const mal = t1.ap(tt);
// // const one  = added(1)
// // console.log(one(1), 'z----')
// // Task.of(1).map(added).ap(Task.of(2))
// // m['fantasy-land/chain'](f)['fantasy-land/chain'](g) is equivalent 
// // to m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g)) (associativity)
// // Task.of(1).chain(sum1).chain(sum2).fork(logger('[OK 1 ]'), logger('[KO 1]')) // Hello
// const one = Sum.of(1).concat(1).chain(x => Sum.of(x + 1));
const two = Sum.of(1).chain(x => Sum.of(x +1))
console.log({two})


