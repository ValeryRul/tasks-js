function showPrimes(limit){
    if(typeof(limit) !== 'number' || limit === Infinity){
        return console.log ('Please, input a number');
    }
    for(let i = 2; i <= limit; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}


function isPrime(nubmer){
    let count = 0;
    for(let i = 1; i <= nubmer; i++){
        if(nubmer % i === 0){
            count++;
            if(count > 2){
                return false;
            }
        }
    }
    return count < 3;
}

showPrimes(10);