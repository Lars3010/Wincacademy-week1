function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for(i=60; i<=100; i++){
    console.log('For '+ i +', You got a ' + assignGrade(i)); 
}

// console.log('You got a ' + assignGrade(95));
// console.log('You got a ' + assignGrade(65));