/* Написать функцию, которая принимает массив чисел и возвращает самое большое в нем число.*/

function countOccurrences(array){
    return array.reduce((max, element) => max > element? max : element)
} 

console.log(countOccurrences([0,2,3,1,11,8]));