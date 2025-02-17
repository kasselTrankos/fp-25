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

// map:: Functor f => f a ~>(a -> b) -> b 
Maybe.prototype.map = function (f) {
  return this.cata({
    Just: x => Maybe.Just(f(x)),
    Nothing: () => this
  });
}

Maybe.map = Maybe.prototype.map;
  


export default Maybe;