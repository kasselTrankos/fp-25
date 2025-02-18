import pkg from 'daggy';
const {taggedSum} = pkg;

const Maybe = taggedSum('Maybe', {
  Just: ['x'], 
  Nothing: []
});

// fantasy-land/of :: Applicative f => a -> f a
Maybe.of = function(x){
 return x === null ? Maybe.Nothing : Maybe.Just(x)
}

// fantasy-land/map :: Functor f => f a ~>(a -> b) -> b 
Maybe.prototype.map = function (f) {
  return this.cata({
    Just: x => Maybe.Just(f(x)),
    Nothing: () => this
  });
}

// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
Maybe.prototype.ap = function(that){
  return this.cata({
    Just: x => that.cata({
      Just: f => Maybe.Just(f(x)),
      Nothing: ()=> {}
    }),
    Nothing: () => this
  });
}

// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
Maybe.prototype.chain = function(f) {
  return this.cata({
    Just: x => f(x),
    Nothing: () => this
  });
}

// fantasy-land/alt :: Alt f => f a ~> f a -> f a
Maybe.prototype.alt = function(that){
  return this.cata({
    Just: () => that.cata({
      Just: () => that,
      Nothing: ()=> this
    }),
    Nothing: () => that
  });
}


export default Maybe;