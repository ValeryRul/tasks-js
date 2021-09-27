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
    let flag = marks.some(mark => (mark < 0 || mark > 100 || typeof(mark) !== 'number'));
    if(flag){
        return 'Uncorrect array. Might be marks, which are >= 0 and <= 100'
    }
    return (marks.reduce((average, mark) => average += mark)/marks.length);
}


let marks = [80,80, ];
console.log(calculateGrade(marks));
console.log(calculateAverage(marks));