const age = 15;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Sarah';
const totalAmount = 55;

if(age >= 18) {
    console.log('Je mag naar binnen');
}
else {
    console.log('Je bent te jong');
}

if(age >= 18 && age <= 25) {
    console.log('Je krijgt 25% korting');
}
else {
    console.log('Je krijgt geen korting');
}

if(name === 'Sarah' || name === 'Bram') {
    console.log('Je hebt recht op een gratis biertje')
}

if(totalAmount >= 100) {
    console.log('Je krijgt een gratis fles champagne');
}
else if(totalAmount >= 50) {
    console.log('Je krijgt nachos');
}
else if (totalAmount >= 25) {
    console.log('Je krijgt gratis bitterballen');
}
else {
    'Uw totaalbedrag is ' + totalAmount;
}

if(isFemale) {
    console.log('Kom maar binnen');
}
else {
    console.log("Het is ladies night, kom maar een andere keer terug");
}

if(driverStatus === 'bob') {
    console.log('Je mag rijden.');
}
else {
    console.log('Jij bent de bob niet. Je mag niet rijden');
}