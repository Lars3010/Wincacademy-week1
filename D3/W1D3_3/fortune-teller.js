let tellFortune = function(childrenNum, partnerName, location, jobTitle){
    return 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' + partnerName + ' with ' + childrenNum + ' kids' ;
}

console.log(tellFortune(4, 'henk', 'amsterdam', 'programmer'));
console.log(tellFortune(3, 'sarah', 'rotterdam', 'banker'));
console.log(tellFortune(16, 'klaas', 'den haag', 'CEO'));