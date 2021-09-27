function move(array, index, offset){
    let newArray = [...array];
    let newElementPosition = index + offset;

    let replacedElement = newArray[index];
    let element = newArray[newElementPosition];


    newArray.splice(newElementPosition, 1, replacedElement);
    newArray.splice(index, 1, element);
    return newArray;
}

const numbers = [1,2,3,4];

console.log(move(numbers, 1, 2));