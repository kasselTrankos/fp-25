import { curry } from "ramda";
const liftN = () => {}

// lift2 :: Applicative f => (a -> b -> c, f a, f b) -> f c
export const liftA2 = curry((f, a, b) => b.ap(a.map(f)))

