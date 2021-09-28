/* Написать функцию, которая принимает 2 параметра - 2 массива. Функция должна вернуть массив, содержащий все элементы 1-ого массива,
за исключением элементов из 2-ого массива*/

function except(array, excluded){
    let newArray = [];
    for(let element of array){
        if (!excluded.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(except([1,2,3,4,5,6,7,0], [1 ," ",5,7]));