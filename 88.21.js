function countOccurrences(array, searchElement){
    let count = 0;
    array.reduce()
    for(let entry of array){
        if(entry === searchElement){
            count++;
        }
    }
    return count;
} 

console.log(countOccurrences([1,2,3,4,1,1,1,1,1], 1));