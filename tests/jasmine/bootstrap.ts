import { Assert, AssertionFactory } from "@netatwork/spy";
import { SpecReporter } from "jasmine-spec-reporter";

beforeAll(() => {
    const assert: Assert = {
        strictEqual(actual: any, expected: any, message: string) {
            expect(actual)
                .withContext(message)
                .toBe(expected);
        },
        deepStrictEqual(actual: any, expected: any, message: string) {
            expect(actual)
                .withContext(message)
                .toEqual(expected);
        },
        isAbove(actual, expected, message) {
            expect(actual)
                .withContext(message)
                .toBeGreaterThan(expected);
        }
    }
    AssertionFactory.configure(assert);

    // Not important wrt. Spy 
    const env = jasmine.getEnv();
    env.clearReporters();
    env.addReporter(new SpecReporter());
});
