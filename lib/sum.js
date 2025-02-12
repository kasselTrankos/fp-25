function Sum(x){
  this._x = x;
};

// fantasy-land/concat :: Semigroup a => a ~> a -> a
Sum.prototype.concat = function(a){
  return Sum.of(this._x + a._x);
};

// fantasy-land/extract :: Comonad w => w a ~> () -> a
Sum.prototype.extract = function(){
  return this._x;
};

// fantasy-land/of :: Applicative f => a -> f a
Sum.of = function(x) {
  return new Sum(x);
};

// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
Sum.prototype.chain = function(m) {
  return m(this._x)
};

// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
Sum.prototype.map = function(fn) {
  return Sum.of(fn(this._x))
};

// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
Sum.prototype.ap = function(s){
  return s.chain(f => this.map(f));
};

export default Sum;