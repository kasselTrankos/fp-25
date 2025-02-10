const { Task } = require("./lib/Task");
const { curry } = require('ramda');
const logger = msg => x =>  console.log(`${msg}: ${x}`)


const sum1 = x =>  x + 1;
const multBy = curry((x, y) => x * y);
const add = curry((x, y)=> x + y);
const molo = x => Task.of(x + 7) 


const taskRes = x => new Task((res, rej)=> {
    setTimeout(()=> {
        res(x)
    }, 100)
});


const taskRej = err =>  new Task((_, rej) => setTimeout(()=> rej(err), 90));
// // task(1).map(add(980)).map(sum1).chain(molo)
// taskRes(1)
// .map(add(2))
// .chain(molo)
// .fork(logger('[OK]'), logger('[KO]')) // Hello

const tt = Task.of(x => x + 1);
const t1 = Task.of(3);
taskRes(2).chain(molo).ap(tt).fork(logger('[OK 1 ]'), logger('[KO 1]')) // Hello