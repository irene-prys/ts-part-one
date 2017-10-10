export class FirstClass {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    public toString = () : string => {
        return `Object of type FirstClass with value: ${this.value}`;
    }

    public valueOf = () : boolean => {
        return this.value.toUpperCase().indexOf("FIRST") != -1;
    }
}

let obj = new FirstClass('FIRST CLASS');

console.log(obj.toString());
console.log(obj.valueOf());

let obj2 = new FirstClass('hello');
console.log(obj2.valueOf());

