function countTruthy(array){
    return array.reduce((numberOfTruthyValues, nextValue) => {
        if (nextValue){
            numberOfTruthyValues++;
        }
        return numberOfTruthyValues;
    }, 0);
}

console.log(countTruthy([5, 2, NaN, undefined, null, -1, 0, '', "", false, 1, 2, '  ']));