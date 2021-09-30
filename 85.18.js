/* Написать функцию, которая принимает 2 параметра - массив и элемент. Функция должна проверить есть ли в данном массиве переданный
*/


function includes(array, element){
    for(let entry of array){
        if(entry === element){
            return true;
        }
    }
    return false;
}


console.log(includes([1,8,7,5,13,-30], 30));