export class DateConverter {
    dateConverter(dayOrDate: string, month: string, year: string): Date;
    dateConverter(dayOrDate: number, month: number, year: number): Date;

    dateConverter(days: Date[]): Date[];
    dateConverter(days: string[]): Date;
    dateConverter(days: number[]): Date;

    dateConverter(date: string): Date;
    dateConverter(date: Object): Date;

    dateConverter(dayOrDate: any, month?: any, year?: any): Date | Date[] {
        if (typeof dayOrDate === "string") {
            return this.convertStringDataToDate(dayOrDate, month, year);
        }
        if (typeof dayOrDate === "number") {
            return this.convertNumberDataToDate(dayOrDate, month, year);
        }

        if (typeof dayOrDate === "number") {
            return this.convertNumberDataToDate(dayOrDate, month, year);
        }

        if (Array.isArray(dayOrDate)) {
            if (dayOrDate.length == 0) {
                throw Error("Illegal argument exception!");
            } else {
                return this.convertArrayToDate(dayOrDate);
            }
        }

    }

    private convertStringDataToDate(day: string, month?: string, year?: string): Date {
        if (month && year) {
            return new Date(parseInt(year as string),
                parseInt(month as string),
                parseInt(day as string));

        } else {
            throw Error("Illegal argument exception!");
        }
    }

    private convertNumberDataToDate(day: number, month?: number, year?: number): Date {
        if (month && year) {
            return new Date(year, month, day);
        } else {
            throw Error("Illegal argument exception!");
        }
    }

    private convertArrayToDate(dateArray: number[] | string[] | Date[]): Date | Date[] {
        if (typeof dateArray[0] === 'number') {
            return this.convertNumberArrayToDate(dateArray as number[]);
        } else if (typeof dateArray[0] === 'string') {
            return this.convertStringArrayToDate(dateArray as string[]);
        } else {
            return this.handleDateArray(dateArray as Date[]);
        }
    }

    private convertNumberArrayToDate(dateArray: number[]): Date {
        if (dateArray.length === 3) {
            return this.dateConverter(dateArray[0] as number,
                dateArray[1] as number,
                dateArray[2] as number);
        } else {
            throw Error("Illegal argument exception!");
        }
    }

    private handleDateArray(dateArray: Date[]): Date[] {
        let resultArray: Date[] = [];
        for (let i = 0; i < dateArray.length; i++) {
            if (dateArray[i] instanceof Date) {
                resultArray.push(
                    new Date(dateArray[i].getFullYear(),
                        dateArray[i].getMonth(),
                        dateArray[i].getDate()));
            } else {
                throw Error("Illegal argument exception!");
            }
        }
        return resultArray;
    }

    private convertStringArrayToDate(dateArray: string[]): Date {
        if (dateArray.length === 3) {
            return this.dateConverter(dateArray[0] as string,
                dateArray[1] as string,
                dateArray[2] as string);
        } else {
            throw Error("Illegal argument exception!");
        }
    }

}

let converter: DateConverter = new DateConverter();

console.log("Date converter method. Pass string: " + converter.dateConverter("01", "03", "2012"));
console.log("Date converter method. Pass number: " + converter.dateConverter(25, 11, 2012));

console.log("Date converter method. Pass number array: " + converter.dateConverter([23, 11, 2001]));
console.log("Date converter method. Pass string array: " + converter.dateConverter(["01", "05", "2003"]));

console.log("Date converter method. Date array converter calling...");
let dates: Date[] = converter.dateConverter([new Date(2001, 0, 1), new Date(2002, 1, 2)]);
for (let i = 0; i < dates.length; i++) {
    console.log("Date converter method. Date item: " + dates[i]);
}