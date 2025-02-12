import { curry } from "ramda";
import Sum from "./lib/sum.js";
import Task from "./lib/Task.js";
import { liftA2 } from "./utils/index.js";
import { insideOut, logger } from "./utils/index.js";

const taskRes = curry((time, x) => new Task((_, resolve)=> {
  setTimeout(()=> {
    resolve(x)
  }, time)
}));


const query = x => new Task((reject, resolve)=> {
  fetch(`https://jsonplaceholder.typicode.com/todos/${x}`).then(response => response.text()).then(resolve).catch(reject);
});

const proc = x => query(x).chain(x => Task.of(JSON.parse(x)))

const ids = [1,2,3];
const seven = insideOut(Task, ids.map(proc));
seven.fork(logger('KO'), logger('SEVEN'));



