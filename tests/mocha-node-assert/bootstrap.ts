import { Assert, AssertionFactory } from "@netatwork/spy";
import { strict, AssertionError } from 'assert';

before(() => {
    const assert: Assert = {
        strictEqual: strict.strictEqual,
        deepStrictEqual: strict.deepStrictEqual,
        isAbove(actual, expected, message) {
            if (actual <= expected) {
                throw new AssertionError({ message, actual, expected });
            }
        }
    }
    AssertionFactory.configure(assert);
});
