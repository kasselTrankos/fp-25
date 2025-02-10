function Task(computation, complete) {
  this.fork = computation;
  this.cleanup = complete || function() {};
}
// fantasy-land/of :: Applicative f => a -> f a
Task.of= function(x){
  return new Task((res)=> res(x))
}
  
// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
Task.prototype.map = function(fn) {
  return new Task((resolve, reject) =>
    this.fork(
      x => resolve(fn(x)),
      x => reject(x),
    )
  , this.cleanup);
};

// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
Task.prototype.ap = function(t){
  console.log(t, 'aaa', t.chain)
  return t.chain(f => console.log(f, '89') ||  this.map(f));
}

// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
Task.prototype.chain = function(f) {
  return new Task((resolve, reject)=> 
    this.fork(
      x => f(x).fork(resolve),
      x => reject(x)
    ),
    this.cleanup
  );
}
  
  
module.exports = {
  Task
};