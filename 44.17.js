function sum(limit){
    if(typeof(limit) !== 'number'){
        return 'Try to input number';
    }
    let sum = 0;
    let flag = false;
    if(limit < 0){
        limit = -limit;
        flag = true;
    }
    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    if(flag){
        sum = -sum;
    }
    return sum;
}

console.log(sum());