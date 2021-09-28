function fizzBuzz(input){
    return message = typeof(input) === 'number' ? (input % 3 === 0 || input % 5 === 0 ? (input % 3 === 0 ? (input % 5 === 0 ? 'FizzBuzz' : 'Fizz'): 'Buzz') : 'input'): ('Not a number');
}
console.log(fizzBuzz(1));
