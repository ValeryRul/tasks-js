function except(array, excluded){
    let newArray = [];
    for(let element of array){
        if (!excluded.includes(element)){
            newArray.push(element);
        }
    return newArray;
    }
}