function showProperties(obj){
    for(let key in obj){
        if(typeof(obj[key]) === 'string' && obj[key] !== ''){
            console.log(key, obj[key]);
        }
    }
}

let obj = {
    name: 'dsdfsd',
    age : 15,
    car: 'lamborghini',
    money: 100500,
    bla: undefined,
    blur: Infinity,
    dfs: null,
    ds: ""
}
showProperties(obj);