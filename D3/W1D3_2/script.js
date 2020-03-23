//MakeSandwich
    //Pak een broodje
    //Snijd het broodje doormidden
    //Voeg een plak kaas toe
    //Voeg een plak ham toe

function MakeSandwich()
{
    console.log("Pak een broodje");
    console.log("Snijd het broodje doormidden");
    console.log("Voeg een plak kaas toe");
    console.log("Voeg een plak ham toe");
}
MakeSandwich();

//functie declaratie
function MakeSandwich(topping)
{
    console.log("Here you go, a sandwich with " + topping);
}

//functie call
MakeSandwich('ham');
MakeSandwich('cheese');

let calculateDiscountPrice = function(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountPrice(30.50,10));

let calculateDiscountPriceTwo = function(totalAmount, discount) {
    if(totalAmount > 25) {
        return Math.round(totalAmount - discount);
    }
    else {
        return totalAmount;
    }
}

console.log(calculateDiscountPriceTwo(20,10));