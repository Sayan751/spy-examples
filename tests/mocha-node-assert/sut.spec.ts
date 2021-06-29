import { Spy } from '@netatwork/spy';
import { strict } from 'assert';
import { Dependency, Sut } from 'src-package';

describe('sut', function () {

    it('doSomething', function () {
        // arrange
        const spy = Spy.create(new Dependency(), true, { foo() { return 'fake foo'; } });
        const sut = new Sut(spy.proxy);

        // act
        const actual = sut.doSomething();

        // assert
        strict.strictEqual(actual, 'fake foo - real bar');

        spy.isCalled('foo', 1);
        spy.isCalled('bar', 1);
        spy.isCalled('add', 0);

        spy.isCalled('foo');
        spy.isCalled('bar');

        spy.isCalledWith('foo', [[]]);
        spy.isCalledWith('bar', [[]]);
    });

    it('add', function () {
        // arrange
        const spy = Spy.create(new Dependency(), true);
        const sut = new Sut(spy.proxy);

        // act
        const actual = sut.add(40, 2);

        // assert
        strict.strictEqual(actual, 42);

        spy.isCalled('add', 1);
        spy.isCalled('foo', 0);
        spy.isCalled('bar', 0);

        spy.isCalled('add');

        spy.isCalledWith('add', [[40, 2]]);
    });
});