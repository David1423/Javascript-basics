const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2016, rating: 3},
    {title: 'd', year: 2015, rating: 4},
    {title: 'e', year: 2017, rating: 2.5},
];

/**
 * get movies in 2018 with descending order of rating
 */


const filteredMovies = movies
                        .filter( movie => movie.year === 2018 && movie.rating >= 4)
                        .sort((movie1,movie2)=> movie1 < movie2 )
                        .map(movie => movie.title);
console.log(filteredMovies);