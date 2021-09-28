/* Написать функцию, которая принимает 2 параметра -  массив и искомый в массиве элемент. Функция должна посчитать сколько раз искомый
элемент встречается в даанном массиве и вернуть это число.*/

function countOccurrences(array, searchElement){
    return array.reduce((count, element) => {
        if (element === searchElement){
            count++;
        }
        return count;
    }, 0)
} 

console.log(countOccurrences([0,2,3,4,1,1,1,1,1]));