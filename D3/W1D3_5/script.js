const colors = ['yellow', 'blue', 'red', 'orange'];
let x = 0;

while(x < colors.length) {
    console.log(colors[x]);
    x++;
}

for(i=0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach( (color) => {
    console.log(color);
})

/*
1. Hoeveel regels neemt mijn for loop in beslag?
    3

2. Hoeveel regels neemt mijn `forEach` method in beslag?
    3

3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    Een van de voordelen is dat je de loop niet hoeft te stoppen wanneer je het einde van de array bereikt. Je hoeft ook niet de lengte te weten van de array of hoe lang
    je wilt itereren.
    De forEach makkelijker leesbaar doordat er visueel minder aan de hand is zoals bij een for loop. Hierdoor is het makkelijker te zien wat er gebeurt.

4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig
te `console.log` en. Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
    Ja je itereert nog steeds omdat je met loops bezig bent.
*/

const person = {
    name: 'henk',
    age: 45,
    location: 'Tilburg',
    pet: 'dog',
    job: 'doctor'
};

Object.values(person).forEach((prop) => {
    console.log(prop);
})