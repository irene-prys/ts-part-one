import { FirstClass } from "./FirstClass";
import { SecondClass } from "./SecondClass";

function getInfo(obj: FirstClass | SecondClass): string {
    return obj.toString();
}

console.log("Print info method (first class): " + getInfo(new FirstClass("FIRST")));
console.log("Print info method (first class): " + getInfo(new FirstClass("SECOND")));