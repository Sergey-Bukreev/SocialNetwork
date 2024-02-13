export type ValidationFunction = (value: any) => string | undefined;

export const required: ValidationFunction = (value) => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength: number): ValidationFunction => (value):string | undefined => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};
