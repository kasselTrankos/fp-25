const { curry } = require('ramda');
const liftN = () => {}
// liftA :: (a -> b) -> T -> T -> T
const liftA2 = curry((g, f1, f2) => f1.map(g).ap(f2));

module.exports = {
  liftN,
  liftA2
}