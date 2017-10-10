function dateConverter(dayOrDate: string, month: string, year: string): Date;
function dateConverter(dayOrDate: number, month: number, year: number): Date;

function dateConverter(days: Date[]): Date [];
function dateConverter(days : string[]): Date;
function dateConverter(days : number[]): Date;

function dateConverter(date : string): Date;
function dateConverter(date : Object): Date;

function dateConverter(dayOrDate: any, month?: any, year?: any): Date | Date [] {
    if(typeof dayOrDate === "string") {
        return convertStringDataToDate(dayOrDate, month, year);
    }
    if(typeof dayOrDate === "number") {
        return convertNumberDataToDate(dayOrDate, month, year);
    }    

    if(typeof dayOrDate === "number") {
        return convertNumberDataToDate(dayOrDate, month, year);
    }  
    
    if(Array.isArray(dayOrDate)) {
        if(dayOrDate.length == 0) {
            throw Error("Illegal argument exception!");    
        } else {
            return convertArrayToDate(dayOrDate);
        }
    }

}

function convertStringDataToDate(day: string, month?: string, year?: string): Date {
    if(month && year) {
        return new Date(parseInt(year as string), 
                        parseInt(month as string), 
                        parseInt(day as string));

    } else {
        throw Error("Illegal argument exception!");
    }
}

function convertNumberDataToDate(day: number, month?: number, year?: number): Date {
    if(month && year) {
        return new Date(year, month, day);
    } else {
        throw Error("Illegal argument exception!");
    }
}

function convertArrayToDate(dateArray: number[] | string [] | Date []): Date | Date [] {
    if(typeof dateArray[0] === 'number') {
        return convertNumberArrayToDate(dateArray as number []);
    } else if(typeof dateArray[0] === 'string') {
        return convertStringArrayToDate(dateArray as string []);
    } else {
        return handleDateArray(dateArray as Date []);
    }
}

function convertNumberArrayToDate(dateArray: number[]): Date {
    if(dateArray.length === 3) {
        return dateConverter(dateArray[0] as number, 
                            dateArray[1] as number, 
                            dateArray[2] as number);
    } else {
        throw Error("Illegal argument exception!");
    }
}

function handleDateArray(dateArray: Date[]): Date[] {
    let resultArray: Date [] = [];
    for(let i = 0; i < dateArray.length; i++) {
        if(dateArray[i] instanceof Date) {
            resultArray.push(
                new Date(dateArray[i].getFullYear(), 
                    dateArray[i].getMonth(), 
                    dateArray[i].getDay()));
        } else {
            throw Error("Illegal argument exception!");
        }
    }
    return resultArray;
}

function convertStringArrayToDate(dateArray: string[]): Date {
    if(dateArray.length === 3) {
        return dateConverter(dateArray[0] as string, 
                            dateArray[1] as string, 
                            dateArray[2] as string);
    } else {
        throw Error("Illegal argument exception!");
    }
}



console.log("Date converter method. Pass string: " + dateConverter("01", "03", "2012"));
console.log("Date converter method. Pass number: " + dateConverter(25, 11, 2012));

console.log("Date converter method. Pass number array: " + dateConverter([23, 11, 2001]));
console.log("Date converter method. Pass string array: " + dateConverter(["01", "05", "2003"]));

console.log("Date converter method. Date array converter calling..." );
let dates: Date [] = dateConverter([new Date(2001, 0, 1), new Date(2002, 1, 2)]);
for (let i = 0; i < dates.length; i++) {
    console.log("Date converter method. Date item: " + dates[i]);
}