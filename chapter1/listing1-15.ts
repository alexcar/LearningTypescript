{
    // type annotation for a union type
    let union: boolean | number;

    // OK: number
    union = 5;

    // OK: boolean
    union = true;

    // error: type "string" is not assignable to type 'number | boolean'
    // union = 'string';

    // type alias for a union type
    type StringOrError = string | Error;

    // type alias for union ofmany types
    type SeriesOfTypes = string | number | boolean | Error;
}