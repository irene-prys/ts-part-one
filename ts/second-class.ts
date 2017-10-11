export class SecondClass {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    public toString = (): string => {
        return `Object of type SecondClass with value: ${this.value}`;
    }

    public valueOf = (): boolean => {
        return this.value.toUpperCase().indexOf("SECOND") != -1;
    }
}

let obj = new SecondClass('SECOND CLASS');

console.log(obj.toString());
console.log(obj.valueOf());

let obj2 = new SecondClass('hello');
console.log(obj2.valueOf());
