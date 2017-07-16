export const formatCoOrdinates = (value, decimalPoint) => {
    return Number(Math.round(value + ('e'+ decimalPoint) ) + ('e-' + decimalPoint) ).toFixed(decimalPoint)
}

export const findFieldRowFromGeoSuggest = (input) => {
    let inputString = input.name
    return inputString = inputString.substring(0, inputString.indexOf("."));
}
