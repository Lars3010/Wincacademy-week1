let calculateSupply = function(age, amountPerDay){
    const maxAge = 90;
    let total = Math.round((amountPerDay * 365) * (maxAge - age));
    let message = 'You will need ' + total + ' to last until the ripe old age of ' + maxAge;
    return message;
}

console.log(calculateSupply(24, 6));
console.log(calculateSupply(24, 12));
console.log(calculateSupply(87, 16.5));