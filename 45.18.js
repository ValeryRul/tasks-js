/* Написать функцию, которая принимает массив оценок студента, считает средний балл и, в зависимости от значения среднего балла,
вызвращает строковое значение, говорящее об успеваемости студента. 
F, если средний балл от 0 до 59 включительно.
D, если средний балл от 60 до 69 включительно.
C, если средний балл от 70 до 79 включительно.
B, если средний балл от 80 до 89 включительно.
A, если средний балл от 90 до 100 включительно.*/

function calculateGrade(marks){
let result = calculateAverage(marks);
console.log(result);
if(typeof(result === 'number')){
    if(result < 60) return 'F';
    if(result < 70) return 'D';
    if(result < 80) return 'C';
    if(result < 90) return 'B';
    if(result <= 100) return 'A';
}
return result;
}


function calculateAverage(marks){
    let flag = marks.some(mark => (0 > mark ||  100 > mark || typeof(mark) !== 'number'));
    if(flag){
        return 'Uncorrect array. Might be marks, which are >= 0 and <= 100'
    }
    return (marks.reduce((average, mark) => average += mark)/marks.length);
}


let marks = ["80",80, ];
console.log(calculateGrade(marks));
console.log(calculateAverage(marks));