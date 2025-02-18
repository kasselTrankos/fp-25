import { from } from "rxjs";
import { Observer, Stream } from "./lib/cofree.js";
import { logger } from "./utils/index.js";

const obs = Observer(
  x => {
    logger('NEXT')(x)
    return x + 1
  }, 
  logger('ERR'), 
  logger('COMPLETE')
);
const rx = from([1,2]);
rx.subscribe(obs)
console.log(rx.pipe)