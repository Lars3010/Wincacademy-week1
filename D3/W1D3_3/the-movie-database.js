let movie = {
    title: 'The Mummy',
    duration: 125,
    stars: ['Brendan Fraser', 'Rachel Weisz', 'John Hannah']
}

let printMovie = function(){
    return movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars[0] + ", " + movie.stars[1] + ", " + movie.stars[2];
}

console.log(printMovie());