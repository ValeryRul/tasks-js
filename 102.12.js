/* Написать функцию, которая принимает много числовых параметров, и возращает сумму этих параметров*/

function sum(...args){
    return args.reduce((sum, nextValue) => sum += nextValue);
}

console.log(sum(1,2,3,4,5,6,7));
