import { assert } from "chai";
import Task from "../lib/Task.js";

it('Chai', () => {
  const m = Task.of(1);
  const f = x => Task.of(x + 1);
  const g = x => Task.of(x + 11);
  let actual;
  let expected;
  m.chain(f).chain(g).fork(x => (actual = x));
  m.chain(x => f(x).chain(g)).fork(x =>( expected = x));
  assert.equal(actual, expected);
});

