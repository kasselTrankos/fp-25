import { from } from "rxjs";
import { Observer } from "./lib/rx.js";
import { logger } from "./utils/index.js";
import { interval } from 'rxjs';

const obs = {
  next: logger('NEXT'), 
  complete: logger('ERR'), 
  cancel: logger('COMPLETE')
}
const observable1 = interval(900);
const observable2 = interval(2000);
const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
subscription.add(childSubscription);
setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 10000);