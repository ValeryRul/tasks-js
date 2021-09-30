/* Написать функцию, которая принимает 2 числа - min и max, и заполняет массив целыми числами от числа min до числа max*/


//1-й Вариант

function arrayFromRange(min, max){
    let length = max - min + 1;
    let arrayWithNumbers = [];
    for(let i = 0; i < length; i++){
        arrayWithNumbers[i] = min + i;
    }
    return arrayWithNumbers;
}


//2-й Вариант

function arrayFromRange1(min, max){
    let arrayWithNumbers = [];
    for (let i = min; i <= max; i++){
        arrayWithNumbers.push(i);
    }
    return arrayWithNumbers;
}


console.log(arrayFromRange(-10,10));
