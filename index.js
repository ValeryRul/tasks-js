function fizzBuzz(input){
    return message = typeof(input) === 'number' ? (input % 3 === 0 || input % 5 === 0 ? (input % 3 === 0 ? (input % 5 === 0 ? 'FizzBuzz' : 'Fizz'): 'Buzz') : 'input'): ('Not a number');
}
console.log(fizzBuzz(1));




/*  */

//Ex65.18

/*  */


//Ex 84.17

/* function arrayFromRange(min, max){
    let length = max - min + 1;
    let arrayWithNumbers = [];
    for(let i = 0; i < length; i++){
        arrayWithNumbers[i] = min + i;
    }
    return arrayWithNumbers;
}

console.log(arrayFromRange(-10, -5));

function arrayFromRange1(min, max){
    let arrayWithNumbers = [];
    for (let i = min; i <= max; i++){
        arrayWithNumbers.push(i);
    }
    return arrayWithNumbers;
} */

//Ex 85.18

/* function includes(array, element){
    let flag = false;
    for(let entry of array){
        if(entry === element){
            flag = true;
        }
    }
    return flag;
}


console.log(includes([1,8,7,5,13], 5)); */


//Ex 86.19

/* function except(array, excluded){
    let newArray = [];
    for(let element of array){
        if (!excluded.includes(element)){
            newArray.push(element);
        }
    return newArray;
    }
} */




//Ex 47.20

/* function showPrimes(limit){
    for(let i = 2; i <= limit; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

function isPrime(number){
    let count = 0;
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            count++;
            if(count > 2){
               return false;
            }
        }
    }
    return true;
}

showPrimes(4); */



//EX 87.20

/* function move(array, index, offset){
    let newArray = [...array];
    let newElementPosition = index + offset;

    let replacedElement = newArray[index];
    let element = newArray[newElementPosition];


    newArray.splice(newElementPosition, 1, replacedElement);
    newArray.splice(index, 1, element);
    return newArray;
}

const numbers = [1,2,3,4];

console.log(move(numbers, 1, 2)); */


//Ex 88.21

/* function countOccurrences(array, searchElement){
    let count = 0;
    array.reduce()
    for(let entry of array){
        if(entry === searchElement){
            count++;
        }
    }
    return count;
} 

console.log(countOccurrences([1,2,3,4,1,1,1,1,1], 1)); */


/* function countOccurrences(array, searchElement){
     return array.reduce((count, currentValue) => {
        let increment = (searchElement === currentValue ) ? 1 : 0;
        return count + increment;
    }, 0)
} 

console.log(countOccurrences([1,2,3,4,1,1,1,1,1], 1));
 */

//EX 89.22

/* function getMax(array){
    return array.reduce((count, element) =>  { return count > element? count : element})
}

console.log(getMax([1,2,3,4,1,1,1,1,1])); */


//EX 90.23

/* const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2015, rating: 2},
    {title: 'd', year: 2017, rating: 4.8}
]

function chooseByFilmingYear(movies, year){
    return movies.filter(movie => movie.year === year)
}

console.log(chooseMovieByRating(chooseByFilmingYear(movies, 2018), 4).sort((movie1, movie2) => -(movie1.rating - movie2.rating)));

function chooseMovieByRating(movies, rating){
    return movies.filter(movie => movie.rating >= rating);
} */