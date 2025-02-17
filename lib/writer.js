function Writer(l, r){
  this[0] = String(l).trim();
  this[1] = r;
}

// fantasy-land/of :: Applicative f => a -> f a
Writer.of = function(r){
  return new Writer(r, r);
}

// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
Writer.prototype.map = function(fn){
  return new Writer(this[0], fn(this[1]))
}

// toString :: () -> String
Writer.prototype.toString = function(){
  return `[${this[0]}, ${this[1]}]`
}

// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
Writer.prototype.ap = function(T){
  return new Writer(T[0].concat(' ', this[0]), T[1](this[1]))
};


export default Writer;