import { SecondClass } from "../ts/second-class";

describe('SecondClass', () => {
    it('should return  true for valuOf', () => {
        let obj: SecondClass = new SecondClass("Second one");
        obj.valueOf();
        expect(obj.valueOf()).toBe(true);
    });

    it('should return false for valuOf', () => {
        let obj: SecondClass = new SecondClass("First one");
        obj.valueOf();
        expect(obj.valueOf()).toBe(false);
    });
});