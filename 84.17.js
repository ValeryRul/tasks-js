function arrayFromRange(min, max){
    let length = max - min + 1;
    let arrayWithNumbers = [];
    for(let i = 0; i < length; i++){
        arrayWithNumbers[i] = min + i;
    }
    return arrayWithNumbers;
}

console.log(arrayFromRange(-10, -5));

function arrayFromRange1(min, max){
    let arrayWithNumbers = [];
    for (let i = min; i <= max; i++){
        arrayWithNumbers.push(i);
    }
    return arrayWithNumbers;
}