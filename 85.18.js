/* Написать функцию, которая принимает 2 параметра - массив и элемент. Функция должна проверить есть ли в данном массиве переданный
*/


function includes(array, element){
    let flag = false;
    for(let entry of array){
        if(entry === element){
            flag = true;
        }
    }
    return flag;
}


console.log(includes([1,8,7,5,13], 5));