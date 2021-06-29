export class Sut {
    public constructor(
        private readonly dep: Dependency,
    ) { }

    public doSomething() {
        const dep = this.dep;
        return `${dep.foo()} - ${dep.bar()}`;
    }
    public add(num1: number | NumWrapper, num2: number | NumWrapper) {
        return this.dep.add(num1, num2);
    }
}

export class Dependency {
    public readonly member: number = 42;
    public get prop(): number { return 42; }
    public foo() {
        return 'real foo';
    }
    public bar() {
        return 'real bar';
    }
    public add(num1: number | NumWrapper, num2: number | NumWrapper) {
        num1 = typeof num1 === 'number' ? num1 : num1.num;
        num2 = typeof num2 === 'number' ? num2 : num2.num;
        return num1 + num2;
    }
    public fizz(_arg0: number, _arg1: NumWrapper, _arg2: string) { /* noop */ }
}

export class NumWrapper {
    public constructor(public readonly num: number) { }
}