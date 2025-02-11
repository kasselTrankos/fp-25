function Sum(x){
  this._x = x;
}

// fantasy-land/concat :: Semigroup a => a ~> a -> a
Sum.prototype.concat = function(x){
  return Sum.of(this._x + x);
}


Sum.of = function(x) {
  return new Sum(x);
}

// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
Sum.prototype.chain = function(m) {
  return m(this._x)
}

export default Sum;