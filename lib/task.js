function Task(computation, complete) {
    this.fork = computation;
    this.cleanup = complete || function() {};
  }
  
  // fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
  Task.prototype.map = function(fn) {
    return new Task((resolve, reject) => {
      this.fork(
          (data) => resolve(fn(data)),
          (error) => reject(error),
      );
    }, this.cleanup);
  };
  
  
  module.exports = {
      Task
  };