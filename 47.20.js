/* Написать функцию, которая принимает положительное числовое значение и выводит все простые числа от 2 и до этого числа включительно*/

function showPrimes(limit){
    if(typeof(limit) !== 'number' || limit === Infinity || limit < 0){
        return console.log ('Please, input a number');
    }
    for(let i = 2; i <= limit; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}


function isPrime(nubmer){
    for(let i = 2; i < nubmer; i++){
        if(nubmer % i === 0){
            return false;
        }
    }
    return true;
}

showPrimes(1);