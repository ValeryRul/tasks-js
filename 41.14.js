function showNumber(limit){
    if(typeof(limit) !== 'number' || limit < 0 || limit === Infinity){
        console.log('Please, input a positive number and repeat operation');
        return;
    }
    for(let i = 0; i <= limit; i++){
        console.log(i % 2 === 0 ? `${i} EVEN` : `${i} ODD`);
    }
}


showNumber(0.999999);
// showNumber("10");
// showNumber(10);
// showNumber(10);
// showNumber(10);
// showNumber(10);
// showNumber(10);
// showNumber(10);
// showNumber(10);