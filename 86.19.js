/* Написать функцию, которая принимает 2 параметра - 2 массива. Функция должна вернуть массив, содержащий все элементы 1-ого массива,
за исключением элементов из 2-ого массива*/

function except(array, excluded){
    let indexInArray;
    for(let key in excluded){
        indexInArray = array.indexOf(excluded[key]);
        if(indexInArray !== -1){
        array.splice(indexInArray, 1)
        }
    }
    return array;
}

console.log(except([1,2,3,4,5,6,7, -2, 120], [1,2,3,4,5,6,7, -1, 120 ]));