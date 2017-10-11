import { FirstClass } from "../ts/first-class";

describe('FirstClass', () => {
  it('should return  true for valuOf', () => {
    let obj: FirstClass = new FirstClass("First one");
    obj.valueOf();
    expect(obj.valueOf()).toBe(true);
  });

  it('should return false for valuOf', () => {
    let obj: FirstClass = new FirstClass("Hello world");
    obj.valueOf();
    expect(obj.valueOf()).toBe(false);
  });
});