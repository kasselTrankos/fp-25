import { Observer } from "./observer.js";
import { noop } from "./common.js";

const prototype = {
  'fantasy-land/map': from$map,
  'map': from$map,
  // 'fantasy-land/chain': stream$chain,
  // 'fantasy-land/concat': stream$concat,
  // 'concat': stream$concat,
  // 'chain': stream$chain,
  // 'join': stream$join,
  'subscribe': from$subscribe,
  // 'fantassy-land/ap': stream$ap,
  // 'ap': stream$ap,
  // 'concatMap': stream$concat$map,
  // 'merge': stream$merge,
  // 'mergeMap': stream$merge$map

};
function from(constructor){
  const from = Object.create(prototype)
  
  from._constructor = constructor
  return from
}
// fantasy-land/of :: Applicative f => a -> f a
from.of = function (x) {
  return new from(({ next, err, complete }) => {
    Observer( next(x), err || noop, complete || noop)
  })
}
  
// map :: Functor f => f a ~> (a -> b) -> f b
function from$map(f) {
  return from( handler => this.subscribe({
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

function from$subscribe(o) {
  return run.call(this, o);
}

export {from};