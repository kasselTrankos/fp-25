import { Observer } from "./observer.js";
import { noop } from "./common.js";

const prototype = {
  'fantasy-land/map': stream$map,
  'map': stream$map,
  // 'fantasy-land/chain': stream$chain,
  // 'fantasy-land/concat': stream$concat,
  // 'concat': stream$concat,
  // 'chain': stream$chain,
  // 'join': stream$join,
  'subscribe': stream$subscribe,
  // 'fantassy-land/ap': stream$ap,
  // 'ap': stream$ap,
  // 'concatMap': stream$concat$map,
  // 'merge': stream$merge,
  // 'mergeMap': stream$merge$map

};
function Stream(constructor){
  const stream = Object.create(prototype)
  
  stream._constructor = constructor
  return stream
}
// fantasy-land/of :: Applicative f => a -> f a
Stream.of = function (x) {
  return new Stream(({ next, err, complete }) => {
    Observer( next(x), err || noop, complete || noop)
  })
}
  
// map :: Functor f => f a ~> (a -> b) -> f b
function stream$map(f) {
  return Stream( handler => this.subscribe({
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

function stream$subscribe(o) {
  return run.call(this, o);
}

export {Stream};