import { DateConverter } from "../ts/override-method";
const converter: DateConverter = new DateConverter();

describe('Override method (DateConverter)', () => {
    test('should work for string params', () => {
        expect(converter.dateConverter("01", "03", "2012")).toEqual(new Date(2012, 3, 1));
    });

    test('should work for number params', () => {
        expect(converter.dateConverter(25, 11, 2012)).toEqual(new Date(2012, 11, 25));
    });

    test('should work for number array', () => {
        expect(converter.dateConverter([23, 11, 2001])).toEqual(new Date(2001, 11, 23));
    });

    test('should work for string array', () => {
        expect(converter.dateConverter(["01", "05", "2003"])).toEqual(new Date(2003, 5, 1));
    });

    test('should work for date array (ignoring time)', () => {
        let nowDateWithoutTime: Date = new Date();
        nowDateWithoutTime.setHours(0, 0, 0, 0);

        expect(converter.dateConverter([new Date(2001, 0, 1), new Date(2002, 1, 2), new Date()]))
            .toEqual(expect.arrayContaining([new Date(2001, 0, 1), new Date(2002, 1, 2), nowDateWithoutTime]));
    });

    test('should throw error for number array with less then 3 params', () => {
        expect(() => {
            converter.dateConverter([23, 11]);
        }).toThrow();
    });

    test('should throw error for string array with less then 3 params', () => {
        expect(() => {
            converter.dateConverter(["23", "11"]);
        }).toThrow();
    });

    test('should throw error for empty array', () => {
        expect(() => {
            converter.dateConverter([]);
        }).toThrow();
    });
});
