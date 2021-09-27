/* Написать функцию, которая принимает 2 параметра - 2 массива. Функция должна удалить из 1-ого массива все элементы, которые
содержит 2-ой массив*/

function except(array, excluded){
    let newArray = [];
    for(let element of array){
        if (!excluded.includes(element)){
            newArray.push(element);
        }
    return newArray;
    }
}

console.log(except([1,2,3,4,5,6,7], [1,3,5,7]));