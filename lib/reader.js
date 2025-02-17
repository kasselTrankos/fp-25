function Reader(run) {
  if (!(this instanceof Reader)) {
    return new Reader(run);
  }
  this.run = run;
}


Reader.run = function() {
  return reader.run.apply(reader, [].slice.call(arguments, 1));
};
  
// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
Reader.prototype.chain = function(f) {
  var reader = this;
  return new Reader(r  => f(this.run(r)).run(r)
  );
};
  
  Reader.prototype.ap = function(a) {
    return this.chain(f => a.map(f));
  };

  Reader.prototype.map = function(f) {
    return new Reader(x => f(this.run(x)))
  };

// fantasy-land/of :: Applicative f => a -> f a
Reader.of = function(a) {
  return new Reader(() => a);
};

export default Reader;

