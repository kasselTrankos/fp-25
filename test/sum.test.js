import { assert } from "chai";
import Sum from "../lib/sum.js";


describe('Sum', () => {
  it('concat', () => {
    const a = Sum.of(1);
    const b = Sum.of(1);
    const c = Sum.of(1);
    assert.equal(a.concat(b.concat(c)).extract(), a.concat(b).concat(c).extract());
  });
});
