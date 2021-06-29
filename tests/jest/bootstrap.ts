import { Assert, AssertionFactory } from "@netatwork/spy";

beforeAll(() => {
    const assert: Assert = {
        strictEqual(actual: any, expected: any, message: string) {
            expect(actual).toBe(expected, message);
        },
        deepStrictEqual(actual: any, expected: any, message: string) {
            expect(actual).toEqual(expected, message);
        },
        isAbove(actual, expected, message) {
            expect(actual).toBeGreaterThan(expected, message);
        }
    }
    AssertionFactory.configure(assert);
});