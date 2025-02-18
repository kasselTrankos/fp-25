import { curry } from "ramda";
import Task from "./lib/Task.js";
import Writer from "./lib/writer.js";
import Reader from "./lib/reader.js";
import Maybe from "./lib/maybe.js";
import { insideOut, logger, parse } from "./utils/index.js";

const taskRes = curry((time, x) => new Task((_, resolve)=> {
  setTimeout(()=> {
    resolve(x)
  }, time)
}));


const query = x => new Task((reject, resolve)=> {
  fetch(`https://jsonplaceholder.typicode.com/todos/${x}`).then(response => response.text()).then(resolve).catch(reject);
});

const proc = x => query(x).map(parse)

const ids = [1,2,3,4,5, 6, 7];
const seven = insideOut(Task, ids.map(proc));
// seven.fork(logger('KO'), logger('SEVEN'));


/// writer
const w = new Writer('Empiezo en 1', 1).map(x => x +1).ap(new Writer('increment', x=>x+1));;
// console.log(w.toString())

const tt = new Reader(x => x + 1).map(x =>  x + 1).map(x => x * 10).run(1);

// console.log(tt, '0000')
const {Just, Nothing} = Maybe;
const ll = Just(90).map(x => x +1).chain(x => Just(90 + x)).ap(Just(x => x -129)).alt(Nothing);
console.log({ll}, Nothing.alt(Just('0')));





