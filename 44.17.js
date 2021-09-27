/* Написать функцию, которая принимает числовое значение и возвращает сумму всех элементов, кратных 3 или 5, из диапазона
от 0 до переданного в функцию числа */

function sum(limit){
    if(typeof(limit) !== 'number'){
        return 'Try to input number';
    }
    let sum = 0;
    let isNegative = false;
    if(limit < 0){
        limit = -limit;
        isNegative = true;
    }
    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    if(isNegative){
        sum = -sum;
    }
    return sum;
}

console.log(sum(-5));