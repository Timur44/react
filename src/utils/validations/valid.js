export const requiredField=value=>{
    if(value) return undefined;
    return "Field is required"
}
export const maxLengthCreator=(maxLength)=>value=>{
    if(value && value.length>maxLength) return `Value is ${maxLength}`;
    return undefined;
}