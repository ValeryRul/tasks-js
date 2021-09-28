/* Редактировать функцию так, чтобы она принимала только массив первым параметром. Если придет не массив, функция должна бросить
исключение, которое надо будет отловить в блоке try-catch*/

function countOccurrences(array, searchElement){
    if(!Array.isArray(array)){
        throw new Error('Invalid array');
    }
     
    return array.reduce((count, element) => {
        if (element === searchElement){
            count++;
        }
        return count;
    }, 0)
} 

try{
console.log(countOccurrences([0,2,3,4,1,1,1,1,1]));
}
catch(e){
    console.log(e.message);
}