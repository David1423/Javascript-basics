const marks = [70,70,75 ,70,70];

function calculateGrade(marks){
    let total=0;
    let grade;
    for(let score of marks){
        total += score;
    }

    let average = total / marks.length;

    if(average >= 90 )
        grade = 'A';
    else if (average >=80 && average <= 89)
        grade = 'B';
    else if (average >=70 && average <= 79)
        grade='C';
    else if(average >= 60 && average <= 69)
        grade = 'D';
    else if(average >=50 && average <= 49)
        grade = 'E';
    else
        grade = 'F';

    return grade;
}

console.log('Grade',calculateGrade(marks));