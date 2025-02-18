import { Observer } from "./observer.js";
import { noop } from "./common.js";

const prototype = {
  'fantasy-land/map': interval$map,
  'map': interval$map,
  // 'fantasy-land/chain': stream$chain,
  // 'fantasy-land/concat': stream$concat,
  // 'concat': stream$concat,
  // 'chain': stream$chain,
  // 'join': stream$join,
  'subscribe': interval$subscribe,
  // 'fantassy-land/ap': stream$ap,
  // 'ap': stream$ap,
  // 'concatMap': stream$concat$map,
  // 'merge': stream$merge,
  // 'mergeMap': stream$merge$map

};
function interval(constructor){
  const interval = Object.create(prototype)
  
  interval._constructor = constructor;
  
  return interval;
}
// fantasy-land/of :: Applicative f => a -> f a
interval.of = function (x) {
  const i =  new interval(({ next, err, complete }) => {
    let t = 0;
    const _interval = setInterval(
      ()=> {
        next(++t);
    }, x);
    const observer = Observer( next(t), err || noop,  ()=> {
      clearInterval(_interval);
      complete()
    });
    return observer;
  });
  return i;
}
  
// map :: Functor f => f a ~> (a -> b) -> f b
function interval$map(f) {
  return interval( handler => this.subscribe({
    next: x => handler.next(f(x)),
    complete: handler.complete, // void, by definition you no must do nothing at this point
    error: handler.error //
  }));
}

function run({ next, complete, error }) {
  return this._constructor({
    next: next || noop,
    complete: complete || noop,
    error: error || noop
  });
}

function interval$subscribe(o) {
  return run.call(this, o);
}

export {interval};