//greet the user with a prompt and return the name
const greetUser = () => {
    let name = prompt('Welkom, wat is je naam?', '');
    console.log(name);
    alert('Hallo ' + name);
    return name;
}

//ask for a number with a prompt and return the number
const askNumber = () => {
    let number = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...', 0);
    return parseInt(number);   
}

//generate random number in a range
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

//check if a guess is correct
const checkGuess = (userName, guessNumber, askedNumber, attempts) => {
    console.log('a: ' + attempts);
    if(attempts  !== 0){
        if(askedNumber === guessNumber) {
            console.log('correct');
            alert('Gefeliciteerd, je hebt gewonnen.');
            alert('Dag ' + name + '. Tot de volgende keer!');
        }
        else {
            console.log('incorrect');
            attempts--;
            alert('Dat is niet correct. Je hebt nog ' + attempts + ' poging(en) over.');
            askedNumber = askNumber();
            checkGuess(userName, guessNumber, askedNumber, attempts);
        }
    }
    else {
        console.log('game over');
        alert('Game over ' + name + '. Tot de volgende keer!');
    }
}

//get a range to select a number from
const getNumberRange = () => {
    let range = [];
    const minRange = prompt('Vul de laagste drempelwaarde in', 0);
    range.push(minRange);
    const maxRange = prompt('Vul de hoogste drempelwaarde in', 25);
    range.push(maxRange);
    return range;
}

//greet user
let userName = greetUser();
//ask number range
const numberRange = getNumberRange();
//generate random number
const guessNumber = generateRandomNumber(numberRange[0], numberRange[1]);
console.log(guessNumber);
let attempts = 5;
//store number from prompt and compare

let askedNumber = askNumber();
checkGuess(userName, guessNumber, askedNumber, attempts);