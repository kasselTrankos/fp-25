import { curry } from "ramda";
// lift2 :: Applicative f => (a -> b -> c, f a, f b) -> f c
export const liftA2 = curry((f, a, b) => b.ap(a.map(f)));

// append :: a -> [a] -> [a]
const append = y => xs => xs.concat([y]);

// insideOut :: Applicative f => [f a] -> f [a]
export const insideOut = (T, xs) => xs.reduce((acc, x) => liftA2(append, x, acc), T.of([]));

// logger :: String -> a -> String
export const logger = curry((msg, x)=> console.log(`[${msg}]: `,x));

// parse :: String -> {}
export const parse = x => JSON.parse(x);