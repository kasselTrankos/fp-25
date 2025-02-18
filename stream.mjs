import { interval, Stream, Observer} from './lib/rx.js';
import { logger } from "./utils/index.js";

const _interval = interval.of(900);
let t;
const obs = {
  next: x=> {
    logger('NEXT', x);
    t = x;
  }, 
  complete:() => logger('COMPLETE', `has finished, ${t}`), 
  cancel: logger('COMPLETE')
}
const subs = _interval.map(x => x + 123).subscribe(obs);
setTimeout(()=> {
  subs.complete();
}, 10000);