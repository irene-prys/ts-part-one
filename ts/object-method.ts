import { FirstClass } from "./first-class";
import { SecondClass } from "./second-class";

function getInfo(obj: FirstClass | SecondClass): string {
    return obj.toString();
}

console.log("Print info method (first class): " + getInfo(new FirstClass("FIRST")));
console.log("Print info method (first class): " + getInfo(new FirstClass("SECOND")));