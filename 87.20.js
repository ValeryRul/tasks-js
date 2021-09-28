/* Написать функцию, которая принимает 3 параметра: 
1. массив элемента
2. индекс элемента, который хотим переместить
3. приращение индекса из параметра (2).  
Функция должна вернуть массив, в котором элемент под индексом, переданным в параметре (2) должен переместиться на место, под индексом,
который будет получен в результате приращения параметра (2) на параметр (3).*/

function move(array, index, offset){
    let newElementPosition = index + offset;
    if(newElementPosition > array.length - 1){
        return 'Array Index Out Of Bounds';
    }
    let replacedElement = array.splice(index, 1)[0];
    array.splice(newElementPosition, 0, replacedElement);
    return array;
}

const numbers = [1,2,3,4,5];

console.log(move(numbers, 2, -1));