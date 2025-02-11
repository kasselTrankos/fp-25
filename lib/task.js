function Task(computation, complete) {
  this.fork = computation;
  this.cleanup = complete || function() {};
}
// fantasy-land/of :: Applicative f => a -> f a
Task.of = function(x){
  return new Task((_, resolve) => resolve(x))
}
  
// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
Task.prototype.map = function(fn) {
  return new Task((reject, resolve) =>
    this.fork(
      reject,
      x => resolve(fn(x)),
    )
  , this.cleanup);
};

// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
Task.prototype.ap = function(t){
  return t.chain(f => this.map(f));
}

// Promise.prototype.ap = function(a) {
//   return Promise((resolve) => {
//       return this.fork((f) => a.map(f).fork(resolve));
//   });
// };

// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
Task.prototype.chain = function(f) {
  return new Task((reject, resolve)=> 
    this.fork(
      reject,
      x => f(x).fork(reject, resolve),
    ),
    this.cleanup
  );
}
  
  
export default Task;